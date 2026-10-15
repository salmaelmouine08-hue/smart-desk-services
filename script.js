/**
 * Smart Desk Services — Main Script
 * Bilingual (EN/FR), accessible, no external libraries
 */

/* ========== CONFIGURATION ========== */
const CONFIG = {
  fiverrUrl: "https://fiverr.com/s/zAAKPkv",
  defaultLang: "en",
  storageKey: "sds-lang"
};

/* ========== TRANSLATIONS ========== */
const translations = {
  en: {
    // Meta
    "meta.title": "Smart Desk Services | Data Entry, Excel & Online Tutoring",
    "meta.description": "Freelance support for data entry, spreadsheet formatting, data organization, and online tutoring.",

    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.experience": "Experience",
    "nav.about": "About",
    "nav.process": "How I Work",
    "nav.contact": "Contact",

    // CTA
    "cta.fiverr": "View My Fiverr Profile",

    // Hero
    "hero.eyebrow": "Personalized Service • Attention to Detail • Clear Communication",
    "hero.title": "Organized Data. Smarter Work. Better Learning.",
    "hero.intro": "Practical freelance support for data entry, spreadsheet formatting, data organization, and online tutoring — delivered with care, clarity, and attention to detail.",
    "hero.cta1": "Explore My Services",

    // Services
    "services.title": "Practical Support. Thoughtfully Delivered.",
    "services.cta": "Discuss This Service",
    "services.dataEntry.title": "Data Entry",
    "services.dataEntry.desc": "Accurate and organized data entry to help keep your information clear, consistent, and easy to use.",
    "services.dataEntry.items": [
      "Entering information into spreadsheets",
      "Transferring information from supplied documents",
      "Copying and organizing digital records",
      "Formatting lists and tables",
      "Basic verification of entered information"
    ],
    "services.excel.title": "Excel & Spreadsheet Formatting",
    "services.excel.desc": "Clean, structured spreadsheets that make information easier to read, navigate, and maintain.",
    "services.excel.items": [
      "Excel and Google Sheets formatting",
      "Consistent headers and alignment",
      "Column and row adjustments",
      "Basic sorting and filtering",
      "Simple formulas when agreed in advance"
    ],
    "services.organization.title": "Data Organization",
    "services.organization.desc": "Transform scattered information into clear, structured, and easy-to-manage digital records.",
    "services.organization.items": [
      "Organizing digital lists",
      "Standardizing inconsistent formatting",
      "Categorizing information",
      "Removing duplicates when requested",
      "Cleaning simple datasets"
    ],
    "services.tutoring.title": "Online Tutoring",
    "services.tutoring.desc": "Clear, step-by-step educational support to help learners understand concepts and practice with confidence.",
    "services.tutoring.items": [
      "Step-by-step exercise explanations",
      "Guided problem-solving",
      "Mathematics support",
      "Physics support",
      "Chemistry support"
    ],

    // Portfolio
    "portfolio.title": "A Closer Look at My Work",
    "portfolio.subtitle": "Sample projects created as demonstrations — not client work.",
    "portfolio.label": "Sample Project",
    "portfolio.p1.title": "Organized Data Table",
    "portfolio.p1.desc": "A demonstration of structured data entry and clean table formatting.",
    "portfolio.p2.title": "Spreadsheet Formatting",
    "portfolio.p2.desc": "A sample spreadsheet designed for readability and straightforward data management.",
    "portfolio.p3.title": "Data Cleaning",
    "portfolio.p3.desc": "A demonstration of simple data-cleaning techniques that improve consistency.",
    "portfolio.p4.title": "Educational Worksheet",
    "portfolio.p4.desc": "A sample educational resource with a clear, step-by-step explanation.",

    // Experience
    "experience.title": "Experience & Professional Development",
    "experience.years": "Years of Experience",
    "experience.intro": "Three years of experience, a detail-oriented approach, and a commitment to organized, reliable work.",

    // Certs
    "certs.title": "Certifications & Education",
    "certs.bacNote": "Educational qualification",

    // About
    "about.title": "A Personal Approach to Professional Support",
    "about.text": "Smart Desk Services is an independent freelance service brand focused on organized information, clear spreadsheets, and accessible learning support. My approach is simple: understand the task, organize the details, communicate clearly, and review the work carefully before delivery.",
    "about.p1": "Attention to Detail",
    "about.p2": "Clear Communication",
    "about.p3": "Organized Delivery",

    // Process
    "process.title": "A Clear and Simple Process",
    "process.s1.title": "Understand",
    "process.s1.desc": "Review the request, requirements, files, and expected deliverables.",
    "process.s2.title": "Organize",
    "process.s2.desc": "Clarify the scope and organize the information before beginning.",
    "process.s3.title": "Complete",
    "process.s3.desc": "Carry out the agreed work with care and attention to detail.",
    "process.s4.title": "Review & Deliver",
    "process.s4.desc": "Review the work for consistency and deliver the agreed files.",

    // Why
    "why.title": "Why Work With Smart Desk Services?",
    "why.p1": "Detail-focused approach",
    "why.p2": "Clear scope and deliverables",
    "why.p3": "Organized file presentation",
    "why.p4": "Friendly, professional communication",

    // Contact
    "contact.title": "Let's Discuss Your Next Task",
    "contact.text": "Have a spreadsheet to organize, data to enter, or a topic you'd like help understanding? Visit my Fiverr profile to explore my available services and contact me through the platform.",
    "contact.email": "Send an Email",

    // Footer
    "footer.tagline": "Independent freelance services for organized data and better learning.",
    "footer.rights": "All rights reserved."
  },

  fr: {
    "meta.title": "Smart Desk Services | Saisie de données, Excel et tutorat en ligne",
    "meta.description": "Des services freelance en saisie de données, mise en forme de tableaux, organisation des données et tutorat en ligne.",

    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.experience": "Expérience",
    "nav.about": "À propos",
    "nav.process": "Méthode de travail",
    "nav.contact": "Contact",

    "cta.fiverr": "Voir mon profil Fiverr",

    "hero.eyebrow": "Service personnalisé • Attention aux détails • Communication claire",
    "hero.title": "Des données organisées. Un travail plus intelligent. Un meilleur apprentissage.",
    "hero.intro": "Des services freelance pratiques en saisie de données, mise en forme de tableaux, organisation des informations et tutorat en ligne — avec soin, clarté et attention aux détails.",
    "hero.cta1": "Découvrir mes services",

    "services.title": "Un accompagnement pratique et soigné.",
    "services.cta": "Discuter de ce service",
    "services.dataEntry.title": "Saisie de données",
    "services.dataEntry.desc": "Saisie de données organisée pour garder vos informations claires, cohérentes et faciles à exploiter.",
    "services.dataEntry.items": [
      "Saisie d'informations dans des feuilles de calcul",
      "Transfert d'informations depuis des documents fournis",
      "Copie et organisation de données numériques",
      "Mise en forme de listes et de tableaux",
      "Vérification élémentaire des informations saisies"
    ],
    "services.excel.title": "Excel et mise en forme de tableaux",
    "services.excel.desc": "Des feuilles de calcul claires et structurées pour faciliter la lecture et la gestion de vos informations.",
    "services.excel.items": [
      "Mise en forme d'Excel et de Google Sheets",
      "Harmonisation des en-têtes et des alignements",
      "Ajustement des colonnes et des lignes",
      "Tri et filtres simples",
      "Formules élémentaires convenues à l'avance"
    ],
    "services.organization.title": "Organisation des données",
    "services.organization.desc": "Transformez des informations dispersées en données numériques claires, structurées et faciles à gérer.",
    "services.organization.items": [
      "Organisation de listes numériques",
      "Harmonisation des formats incohérents",
      "Catégorisation des informations",
      "Suppression des doublons sur demande",
      "Nettoyage de jeux de données simples"
    ],
    "services.tutoring.title": "Tutorat en ligne",
    "services.tutoring.desc": "Un accompagnement pédagogique clair et progressif pour aider les apprenants à comprendre les notions et à s'exercer avec confiance.",
    "services.tutoring.items": [
      "Explication d'exercices étape par étape",
      "Accompagnement dans la résolution de problèmes",
      "Soutien en mathématiques",
      "Soutien en physique",
      "Soutien en chimie"
    ],

    "portfolio.title": "Découvrez quelques exemples de mon travail",
    "portfolio.subtitle": "Exemples de démonstration — ce ne sont pas des projets clients.",
    "portfolio.label": "Exemple de démonstration",
    "portfolio.p1.title": "Tableau de données organisé",
    "portfolio.p1.desc": "Une démonstration de saisie structurée et de mise en forme claire d'un tableau.",
    "portfolio.p2.title": "Mise en forme de feuille de calcul",
    "portfolio.p2.desc": "Un exemple de feuille de calcul conçu pour faciliter la lecture et la gestion des données.",
    "portfolio.p3.title": "Nettoyage de données",
    "portfolio.p3.desc": "Une démonstration de techniques simples de nettoyage qui améliorent la cohérence des données.",
    "portfolio.p4.title": "Fiche pédagogique",
    "portfolio.p4.desc": "Un exemple de support pédagogique présentant une explication claire et progressive.",

    "experience.title": "Expérience et développement professionnel",
    "experience.years": "Ans d'expérience",
    "experience.intro": "Trois années d'expérience, une approche attentive aux détails et un engagement envers un travail organisé et fiable.",

    "certs.title": "Certifications et formation",
    "certs.bacNote": "Qualification éducative",

    "about.title": "Une approche personnelle et professionnelle",
    "about.text": "Smart Desk Services est une marque de services freelance indépendante axée sur l'organisation des informations, la clarté des tableaux et l'accompagnement pédagogique. Mon approche est simple : comprendre la demande, organiser les détails, communiquer clairement et vérifier soigneusement le travail avant la livraison.",
    "about.p1": "Attention aux détails",
    "about.p2": "Communication claire",
    "about.p3": "Livraison organisée",

    "process.title": "Une méthode claire et simple",
    "process.s1.title": "Comprendre",
    "process.s1.desc": "Examiner la demande, les consignes, les fichiers et les livrables attendus.",
    "process.s2.title": "Organiser",
    "process.s2.desc": "Clarifier le périmètre de la mission et organiser les informations avant de commencer.",
    "process.s3.title": "Réaliser",
    "process.s3.desc": "Réaliser le travail convenu avec soin et attention aux détails.",
    "process.s4.title": "Vérifier & livrer",
    "process.s4.desc": "Vérifier la cohérence du travail et livrer les fichiers convenus.",

    "why.title": "Pourquoi choisir Smart Desk Services ?",
    "why.p1": "Approche attentive aux détails",
    "why.p2": "Périmètre et livrables clairement définis",
    "why.p3": "Présentation organisée des fichiers",
    "why.p4": "Communication professionnelle et agréable",

    "contact.title": "Parlons de votre prochain projet",
    "contact.text": "Vous avez un tableau à organiser, des données à saisir ou une notion à mieux comprendre ? Consultez mon profil Fiverr pour découvrir mes services et me contacter via la plateforme.",
    "contact.email": "Envoyer un e-mail",

    "footer.tagline": "Des services freelance indépendants pour des données organisées et un meilleur apprentissage.",
    "footer.rights": "Tous droits réservés."
  }
};

