/* =========================================================
   UYUM FALI — i18n (çoklu dil)
   Telegram WebApp, kullanicinin dilini initDataUnsafe.user.language_code
   alaninda ISO 639-1 kodu olarak verir (ornek: "tr", "en", "de", "ru"...).
   Bu dosya o koda gore dogru sozlugu secer.
   Herhangi bir hata/eksik durumda (kod yok, desteklenmeyen kod vb.)
   HER ZAMAN "en" (Ingilizce) varsayilana duser.
   ========================================================= */

const DEFAULT_LANG = "en";

const DICTIONARIES = {
  en: {
    brand: "Match Fortune",
    me_loading: "...",

    gate_eyebrow: "before we start",
    gate_title: "What's your name?",
    gate_sub: "You'll appear in the fortune with this name.",
    gate_placeholder: "Type your name...",
    gate_continue: "Continue",
    gate_saving: "Saving...",
    gate_error_empty: "You need to enter a name.",
    gate_error_no_telegram: "Couldn't get your Telegram info.",
    gate_error_outside_telegram: "This app should be opened inside Telegram.",

    hero_eyebrow: "pure luck, pure fun",
    hero_title_l1: "Invite someone,",
    hero_title_l2: "see your match.",
    hero_sub: "When your friend taps the link and types their name, your match percentage shows up instantly.",
    invite_btn: "Invite a Friend",
    reinvite_btn: "Invite Someone Else",

    reveal_eyebrow: "Reading the stars",
    reveal_calculating: "The stars are calculating...",
    reveal_link_copied: "Link copied!",
    reveal_need_telegram: "You need Telegram to get an invite link.",

    caption_90: "The stars rarely align like this ✨",
    caption_60: "There's a really nice energy between you two.",
    caption_35: "Not bad — could go either way.",
    caption_0: "Eh, not everyone has to match with everyone 😄",

    history_title: "Past Fortunes",
    history_count_suffix: "tests",
    history_empty_title: "No fortunes told yet.",
    history_empty_sub: "Be the first — invite someone.",

    share_text: "{name} is inviting you to Match Fortune 💘 Tap to see your match:",

    toast_generic_error: "Something went wrong.",
  },

  tr: {
    brand: "Uyum Falı",
    me_loading: "...",

    gate_eyebrow: "başlamadan önce",
    gate_title: "Adın ne olsun?",
    gate_sub: "Falda bu isimle görüneceksin.",
    gate_placeholder: "İsmini yaz...",
    gate_continue: "Devam Et",
    gate_saving: "Kaydediliyor...",
    gate_error_empty: "Bir isim yazmalısın.",
    gate_error_no_telegram: "Telegram kullanıcı bilgisi alınamadı.",
    gate_error_outside_telegram: "Bu uygulama Telegram içinde açılmalı.",

    hero_eyebrow: "tamamen şans, tamamen eğlence",
    hero_title_l1: "Birini davet et,",
    hero_title_l2: "uyumunuzu öğren.",
    hero_sub: "Arkadaşın linke tıklayıp adını yazınca, aranızdaki yüzde anında ortaya çıkar.",
    invite_btn: "Arkadaşını Davet Et",
    reinvite_btn: "Sen de Birini Davet Et",

    reveal_eyebrow: "Fal açılıyor",
    reveal_calculating: "Yıldızlar hesaplıyor...",
    reveal_link_copied: "Link kopyalandı!",
    reveal_need_telegram: "Davet linki için Telegram gerekli.",

    caption_90: "Yıldızlar nadiren bu kadar hizalanır ✨",
    caption_60: "Aranızda güzel bir enerji var.",
    caption_35: "Fena değil, zamanla görülür.",
    caption_0: "Eh, herkes her şeyle uyumlu olmak zorunda değil 😄",

    history_title: "Geçmiş Fallar",
    history_count_suffix: "test",
    history_empty_title: "Henüz fal bakılmamış.",
    history_empty_sub: "İlk falı sen aç, birini davet et.",

    share_text: "{name} seni Uyum Falı'na davet ediyor 💘 Aranızdaki yüzdeyi öğrenmek için tıkla:",

    toast_generic_error: "Bir şeyler ters gitti.",
  },

  de: {
    brand: "Beziehungs-Orakel",
    me_loading: "...",
    gate_eyebrow: "bevor wir beginnen",
    gate_title: "Wie heißt du?",
    gate_sub: "Mit diesem Namen erscheinst du im Orakel.",
    gate_placeholder: "Gib deinen Namen ein...",
    gate_continue: "Weiter",
    gate_saving: "Speichern...",
    gate_error_empty: "Du musst einen Namen eingeben.",
    gate_error_no_telegram: "Telegram-Daten konnten nicht geladen werden.",
    gate_error_outside_telegram: "Diese App sollte in Telegram geöffnet werden.",
    hero_eyebrow: "reiner zufall, reiner spaß",
    hero_title_l1: "Lade jemanden ein,",
    hero_title_l2: "und sieh eure Übereinstimmung.",
    hero_sub: "Sobald dein Freund auf den Link tippt und seinen Namen eingibt, erscheint sofort eure Prozentzahl.",
    invite_btn: "Freund einladen",
    reinvite_btn: "Lade noch jemanden ein",
    reveal_eyebrow: "Das Orakel wird gelesen",
    reveal_calculating: "Die Sterne rechnen...",
    reveal_link_copied: "Link kopiert!",
    reveal_need_telegram: "Für den Einladungslink wird Telegram benötigt.",
    caption_90: "So eine Übereinstimmung ist selten ✨",
    caption_60: "Da ist eine wirklich schöne Energie zwischen euch.",
    caption_35: "Nicht schlecht — könnte beides bedeuten.",
    caption_0: "Na ja, nicht jeder muss zu jedem passen 😄",
    history_title: "Frühere Orakel",
    history_count_suffix: "Tests",
    history_empty_title: "Noch kein Orakel befragt.",
    history_empty_sub: "Sei der Erste — lade jemanden ein.",
    share_text: "{name} lädt dich zum Beziehungs-Orakel ein 💘 Tippe, um eure Übereinstimmung zu sehen:",
    toast_generic_error: "Etwas ist schiefgelaufen.",
  },

  ru: {
    brand: "Гадание на совместимость",
    me_loading: "...",
    gate_eyebrow: "прежде чем начать",
    gate_title: "Как тебя зовут?",
    gate_sub: "Ты появишься в гадании под этим именем.",
    gate_placeholder: "Введи имя...",
    gate_continue: "Продолжить",
    gate_saving: "Сохранение...",
    gate_error_empty: "Нужно ввести имя.",
    gate_error_no_telegram: "Не удалось получить данные Telegram.",
    gate_error_outside_telegram: "Это приложение нужно открывать внутри Telegram.",
    hero_eyebrow: "чистая случайность, чистое развлечение",
    hero_title_l1: "Пригласи друга,",
    hero_title_l2: "узнай вашу совместимость.",
    hero_sub: "Когда друг перейдёт по ссылке и введёт имя, процент совместимости появится сразу.",
    invite_btn: "Пригласить друга",
    reinvite_btn: "Пригласить ещё кого-то",
    reveal_eyebrow: "Гадание раскрывается",
    reveal_calculating: "Звёзды считают...",
    reveal_link_copied: "Ссылка скопирована!",
    reveal_need_telegram: "Для ссылки-приглашения нужен Telegram.",
    caption_90: "Звёзды редко так сходятся ✨",
    caption_60: "Между вами действительно хорошая энергия.",
    caption_35: "Неплохо — может быть по-разному.",
    caption_0: "Ну, не всем суждено совпасть со всеми 😄",
    history_title: "Прошлые гадания",
    history_count_suffix: "тестов",
    history_empty_title: "Гаданий пока не было.",
    history_empty_sub: "Будь первым — пригласи кого-нибудь.",
    share_text: "{name} приглашает тебя на гадание совместимости 💘 Нажми, чтобы узнать результат:",
    toast_generic_error: "Что-то пошло не так.",
  },

  es: {
    brand: "Oráculo de Pareja",
    me_loading: "...",
    gate_eyebrow: "antes de empezar",
    gate_title: "¿Cómo te llamas?",
    gate_sub: "Aparecerás en el oráculo con este nombre.",
    gate_placeholder: "Escribe tu nombre...",
    gate_continue: "Continuar",
    gate_saving: "Guardando...",
    gate_error_empty: "Debes escribir un nombre.",
    gate_error_no_telegram: "No se pudo obtener tu información de Telegram.",
    gate_error_outside_telegram: "Esta app debe abrirse dentro de Telegram.",
    hero_eyebrow: "pura suerte, pura diversión",
    hero_title_l1: "Invita a alguien,",
    hero_title_l2: "descubre vuestra compatibilidad.",
    hero_sub: "Cuando tu amigo toque el enlace y escriba su nombre, el porcentaje aparece al instante.",
    invite_btn: "Invitar a un amigo",
    reinvite_btn: "Invita a alguien más",
    reveal_eyebrow: "Leyendo el oráculo",
    reveal_calculating: "Las estrellas están calculando...",
    reveal_link_copied: "¡Enlace copiado!",
    reveal_need_telegram: "Necesitas Telegram para el enlace de invitación.",
    caption_90: "Las estrellas rara vez se alinean así ✨",
    caption_60: "Hay muy buena energía entre vosotros.",
    caption_35: "No está mal — podría ser de cualquier forma.",
    caption_0: "Bueno, no todos tienen que ser compatibles con todos 😄",
    history_title: "Oráculos pasados",
    history_count_suffix: "pruebas",
    history_empty_title: "Todavía no se ha consultado el oráculo.",
    history_empty_sub: "Sé el primero — invita a alguien.",
    share_text: "{name} te invita al Oráculo de Pareja 💘 Toca para ver vuestra compatibilidad:",
    toast_generic_error: "Algo salió mal.",
  },
};

