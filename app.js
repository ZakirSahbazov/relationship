/* =========================================================
   UYUM FALI — Mini App mantığı
   - Telegram WebApp SDK ile kullanici bilgisi + tema
   - Backend (FastAPI) ile iletisim: register / match / history
   - Dil: Telegram'in gonderdigi language_code'a gore otomatik (bkz. i18n.js)
   ========================================================= */

// ---- BACKEND ADRESINI BURADAN DEGISTIR ----
const API_BASE = "http://91.98.232.83:8000/api";
// --------------------------------------------

const tg = window.Telegram?.WebApp;
tg?.ready();
tg?.expand();

// Telegram'dan gelen kullanici bilgisi (gercek tg_id, username vs.)
const tgUser = tg?.initDataUnsafe?.user || null;
const TG_ID = tgUser?.id || null;
const TG_USERNAME = tgUser?.username || null;
const TG_LANG = tgUser?.language_code || null; // ornek: "tr", "en", "de"... yoksa null -> i18n.js varsayilan "en" kullanir

// Dil sozlugunu hazirla (i18n.js icindeki initI18n fonksiyonu)
const t = initI18n(TG_LANG);
applyStaticTranslations(t);

// <html lang="..">, <title> ve tarih formati da kullanicinin diline gore ayarlanir
const RESOLVED_LANG = resolveLangCode(TG_LANG);
document.getElementById("htmlRoot").setAttribute("lang", RESOLVED_LANG);
document.getElementById("pageTitle").textContent = t("brand");

// URL'den inviter parametresini oku (bot.py icindeki /start <inviter_id> buradan geliyor)
const urlParams = new URLSearchParams(window.location.search);
const inviterTgId = urlParams.get("inviter");

// DOM referanslari
const $ = (id) => document.getElementById(id);
const gate = $("gate");
const nameInput = $("nameInput");
const saveNameBtn = $("saveNameBtn");
const gateError = $("gateError");
const main = $("main");
const meBadge = $("meBadge");
const meName = $("meName");
const heroSection = $("heroSection");
const revealSection = $("revealSection");
const inviteBtn = $("inviteBtn");
const reInviteBtn = $("reInviteBtn");
const historyList = $("historyList");
const historyEmpty = $("historyEmpty");
const historyCount = $("historyCount");
const toast = $("toast");

let currentUserName = null;

// ---------------------------------------------------------------------------
// Yardimcilar
// ---------------------------------------------------------------------------
function showToast(msg, ms = 2400) {
  toast.textContent = msg;
  toast.classList.add("show");
  toast.classList.remove("hidden");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), ms);
}

async function api(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const detail = await res.json().catch(() => ({}));
    throw new Error(detail.detail || t("toast_generic_error"));
  }
  return res.json();
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(RESOLVED_LANG, { day: "numeric", month: "short" });
}

// Yuzdeye gore kalp rengi (dusuk->soluk, yuksek->dolgun mercan)
function heartFillColor(pct) {
  if (pct >= 70) return "#FF6B6B";
  if (pct >= 40) return "#D4A85A";
  return "#8C5A63";
}

function heartSvg(pct) {
  const color = heartFillColor(pct);
  return `
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 20.5s-7.5-4.6-10.2-9.4C0.2 8.1 1.6 4.5 5 3.6c2-0.5 3.9 0.3 5 2 1.1-1.7 3-2.5 5-2 3.4 0.9 4.8 4.5 3.2 7.5C19.5 15.9 12 20.5 12 20.5z"
        fill="${color}" />
    </svg>`;
}

function renderHistoryRow(m) {
  // m.user1_name / m.user2_name / m.percentage / m.created_at
  const row = document.createElement("div");
  row.className = "history-row";
  row.innerHTML = `
    <div class="history-heart">
      ${heartSvg(m.percentage)}
      <span class="history-heart-pct">${m.percentage}</span>
    </div>
    <div class="history-pair">
      <div class="history-names">${escapeHtml(m.user1_name)} &amp; ${escapeHtml(m.user2_name)}</div>
      <div class="history-date">${formatDate(m.created_at)}</div>
    </div>
    <div class="history-pct-big">%${m.percentage}</div>
  `;
  return row;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---------------------------------------------------------------------------
// 1) Kullanici kontrolu: ismi var mi?
// ---------------------------------------------------------------------------
async function init() {
  if (!TG_ID) {
    // Telegram disinda (tarayicida) test ediliyorsa diye yumusak bir uyari
    gateError.textContent = t("gate_error_outside_telegram");
  }

  try {
    const user = TG_ID ? await api(`/user/${TG_ID}`) : null;
    if (user && user.name) {
      currentUserName = user.name;
      enterMain();
    } else {
      showGate();
    }
  } catch (e) {
    showGate();
  }
}

function showGate() {
  gate.classList.remove("hidden");
  main.classList.add("hidden");
  meBadge.classList.add("hidden");
  setTimeout(() => nameInput.focus(), 200);
}

async function enterMain() {
  gate.classList.add("hidden");
  main.classList.remove("hidden");
  meBadge.classList.remove("hidden");
  meName.textContent = currentUserName;

  if (inviterTgId) {
    // Davetle gelindi -> otomatik test ekrani
    heroSection.classList.add("hidden");
    await runInvitedMatch();
  } else {
    heroSection.classList.remove("hidden");
  }

  loadHistory();
}

// ---------------------------------------------------------------------------
// 2) Isim kaydetme
// ---------------------------------------------------------------------------
saveNameBtn.addEventListener("click", saveName);
nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") saveName();
});

