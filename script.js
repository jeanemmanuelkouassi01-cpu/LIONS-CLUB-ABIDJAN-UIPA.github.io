// Initialisation des icônes Lucide
lucide.createIcons();

// Dictionnaire de traductions FR / EN
const translations = {
  fr: {
    'nav-home': 'Accueil',
    'nav-history': 'Historique',
    'nav-activities': 'Activités',
    'nav-members': 'Membres',
    'nav-contact': 'Nous contacter',
    'hero-badge': 'Nous Servons',
    'hero-title': 'Ensemble, créons un impact durable à Abidjan',
    'hero-desc': "Le Lions Club Abidjan UIPA rassemble des hommes et des femmes d'action engagés pour répondre aux besoins humanitaires locaux et promouvoir la paix.",
    'btn-discover': 'Découvrir nos actions',
    'btn-join': 'Nous rejoindre',
    'stat-members': 'Membres Actifs',
    'stat-actions': 'Actions Réalisées',
    'stat-impact': 'Personnes Impactées',
    'calc-title': "Simulateur d'Impact Solidaire",
    'calc-desc': 'Estimez la portée de votre contribution auprès des communautés locales.',
    'calc-label-hours': 'Heures de bénévolat promises :',
    'calc-label-donation': 'Soutien financier (FCFA) :',
    'calc-result-title': 'Impact estimé',
    'calc-note': "Basé sur nos coûts moyens d'intervention sur le terrain à Abidjan.",
    'hist-title': 'Notre Histoire & Valeurs',
    'hist-sub': "Inspiré de l'héritage mondial du Lions Clubs International fondé en 1917, le club Abidjan UIPA perpétue la tradition du service désintéressé.",
    'hist-e1-title': 'Fondation du Lions Club International',
    'hist-e1-desc': "Melvin Jones rassemble des leaders d'opinion aux États-Unis avec une idée simple : améliorer leurs communautés.",
    'hist-e2-title': 'Les Chevaliers des Aveugles',
    'hist-e2-desc': 'Helen Keller défie les Lions de devenir les "Chevaliers des aveugles dans la croisade contre les ténébres".',
    'hist-e3-title': 'Charte du Lions Club Abidjan UIPA',
    'hist-e3-desc': "Naissance du club avec pour mission de mener des actions ciblées dans les quartiers d'Abidjan et promouvoir l'excellence académique et sociale.",
    'act-title': "Nos Domaines d'Action",
    'act-sub': 'Nous répondons aux 5 causes mondiales prioritaires du Lions International.',
    'mem-title': 'Notre Bureau & Membres',
    'mem-sub': 'Des bénévoles dévoués au service de la communauté.',
    'con-title': 'Contactez-nous',
    'con-sub': "Une question, un partenariat ou envie d'adhérer ? Laissez-nous un message.",
    'form-name': 'Nom complet',
    'form-email': 'Adresse Email',
    'form-subject': 'Sujet',
    'form-msg': 'Message',
    'form-btn': 'Envoyer le message'
  },
  en: {
    'nav-home': 'Home',
    'nav-history': 'History',
    'nav-activities': 'Activities',
    'nav-members': 'Members',
    'nav-contact': 'Contact Us',
    'hero-badge': 'We Serve',
    'hero-title': 'Together, creating a lasting impact in Abidjan',
    'hero-desc': 'Lions Club Abidjan UIPA brings together men and women of action committed to serving local community needs and promoting peace.',
    'btn-discover': 'Discover Our Work',
    'btn-join': 'Join Us',
    'stat-members': 'Active Members',
    'stat-actions': 'Completed Projects',
    'stat-impact': 'People Impacted',
    'calc-title': 'Solidarity Impact Calculator',
    'calc-desc': 'Estimate the reach of your contribution to local communities.',
    'calc-label-hours': 'Pledged volunteer hours:',
    'calc-label-donation': 'Financial support (FCFA):',
    'calc-result-title': 'Estimated Impact',
    'calc-note': 'Based on average operational costs in Abidjan.',
    'hist-title': 'Our History & Values',
    'hist-sub': 'Inspired by the global legacy of Lions Clubs International founded in 1917, Abidjan UIPA club continues the tradition of selfless service.',
    'hist-e1-title': 'Lions Club International Foundation',
    'hist-e1-desc': 'Melvin Jones brings together business leaders with one simple idea: improving their communities.',
    'hist-e2-title': 'Knights of the Blind',
    'hist-e2-desc': 'Helen Keller challenges Lions to become "Knights of the Blind in the crusade against darkness".',
    'hist-e3-title': 'Abidjan UIPA Charter',
    'hist-e3-desc': 'Official chartering of the club focused on community outreach and empowering youth across Abidjan.',
    'act-title': 'Our Causes',
    'act-sub': 'Addressing the 5 global causes of Lions International.',
    'mem-title': 'Leadership & Members',
    'mem-sub': 'Dedicated volunteers serving the community.',
    'con-title': 'Contact Us',
    'con-sub': 'Have a question or want to join us? Send us a message.',
    'form-name': 'Full Name',
    'form-email': 'Email Address',
    'form-subject': 'Subject',
    'form-msg': 'Message',
    'form-btn': 'Send Message'
  }
};

