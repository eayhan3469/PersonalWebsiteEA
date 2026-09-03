/* =====================================================================
   Lightweight i18n — swaps text on [data-i18n] nodes.
   Add new strings to BOTH `en` and `tr` maps using the same key.
   For attributes, use: data-i18n-attr="content" data-i18n="meta.description"

   On language change a `langchange` CustomEvent is dispatched on document
   (detail: { lang }) so content.js can re-render its data-driven sections.
   window.getLang()      -> current language code
   window.I18N_STRINGS() -> the active string map (used by content.js)
   ===================================================================== */

const I18N = {
  en: {
    "a11y.skip": "Skip to content",
    "meta.description":
      "Egemen Ayhan — Unity game developer focused on gameplay systems, performance optimization and debugging.",

    "nav.work": "Work",
    "nav.prototypes": "Prototypes",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.eyebrow": "Game Developer",
    "hero.title.line1": "Building playable",
    "hero.title.line2": "imaginary worlds",
    "hero.lead":
      "Unity developer with 6+ years shipping gameplay systems across multiplayer, roguelike, hypercasual and AR/VR projects — with a focus on performance and debugging.",
    "hero.meta": "available for work · Unity / C# · gameplay · İstanbul",
    "hero.cta.projects": "View work",
    "hero.cta.contact": "Get in touch",
    "hero.cta.cv": "Download CV",

    "work.heading": "Selected work",
    "work.intro":
      "Shipped titles and projects where I owned gameplay features and systems.",

    "prototypes.heading": "Prototypes",
    "prototypes.intro":
      "Short prototypes and rapid builds — hover a tile to play, click to open.",
    "filter.all": "All",
    "filter.hypercasual": "Hypercasual",
    "filter.hybrid": "Hybrid",
    "filter.casual": "Casual",
    "filter.other": "Other",

    "about.heading": "About",
    "about.p1":
      "I'm an experienced Unity developer with strong skills in code maintenance and debugging. Over the past six years I've shipped gameplay features and systems across multiplayer party games, roguelikes, hypercasual titles and AR/VR simulations.",
    "about.p2":
      "I enjoy learning new technologies and continuously improving my craft. My goal is to build efficient, stable and creative game experiences while adding value to every team I work with.",
    "about.facts.experience": "Experience",
    "about.facts.experienceValue": "6+ years",
    "about.facts.engine": "Main engine",
    "about.facts.focus": "Focus",
    "about.facts.focusValue": "Gameplay · Optimization · Multiplayer · XR",
    "about.facts.location": "Location",
    "about.facts.locationValue": "İstanbul, Türkiye",
    "about.facts.interests": "Interests",
    "about.facts.interestsValue": "Video games · Chess",

    "skills.heading": "Skills",
    "skills.core": "Core",
    "skills.platforms": "Engine & Platforms",
    "skills.systems": "Systems",
    "skills.item.cleancode": "Clean code & debugging",
    "skills.item.mobile": "Mobile (iOS / Android)",
    "skills.item.gameplay": "Gameplay systems",
    "skills.item.optimization": "Performance optimization",
    "skills.item.ai": "AI behaviours",

    "testimonials.heading": "References",

    "experience.heading": "Experience",
    "experience.intro": "Six years across studios in Türkiye.",
    "education.heading": "Education",

    "contact.heading": "Contact",
    "contact.lead":
      "Open to gameplay / tools programming roles and interesting collaborations. The fastest way to reach me is email.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send",
    "contact.form.sending": "Sending…",
    "contact.form.ok": "Thanks — I'll get back to you soon.",
    "contact.form.error": "Something went wrong. Please email me directly.",

    "footer.note": "Built from scratch with HTML & CSS.",
  },

  tr: {
    "a11y.skip": "İçeriğe geç",
    "meta.description":
      "Egemen Ayhan — Gameplay sistemleri, performans optimizasyonu ve hata ayıklamaya odaklı Unity oyun geliştiricisi.",

    "nav.work": "Projeler",
    "nav.prototypes": "Prototipler",
    "nav.about": "Hakkımda",
    "nav.skills": "Yetenekler",
    "nav.experience": "Deneyim",
    "nav.contact": "İletişim",

    "hero.eyebrow": "Oyun Geliştirici",
    "hero.title.line1": "Oynanabilir",
    "hero.title.line2": "hayali dünyalar",
    "hero.lead":
      "Çok oyunculu, roguelike, hypercasual ve AR/VR projelerinde 6+ yıldır gameplay sistemleri geliştiren, performans ve hata ayıklamaya odaklı Unity geliştiricisi.",
    "hero.meta": "işe açık · Unity / C# · gameplay · İstanbul",
    "hero.cta.projects": "Projeleri gör",
    "hero.cta.contact": "İletişime geç",
    "hero.cta.cv": "CV indir",

    "work.heading": "Seçili projeler",
    "work.intro":
      "Gameplay özelliklerini ve sistemlerini sahiplendiğim yayınlanmış oyunlar ve projeler.",

    "prototypes.heading": "Prototipler",
    "prototypes.intro":
      "Kısa prototipler ve hızlı yapımlar — oynatmak için üzerine gel, açmak için tıkla.",
    "filter.all": "Tümü",
    "filter.hypercasual": "Hypercasual",
    "filter.hybrid": "Hybrid",
    "filter.casual": "Casual",
    "filter.other": "Diğer",

    "about.heading": "Hakkımda",
    "about.p1":
      "Kod bakımı ve hata ayıklama konularında güçlü, deneyimli bir Unity geliştiricisiyim. Son altı yılda çok oyunculu parti oyunlarından roguelike'lara, hypercasual oyunlardan AR/VR simülasyonlarına kadar birçok projede gameplay özellikleri ve sistemleri geliştirdim.",
    "about.p2":
      "Yeni teknolojiler öğrenmeyi ve zanaatimi sürekli geliştirmeyi seviyorum. Amacım; verimli, kararlı ve yaratıcı oyun deneyimleri üretmek ve çalıştığım her ekibe değer katmak.",
    "about.facts.experience": "Deneyim",
    "about.facts.experienceValue": "6+ yıl",
    "about.facts.engine": "Ana motor",
    "about.facts.focus": "Odak",
    "about.facts.focusValue": "Gameplay · Optimizasyon · Multiplayer · XR",
    "about.facts.location": "Konum",
    "about.facts.locationValue": "İstanbul, Türkiye",
    "about.facts.interests": "İlgi alanları",
    "about.facts.interestsValue": "Video oyunları · Satranç",

    "skills.heading": "Yetenekler",
    "skills.core": "Temel",
    "skills.platforms": "Motor & Platformlar",
    "skills.systems": "Sistemler",
    "skills.item.cleancode": "Temiz kod & hata ayıklama",
    "skills.item.mobile": "Mobil (iOS / Android)",
    "skills.item.gameplay": "Gameplay sistemleri",
    "skills.item.optimization": "Performans optimizasyonu",
    "skills.item.ai": "Yapay zekâ davranışları",

    "testimonials.heading": "Referanslar",

    "experience.heading": "Deneyim",
    "experience.intro": "Türkiye'deki stüdyolarda altı yıl.",
    "education.heading": "Eğitim",

    "contact.heading": "İletişim",
    "contact.lead":
      "Gameplay / araç programlama pozisyonlarına ve ilginç iş birliklerine açığım. Bana ulaşmanın en hızlı yolu e-posta.",
    "contact.form.name": "Ad",
    "contact.form.email": "E-posta",
    "contact.form.message": "Mesaj",
    "contact.form.send": "Gönder",
    "contact.form.sending": "Gönderiliyor…",
    "contact.form.ok": "Teşekkürler — en kısa sürede döneceğim.",
    "contact.form.error": "Bir şeyler ters gitti. Lütfen doğrudan e-posta gönderin.",

    "footer.note": "Sıfırdan HTML & CSS ile yapıldı.",
  },
};

const LANGS = ["en", "tr"];
const STORAGE_KEY = "ea-lang";
let currentLang = "en";

window.getLang = () => currentLang;
window.I18N_STRINGS = () => I18N[currentLang] || I18N.en;

function detectLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && LANGS.includes(saved)) return saved;
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return LANGS.includes(nav) ? nav : "en";
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined) return;

    const attr = el.getAttribute("data-i18n-attr");
    if (attr) el.setAttribute(attr, value);
    else el.textContent = value;
  });

  document.documentElement.lang = lang;
  localStorage.setItem(STORAGE_KEY, lang);

  const next = lang === "en" ? "TR" : "EN";
  document
    .querySelectorAll("[data-lang-label]")
    .forEach((n) => (n.textContent = next));

  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

function initI18n() {
  applyLang(detectLang());

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      applyLang(currentLang === "en" ? "tr" : "en");
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