async function saveName() {
  const name = nameInput.value.trim();
  gateError.textContent = "";

  if (!name) {
    gateError.textContent = t("gate_error_empty");
    return;
  }
  if (!TG_ID) {
    gateError.textContent = t("gate_error_no_telegram");
    return;
  }

  saveNameBtn.disabled = true;
  saveNameBtn.textContent = t("gate_saving");

  try {
    const user = await api("/register", {
      method: "POST",
      body: JSON.stringify({
        tg_id: TG_ID,
        name,
        username: TG_USERNAME,
        invited_by: inviterTgId ? Number(inviterTgId) : null,
        language_code: TG_LANG,
      }),
    });
    currentUserName = user.name;
    enterMain();
  } catch (e) {
    gateError.textContent = e.message;
  } finally {
    saveNameBtn.disabled = false;
    saveNameBtn.textContent = t("gate_continue");
  }
}

// ---------------------------------------------------------------------------
// 3) Davetle gelindiyse: otomatik eslesme testi
// ---------------------------------------------------------------------------
async function runInvitedMatch() {
  revealSection.classList.remove("hidden");

  const revealName1 = $("revealName1");
  const revealName2 = $("revealName2");
  const revealPercent = $("revealPercent");
  const revealCaption = $("revealCaption");
  const ringFill = $("ringFill");

  try {
    const result = await api("/match", {
      method: "POST",
      body: JSON.stringify({
        inviter_tg_id: Number(inviterTgId),
        tester_tg_id: TG_ID,
        tester_name: currentUserName,
        tester_username: TG_USERNAME,
        language_code: TG_LANG,
      }),
    });

    revealName1.textContent = result.user1_name;
    revealName2.textContent = result.user2_name;
    revealCaption.textContent = t("reveal_calculating");

    // Saniye sonra animasyonla acil
    await sleep(700);
    animatePercent(result.percentage, revealPercent, ringFill);
    revealCaption.textContent = matchCaption(result.percentage);
    $("reInviteBtn").classList.remove("hidden");

    tg?.HapticFeedback?.notificationOccurred?.("success");
  } catch (e) {
    revealCaption.textContent = e.message;
  }
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

function animatePercent(target, percentEl, ringEl) {
  const circumference = 540.35; // 2 * PI * r(86)
  const offset = circumference - (circumference * target) / 100;
  ringEl.style.strokeDashoffset = offset;

  let current = 0;
  const duration = 1100;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    current = Math.round(progress * target);
    percentEl.textContent = `${current}%`;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function matchCaption(pct) {
  if (pct >= 85) return t("caption_90");
  if (pct >= 60) return t("caption_60");
  if (pct >= 35) return t("caption_35");
  return t("caption_0");
}

// ---------------------------------------------------------------------------
// 4) Davet linki olusturma (hem hero hem reveal sonrasi buton icin)
// ---------------------------------------------------------------------------
const BOT_USERNAME = "senin_bot_kullanici_adin_bot"; // <-- @ olmadan, BotFather'dan aldigin

function shareInviteLink() {
  if (!TG_ID) {
    showToast(t("reveal_need_telegram"));
    return;
  }
  const link = `https://t.me/${BOT_USERNAME}?start=${TG_ID}`;
  const shareText = t("share_text").replace("{name}", currentUserName);

  if (tg?.openTelegramLink) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(shareText)}`;
    tg.openTelegramLink(url);
  } else {
    navigator.clipboard?.writeText(link);
    showToast(t("reveal_link_copied"));
  }
}

inviteBtn.addEventListener("click", shareInviteLink);
reInviteBtn.addEventListener("click", shareInviteLink);

// ---------------------------------------------------------------------------
// 5) Gecmis eslesmeleri yukle
// ---------------------------------------------------------------------------
async function loadHistory() {
  if (!TG_ID) return;
  try {
    const data = await api(`/history/${TG_ID}`);
    historyList.innerHTML = "";

    if (!data.matches || data.matches.length === 0) {
      historyEmpty.classList.remove("hidden");
      historyCount.textContent = "";
      return;
    }

    historyEmpty.classList.add("hidden");
    historyCount.textContent = `${data.matches.length} ${t("history_count_suffix")}`;
    data.matches.forEach((m) => historyList.appendChild(renderHistoryRow(m)));
  } catch (e) {
    // Gecmis yuklenemezse sessizce gec, ana akisi bozma
    historyEmpty.classList.remove("hidden");
  }
}

// ---------------------------------------------------------------------------
init();