let currentLang = 'fr';

// Navigation entre les pages
function navigateTo(pageId) {
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
  const activePage = document.getElementById(`page-${pageId}`);
  if(activePage) activePage.classList.remove('hidden');

  // Mise à jour du style des liens
  document.querySelectorAll('.nav-link').forEach(btn => {
    if(btn.dataset.nav === pageId) {
      btn.classList.add('text-lions-blue', 'dark:text-lions-gold', 'underline', 'underline-offset-4');
    } else {
      btn.classList.remove('text-lions-blue', 'dark:text-lions-gold', 'underline', 'underline-offset-4');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Menu Mobile
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

// Changement de Thème (Clair / Sombre)
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  const icon = document.getElementById('theme-icon');
  if(isDark) {
    icon.setAttribute('data-lucide', 'sun');
  } else {
    icon.setAttribute('data-lucide', 'moon');
  }
  lucide.createIcons();
}

// Changement de Langue (FR / EN)
function toggleLanguage() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  document.getElementById('lang-label').innerText = currentLang === 'fr' ? 'EN' : 'FR';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(translations[currentLang][key]) {
      el.innerText = translations[currentLang][key];
    }
  });
}

// Calculateur d'Impact
function calculateImpact() {
  const hours = parseInt(document.getElementById('input-hours').value);
  const amount = parseInt(document.getElementById('input-amount').value);

  document.getElementById('hours-val').innerText = `${hours}h`;
  document.getElementById('amount-val').innerText = `${amount.toLocaleString()} F`;

  const totalMeals = Math.round((hours * 2) + (amount / 1000));
  document.getElementById('impact-result').innerText = `~ ${totalMeals} personnes aidées`;
}

// Filtre d'activités
function filterActivities(cat) {
  document.querySelectorAll('.act-filter').forEach(b => {
    if(b.dataset.filter === cat) {
      b.classList.add('bg-lions-blue', 'text-white');
    } else {
      b.classList.remove('bg-lions-blue', 'text-white');
    }
  });

  document.querySelectorAll('.activity-card').forEach(card => {
    if(cat === 'all' || card.dataset.category === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Recherche de membres
function filterMembers() {
  const query = document.getElementById('member-search').value.toLowerCase();
  document.querySelectorAll('.member-card').forEach(card => {
    const text = card.innerText.toLowerCase();
    if(text.includes(query)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Soumission du Formulaire
function handleContactSubmit(e) {
  e.preventDefault();
  const alert = document.getElementById('contact-alert');
  alert.classList.remove('hidden');
  document.getElementById('contact-form').reset();
  setTimeout(() => alert.classList.add('hidden'), 5000);
}

// Page d'accueil par défaut
document.addEventListener('DOMContentLoaded', () => {
  navigateTo('accueil');
});