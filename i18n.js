/* =========================================================
   UYUM FALI — i18n (çoklu dil)
   Telegram WebApp, kullanicinin dilini initDataUnsafe.user.language_code
   alaninda ISO 639-1 kodu olarak verir (ornek: "tr", "en", "de", "ru"...).
   Bu dosya o koda gore dogru sozlugu secer.
   Herhangi bir hata/eksik durumda (kod yok, desteklenmeyen kod vb.)
   HER ZAMAN "en" (Ingilizce) varsayilana duser.

   Dil siralamasi, Telegram'in en cok kullanildigi ulkelerden
   en aza dogru secildi (2025-2026 indirme/kullanici verilerine gore):
   1. en  - ABD / global ortak dil
   2. ru  - Rusya (Telegram'in dogdugu yer)
   3. hi  - Hindistan (en buyuk tekil pazar, ~104M indirme)
   4. id  - Endonezya
   5. ur  - Pakistan
   6. tr  - Turkiye
   7. uk  - Ukrayna
   8. uz  - Ozbekistan
   9. fa  - Iran
   10. pt - Brezilya
   11. ar - Misir / Suudi Arabistan / MENA bolgesi
   12. de - Almanya
   13. it - Italya
   14. es - Latin Amerika / Ispanya
   15. fil - Filipinler
   ========================================================= */

const DEFAULT_LANG = "en";