/**
 * Telegram'dan gelen language_code'a gore dogru sozlugu secer.
 * - language_code "tr-TR" gibi gelirse de sadece "tr" kismini alir.
 * - Sozlukte olmayan/bos/null gelen her durumda DEFAULT_LANG'e (en) duser.
 */
function initI18n(languageCode) {
  let lang = DEFAULT_LANG;
  try {
    if (languageCode && typeof languageCode === "string") {
      const base = languageCode.split("-")[0].toLowerCase();
      if (DICTIONARIES[base]) lang = base;
    }
  } catch (e) {
    lang = DEFAULT_LANG; // her ihtimale karsi guvenli varsayilan
  }

  const dict = DICTIONARIES[lang] || DICTIONARIES[DEFAULT_LANG];

  // t("key") seklinde kullanilir, sozlukte yoksa "en" sozlugune, o da yoksa key'in kendisine duser.
  return function t(key) {
    return dict[key] ?? DICTIONARIES[DEFAULT_LANG][key] ?? key;
  };
}

/**
 * Telegram language_code'unu, sozlukte desteklenen bir koda indirger.
 * Hicbir esleşme yoksa DEFAULT_LANG ("en") doner.
 * date formatlama (toLocaleDateString) gibi yerlerde kullanilir.
 */
function resolveLangCode(languageCode) {
  try {
    if (languageCode && typeof languageCode === "string") {
      const base = languageCode.split("-")[0].toLowerCase();
      if (DICTIONARIES[base]) return base;
    }
  } catch (e) {
    // yut ve varsayilana dus
  }
  return DEFAULT_LANG;
}

/**
 * data-i18n="key" attribute'u olan tum elementlerin textContent'ini doldurur.
 * data-i18n-placeholder="key" olanlarin placeholder'ini doldurur.
 */
function applyStaticTranslations(t) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });
}