/* ========== STATE ========== */
let currentLang = CONFIG.defaultLang;

/* ========== HELPERS ========== */
function getStoredLang() {
  try {
    const stored = localStorage.getItem(CONFIG.storageKey);
    if (stored === "en" || stored === "fr") return stored;
  } catch (e) { /* storage unavailable */ }
  return CONFIG.defaultLang;
}

function storeLang(lang) {
  try {
    localStorage.setItem(CONFIG.storageKey, lang);
  } catch (e) { /* ignore */ }
}

function t(key) {
  return translations[currentLang][key] ?? translations.en[key] ?? key;
}

/* ========== APPLY TRANSLATIONS ========== */
function applyTranslations() {
  // Simple text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    if (value) el.textContent = value;
  });

  // List items
  document.querySelectorAll("[data-i18n-list]").forEach((ul) => {
    const key = ul.getAttribute("data-i18n-list");
    const items = translations[currentLang][key] || translations.en[key];
    if (Array.isArray(items)) {
      ul.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
    }
  });

  // HTML lang
  document.documentElement.lang = currentLang;

  // Document title & meta description
  document.title = t("meta.title");
  const metaDesc = document.getElementById("meta-description");
  if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));

  // Profile image alt
  const profileImg = document.querySelector(".profile-photo");
  if (profileImg) {
    profileImg.alt = currentLang === "fr"
      ? "Portrait professionnel de Salma Elmouine"
      : "Professional portrait of Salma Elmouine";
  }

  // Update language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === currentLang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

/* ========== LANGUAGE SWITCH ========== */
function setLanguage(lang) {
  if (lang !== "en" && lang !== "fr") return;
  currentLang = lang;
  storeLang(lang);
  applyTranslations();
}

/* ========== MOBILE MENU ========== */
function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  function openMenu() {
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", currentLang === "fr" ? "Fermer le menu" : "Close menu");
  }

  function closeMenu() {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", currentLang === "fr" ? "Ouvrir le menu" : "Open menu");
  }

  toggle.addEventListener("click", () => {
    if (menu.hidden) openMenu();
    else closeMenu();
  });

  // Close on nav link click
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) {
      closeMenu();
      toggle.focus();
    }
  });
}

/* ========== FIVERR LINKS ========== */
function initFiverrLinks() {
  document.querySelectorAll('a[href*="fiverr.com"]').forEach((a) => {
    a.href = CONFIG.fiverrUrl;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
}

/* ========== YEAR ========== */
function setCurrentYear() {
  const el = document.getElementById("current-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ========== INIT ========== */
document.addEventListener("DOMContentLoaded", () => {
  currentLang = getStoredLang();
  applyTranslations();
  initMobileMenu();
  initFiverrLinks();
  setCurrentYear();

  // Language switcher
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });
});