// RTL (sagdan sola) yazilan diller — arayuzde dir="rtl" uygulamak icin kullanilabilir.
const RTL_LANGS = ["ar", "ur", "fa"];

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

  hi: {
    brand: "जोड़ी भाग्य",
    me_loading: "...",
    gate_eyebrow: "शुरू करने से पहले",
    gate_title: "आपका नाम क्या है?",
    gate_sub: "भाग्य में आप इस नाम से दिखेंगे।",
    gate_placeholder: "अपना नाम लिखें...",
    gate_continue: "जारी रखें",
    gate_saving: "सहेजा जा रहा है...",
    gate_error_empty: "आपको एक नाम दर्ज करना होगा।",
    gate_error_no_telegram: "आपकी Telegram जानकारी प्राप्त नहीं हो सकी।",
    gate_error_outside_telegram: "यह ऐप Telegram के अंदर खोला जाना चाहिए।",
    hero_eyebrow: "पूरी तरह किस्मत, पूरा मज़ा",
    hero_title_l1: "किसी को आमंत्रित करें,",
    hero_title_l2: "अपनी जोड़ी देखें।",
    hero_sub: "जब आपका दोस्त लिंक पर टैप करके अपना नाम लिखेगा, तो आपका मैच प्रतिशत तुरंत दिखेगा।",
    invite_btn: "दोस्त को आमंत्रित करें",
    reinvite_btn: "किसी और को आमंत्रित करें",
    reveal_eyebrow: "सितारे पढ़े जा रहे हैं",
    reveal_calculating: "सितारे गणना कर रहे हैं...",
    reveal_link_copied: "लिंक कॉपी हो गया!",
    reveal_need_telegram: "आमंत्रण लिंक पाने के लिए आपको Telegram की आवश्यकता है।",
    caption_90: "सितारे शायद ही ऐसे मिलते हैं ✨",
    caption_60: "आप दोनों के बीच बहुत अच्छी ऊर्जा है।",
    caption_35: "बुरा नहीं — कुछ भी हो सकता है।",
    caption_0: "अरे, सबका सबके साथ मेल होना ज़रूरी नहीं 😄",
    history_title: "पिछले भाग्य",
    history_count_suffix: "टेस्ट",
    history_empty_title: "अभी तक कोई भाग्य नहीं बताया गया।",
    history_empty_sub: "सबसे पहले बनें — किसी को आमंत्रित करें।",
    share_text: "{name} आपको Match Fortune पर आमंत्रित कर रहे हैं 💘 अपना मैच देखने के लिए टैप करें:",
    toast_generic_error: "कुछ गड़बड़ हो गई।",
  },

  id: {
    brand: "Ramalan Jodoh",
    me_loading: "...",
    gate_eyebrow: "sebelum kita mulai",
    gate_title: "Siapa namamu?",
    gate_sub: "Kamu akan muncul di ramalan dengan nama ini.",
    gate_placeholder: "Tulis namamu...",
    gate_continue: "Lanjutkan",
    gate_saving: "Menyimpan...",
    gate_error_empty: "Kamu harus memasukkan nama.",
    gate_error_no_telegram: "Tidak bisa mendapatkan info Telegram kamu.",
    gate_error_outside_telegram: "Aplikasi ini harus dibuka di dalam Telegram.",
    hero_eyebrow: "murni keberuntungan, murni keseruan",
    hero_title_l1: "Undang seseorang,",
    hero_title_l2: "lihat kecocokanmu.",
    hero_sub: "Saat temanmu mengetuk link dan mengetik namanya, persentase kecocokan kalian langsung muncul.",
    invite_btn: "Undang Teman",
    reinvite_btn: "Undang Orang Lain",
    reveal_eyebrow: "Membaca bintang",
    reveal_calculating: "Bintang-bintang sedang menghitung...",
    reveal_link_copied: "Link disalin!",
    reveal_need_telegram: "Kamu butuh Telegram untuk mendapatkan link undangan.",
    caption_90: "Bintang jarang sejajar seperti ini ✨",
    caption_60: "Ada energi yang sangat bagus di antara kalian berdua.",
    caption_35: "Tidak buruk — bisa jadi apa saja.",
    caption_0: "Yah, tidak semua orang harus cocok dengan semua orang 😄",
    history_title: "Ramalan Sebelumnya",
    history_count_suffix: "tes",
    history_empty_title: "Belum ada ramalan.",
    history_empty_sub: "Jadilah yang pertama — undang seseorang.",
    share_text: "{name} mengundangmu ke Ramalan Jodoh 💘 Ketuk untuk melihat kecocokan kalian:",
    toast_generic_error: "Ada yang salah.",
  },

  ur: {
    brand: "میچ فال",
    me_loading: "...",
    gate_eyebrow: "شروع کرنے سے پہلے",
    gate_title: "آپ کا نام کیا ہے؟",
    gate_sub: "آپ اس نام کے ساتھ فال میں نظر آئیں گے۔",
    gate_placeholder: "اپنا نام لکھیں...",
    gate_continue: "جاری رکھیں",
    gate_saving: "محفوظ ہو رہا ہے...",
    gate_error_empty: "آپ کو ایک نام درج کرنا ہوگا۔",
    gate_error_no_telegram: "آپ کی ٹیلیگرام معلومات حاصل نہیں ہو سکیں۔",
    gate_error_outside_telegram: "یہ ایپ ٹیلیگرام کے اندر کھولی جانی چاہیے۔",
    hero_eyebrow: "خالص قسمت، خالص مزہ",
    hero_title_l1: "کسی کو دعوت دیں،",
    hero_title_l2: "اپنی مماثلت دیکھیں۔",
    hero_sub: "جب آپ کا دوست لنک پر ٹیپ کر کے اپنا نام لکھے گا، تو آپ کی میچ فیصد فوراً ظاہر ہو جائے گی۔",
    invite_btn: "دوست کو دعوت دیں",
    reinvite_btn: "کسی اور کو دعوت دیں",
    reveal_eyebrow: "ستارے پڑھے جا رہے ہیں",
    reveal_calculating: "ستارے حساب لگا رہے ہیں...",
    reveal_link_copied: "لنک کاپی ہو گیا!",
    reveal_need_telegram: "دعوتی لنک حاصل کرنے کے لیے آپ کو ٹیلیگرام کی ضرورت ہے۔",
    caption_90: "ستارے شاذونادر ہی ایسے ملتے ہیں ✨",
    caption_60: "آپ دونوں کے درمیان واقعی اچھی توانائی ہے۔",
    caption_35: "برا نہیں — کچھ بھی ہو سکتا ہے۔",
    caption_0: "خیر، سب کا سب کے ساتھ میچ ہونا ضروری نہیں 😄",
    history_title: "پچھلی فالیں",
    history_count_suffix: "ٹیسٹ",
    history_empty_title: "ابھی تک کوئی فال نہیں بتائی گئی۔",
    history_empty_sub: "سب سے پہلے بنیں — کسی کو دعوت دیں۔",
    share_text: "{name} آپ کو Match Fortune پر دعوت دے رہے ہیں 💘 اپنی مماثلت دیکھنے کے لیے ٹیپ کریں:",
    toast_generic_error: "کچھ غلط ہو گیا۔",
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

  uk: {
    brand: "Гороскоп сумісності",
    me_loading: "...",
    gate_eyebrow: "перш ніж почати",
    gate_title: "Як тебе звати?",
    gate_sub: "Ти з'явишся у гороскопі під цим ім'ям.",
    gate_placeholder: "Введи ім'я...",
    gate_continue: "Продовжити",
    gate_saving: "Збереження...",
    gate_error_empty: "Потрібно ввести ім'я.",
    gate_error_no_telegram: "Не вдалося отримати дані Telegram.",
    gate_error_outside_telegram: "Цей застосунок потрібно відкривати в Telegram.",
    hero_eyebrow: "чиста випадковість, чиста розвага",
    hero_title_l1: "Запроси друга,",
    hero_title_l2: "дізнайся вашу сумісність.",
    hero_sub: "Коли твій друг перейде за посиланням і введе ім'я, відсоток сумісності з'явиться миттєво.",
    invite_btn: "Запросити друга",
    reinvite_btn: "Запросити ще когось",
    reveal_eyebrow: "Гороскоп розкривається",
    reveal_calculating: "Зірки рахують...",
    reveal_link_copied: "Посилання скопійовано!",
    reveal_need_telegram: "Для посилання-запрошення потрібен Telegram.",
    caption_90: "Зірки рідко так сходяться ✨",
    caption_60: "Між вами справді гарна енергія.",
    caption_35: "Непогано — може бути по-різному.",
    caption_0: "Ну, не всім суджено збігтися з усіма 😄",
    history_title: "Минулі гороскопи",
    history_count_suffix: "тестів",
    history_empty_title: "Гороскопів ще не було.",
    history_empty_sub: "Будь першим — запроси когось.",
    share_text: "{name} запрошує тебе на гороскоп сумісності 💘 Натисни, щоб дізнатися результат:",
    toast_generic_error: "Щось пішло не так.",
  },

  uz: {
    brand: "Moslik Folbinligi",
    me_loading: "...",
    gate_eyebrow: "boshlashdan oldin",
    gate_title: "Ismingiz nima?",
    gate_sub: "Siz folda shu ism bilan ko'rinasiz.",
    gate_placeholder: "Ismingizni yozing...",
    gate_continue: "Davom etish",
    gate_saving: "Saqlanmoqda...",
    gate_error_empty: "Ism kiritishingiz kerak.",
    gate_error_no_telegram: "Telegram ma'lumotlaringizni olib bo'lmadi.",
    gate_error_outside_telegram: "Bu ilova Telegram ichida ochilishi kerak.",
    hero_eyebrow: "sof omad, sof o'yin-kulgi",
    hero_title_l1: "Birovni taklif qiling,",
    hero_title_l2: "mosligingizni ko'ring.",
    hero_sub: "Do'stingiz havolani bosib ismini yozganda, moslik foizingiz darrov chiqadi.",
    invite_btn: "Do'stni taklif qiling",
    reinvite_btn: "Boshqa birovni taklif qiling",
    reveal_eyebrow: "Yulduzlar o'qilmoqda",
    reveal_calculating: "Yulduzlar hisoblanmoqda...",
    reveal_link_copied: "Havola nusxalandi!",
    reveal_need_telegram: "Taklif havolasi olish uchun Telegram kerak.",
    caption_90: "Yulduzlar kamdan-kam shunday to'g'ri keladi ✨",
    caption_60: "Ikkingiz orasida juda yaxshi energiya bor.",
    caption_35: "Yomon emas — har xil bo'lishi mumkin.",
    caption_0: "Xo'sh, hammaning hamma bilan mos kelishi shart emas 😄",
    history_title: "Oldingi Follar",
    history_count_suffix: "test",
    history_empty_title: "Hali hech qanday fol aytilmagan.",
    history_empty_sub: "Birinchi bo'ling — birovni taklif qiling.",
    share_text: "{name} sizni Moslik Folbinligiga taklif qilmoqda 💘 Moslikni ko'rish uchun bosing:",
    toast_generic_error: "Nimadir xato ketdi.",
  },

  fa: {
    brand: "فال همخوانی",
    me_loading: "...",
    gate_eyebrow: "قبل از شروع",
    gate_title: "اسمت چیه؟",
    gate_sub: "تو با این اسم در فال نمایش داده می‌شوی.",
    gate_placeholder: "اسمت رو بنویس...",
    gate_continue: "ادامه",
    gate_saving: "در حال ذخیره...",
    gate_error_empty: "باید یک اسم وارد کنی.",
    gate_error_no_telegram: "اطلاعات تلگرام شما دریافت نشد.",
    gate_error_outside_telegram: "این اپ باید داخل تلگرام باز شود.",
    hero_eyebrow: "فقط شانس، فقط سرگرمی",
    hero_title_l1: "یک نفر را دعوت کن،",
    hero_title_l2: "همخوانی‌تان را ببین.",
    hero_sub: "وقتی دوستت روی لینک بزند و اسمش را بنویسد، درصد همخوانی شما فوراً نمایش داده می‌شود.",
    invite_btn: "دعوت از دوست",
    reinvite_btn: "دعوت از یک نفر دیگر",
    reveal_eyebrow: "ستاره‌ها خوانده می‌شوند",
    reveal_calculating: "ستاره‌ها در حال محاسبه هستند...",
    reveal_link_copied: "لینک کپی شد!",
    reveal_need_telegram: "برای دریافت لینک دعوت به تلگرام نیاز داری.",
    caption_90: "ستاره‌ها به ندرت اینطور هم‌راستا می‌شوند ✨",
    caption_60: "بین شما دو نفر انرژی واقعاً خوبی هست.",
    caption_35: "بد نیست — می‌تواند هر طور باشد.",
    caption_0: "خب، لازم نیست همه با همه جور باشند 😄",
    history_title: "فال‌های قبلی",
    history_count_suffix: "تست",
    history_empty_title: "هنوز هیچ فالی گرفته نشده.",
    history_empty_sub: "اولین نفر باش — یک نفر را دعوت کن.",
    share_text: "{name} تو را به فال همخوانی دعوت می‌کند 💘 برای دیدن همخوانی‌تان ضربه بزن:",
    toast_generic_error: "مشکلی پیش آمد.",
  },

  pt: {
    brand: "Oráculo do Match",
    me_loading: "...",
    gate_eyebrow: "antes de começar",
    gate_title: "Qual é o seu nome?",
    gate_sub: "Você vai aparecer no resultado com esse nome.",
    gate_placeholder: "Digite seu nome...",
    gate_continue: "Continuar",
    gate_saving: "Salvando...",
    gate_error_empty: "Você precisa digitar um nome.",
    gate_error_no_telegram: "Não foi possível obter suas informações do Telegram.",
    gate_error_outside_telegram: "Este app precisa ser aberto dentro do Telegram.",
    hero_eyebrow: "pura sorte, pura diversão",
    hero_title_l1: "Convide alguém,",
    hero_title_l2: "veja sua compatibilidade.",
    hero_sub: "Quando seu amigo tocar no link e digitar o nome, a porcentagem de compatibilidade aparece na hora.",
    invite_btn: "Convidar um Amigo",
    reinvite_btn: "Convidar Outra Pessoa",
    reveal_eyebrow: "Lendo as estrelas",
    reveal_calculating: "As estrelas estão calculando...",
    reveal_link_copied: "Link copiado!",
    reveal_need_telegram: "Você precisa do Telegram para conseguir o link de convite.",
    caption_90: "As estrelas raramente se alinham assim ✨",
    caption_60: "Existe uma energia muito boa entre vocês dois.",
    caption_35: "Não é mal — pode ser de qualquer jeito.",
    caption_0: "Bom, nem todo mundo precisa combinar com todo mundo 😄",
    history_title: "Resultados Anteriores",
    history_count_suffix: "testes",
    history_empty_title: "Nenhum resultado ainda.",
    history_empty_sub: "Seja o primeiro — convide alguém.",
    share_text: "{name} está te convidando para o Oráculo do Match 💘 Toque para ver sua compatibilidade:",
    toast_generic_error: "Algo deu errado.",
  },

  ar: {
    brand: "فال التوافق",
    me_loading: "...",
    gate_eyebrow: "قبل أن نبدأ",
    gate_title: "ما اسمك؟",
    gate_sub: "ستظهر في الفال بهذا الاسم.",
    gate_placeholder: "اكتب اسمك...",
    gate_continue: "متابعة",
    gate_saving: "جارٍ الحفظ...",
    gate_error_empty: "يجب عليك إدخال اسم.",
    gate_error_no_telegram: "تعذر الحصول على معلومات تيليجرام الخاصة بك.",
    gate_error_outside_telegram: "يجب فتح هذا التطبيق داخل تيليجرام.",
    hero_eyebrow: "حظ صرف، متعة صرفة",
    hero_title_l1: "ادعُ شخصًا ما،",
    hero_title_l2: "وشاهد توافقكما.",
    hero_sub: "عندما يضغط صديقك على الرابط ويكتب اسمه، تظهر نسبة التوافق بينكما فورًا.",
    invite_btn: "دعوة صديق",
    reinvite_btn: "دعوة شخص آخر",
    reveal_eyebrow: "قراءة النجوم",
    reveal_calculating: "النجوم تحسب...",
    reveal_link_copied: "تم نسخ الرابط!",
    reveal_need_telegram: "تحتاج إلى تيليجرام للحصول على رابط الدعوة.",
    caption_90: "نادرًا ما تتوافق النجوم بهذا الشكل ✨",
    caption_60: "هناك طاقة جميلة جدًا بينكما.",
    caption_35: "ليس سيئًا — يمكن أن يكون الأمر على أي حال.",
    caption_0: "حسنًا، ليس على الجميع أن يتوافقوا مع الجميع 😄",
    history_title: "فالات سابقة",
    history_count_suffix: "اختبارات",
    history_empty_title: "لم يتم استخراج أي فال بعد.",
    history_empty_sub: "كن الأول — ادعُ شخصًا ما.",
    share_text: "{name} يدعوك إلى فال التوافق 💘 اضغط لمعرفة نسبة توافقكما:",
    toast_generic_error: "حدث خطأ ما.",
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

  it: {
    brand: "Oracolo dell'Affinità",
    me_loading: "...",
    gate_eyebrow: "prima di iniziare",
    gate_title: "Come ti chiami?",
    gate_sub: "Apparirai nel risultato con questo nome.",
    gate_placeholder: "Scrivi il tuo nome...",
    gate_continue: "Continua",
    gate_saving: "Salvataggio...",
    gate_error_empty: "Devi inserire un nome.",
    gate_error_no_telegram: "Non è stato possibile ottenere le tue informazioni Telegram.",
    gate_error_outside_telegram: "Questa app deve essere aperta dentro Telegram.",
    hero_eyebrow: "pura fortuna, puro divertimento",
    hero_title_l1: "Invita qualcuno,",
    hero_title_l2: "scopri la vostra affinità.",
    hero_sub: "Quando il tuo amico tocca il link e scrive il suo nome, la percentuale di affinità appare all'istante.",
    invite_btn: "Invita un Amico",
    reinvite_btn: "Invita Qualcun Altro",
    reveal_eyebrow: "Lettura delle stelle",
    reveal_calculating: "Le stelle stanno calcolando...",
    reveal_link_copied: "Link copiato!",
    reveal_need_telegram: "Hai bisogno di Telegram per ottenere il link di invito.",
    caption_90: "Le stelle si allineano raramente così ✨",
    caption_60: "C'è un'energia davvero bella tra voi due.",
    caption_35: "Non male — potrebbe andare in entrambi i modi.",
    caption_0: "Beh, non tutti devono andare d'accordo con tutti 😄",
    history_title: "Affinità Passate",
    history_count_suffix: "test",
    history_empty_title: "Nessuna affinità calcolata ancora.",
    history_empty_sub: "Sii il primo — invita qualcuno.",
    share_text: "{name} ti invita all'Oracolo dell'Affinità 💘 Tocca per vedere la vostra affinità:",
    toast_generic_error: "Qualcosa è andato storto.",
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

  fil: {
    brand: "Palad ng Tugma",
    me_loading: "...",
    gate_eyebrow: "bago tayo magsimula",
    gate_title: "Ano ang pangalan mo?",
    gate_sub: "Lalabas ka sa resulta gamit ang pangalang ito.",
    gate_placeholder: "I-type ang iyong pangalan...",
    gate_continue: "Magpatuloy",
    gate_saving: "Sine-save...",
    gate_error_empty: "Kailangan mong maglagay ng pangalan.",
    gate_error_no_telegram: "Hindi makuha ang impormasyon mo sa Telegram.",
    gate_error_outside_telegram: "Dapat buksan ang app na ito sa loob ng Telegram.",
    hero_eyebrow: "purong swerte, purong saya",
    hero_title_l1: "Mag-imbita ng isang tao,",
    hero_title_l2: "tingnan ang inyong tugma.",
    hero_sub: "Kapag pinindot ng kaibigan mo ang link at na-type ang pangalan niya, agad lalabas ang inyong match percentage.",
    invite_btn: "Mag-imbita ng Kaibigan",
    reinvite_btn: "Mag-imbita ng Iba",
    reveal_eyebrow: "Binabasa ang mga bituin",
    reveal_calculating: "Kinukwenta ng mga bituin...",
    reveal_link_copied: "Na-copy ang link!",
    reveal_need_telegram: "Kailangan mo ng Telegram para makakuha ng invite link.",
    caption_90: "Bihira mag-align ang mga bituin nang ganito ✨",
    caption_60: "Magandang enerhiya talaga ang nasa inyong dalawa.",
    caption_35: "Hindi naman masama — kaya pa.",
    caption_0: "Ay, hindi naman dapat bagay ang lahat sa lahat 😄",
    history_title: "Mga Nakaraang Palad",
    history_count_suffix: "tests",
    history_empty_title: "Walang palad na nabasa pa.",
    history_empty_sub: "Ikaw na ang maunang — mag-imbita ng isang tao.",
    share_text: "{name} ay nag-iimbita sa iyo sa Palad ng Tugma 💘 I-tap para makita ang inyong tugma:",
    toast_generic_error: "May nangyaring mali.",
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
 * Verilen dil kodunun sagdan-sola (RTL) yazildigini soyler.
 * Arapca/Urduca/Farsca icin <html dir="rtl"> uygulamak isteyebilirsin:
 *   document.documentElement.dir = isRTL(lang) ? "rtl" : "ltr";
 */
function isRTL(langCode) {
  return RTL_LANGS.includes(langCode);
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