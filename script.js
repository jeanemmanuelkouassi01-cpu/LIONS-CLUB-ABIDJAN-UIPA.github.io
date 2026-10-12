// Initialisation des icônes Lucide
lucide.createIcons();

// Progression et fermeture de l'écran de chargement
const pageLoader = document.getElementById('page-loader');
const loaderProgress = pageLoader.querySelector('.loader-progress');
const loaderProgressFill = document.getElementById('loader-progress-fill');
const loaderStartedAt = performance.now();
let loaderProgressValue = 0;

const loaderProgressTimer = setInterval(() => {
  loaderProgressValue = Math.min(loaderProgressValue + Math.max((90 - loaderProgressValue) * 0.08, 0.5), 90);
  loaderProgressFill.style.width = `${loaderProgressValue}%`;
  loaderProgress.setAttribute('aria-valuenow', Math.round(loaderProgressValue));
}, 80);

function hidePageLoader() {
  clearInterval(loaderProgressTimer);
  loaderProgressFill.style.width = '100%';
  loaderProgress.setAttribute('aria-valuenow', '100');

  setTimeout(() => {
    pageLoader.classList.add('is-hidden');
    setTimeout(() => {
      pageLoader.remove();
      if(!document.getElementById('page-accueil').classList.contains('hidden')) {
        animateStatistics();
      }
    }, 600);
  }, Math.max(0, 1600 - (performance.now() - loaderStartedAt)));
}

if (document.readyState === 'complete') {
  hidePageLoader();
} else {
  window.addEventListener('load', hidePageLoader, { once: true });
}

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
    'hist-eyebrow': "Un siècle d'engagement",
    'hist-title': "L'histoire d'un service qui rassemble",
    'hist-sub': "Depuis 1917, les Lions unissent leurs forces pour répondre aux besoins des communautés. De Chicago à Abidjan, une même conviction traverse les générations : servir ensemble peut changer des vies.",
    'hist-nav-world': 'Le mouvement mondial',
    'hist-nav-ivory-coast': 'En Côte d’Ivoire',
    'hist-nav-uipa': 'Notre club UIPA',
    'hist-origin-label': 'Une idée née à Chicago',
    'hist-origin-title': "Le service commence par un geste envers l'autre",
    'hist-origin-desc': "En 1917, Melvin Jones encourage des clubs à dépasser leurs intérêts professionnels pour agir au bénéfice de leur communauté. Ce choix fondateur inspire encore les bénévoles Lions : écouter, rassembler et passer à l'action, au plus près des besoins.",
    'hist-origin-quote': "« On ne peut aller bien loin dans la vie si l'on ne commence pas par faire quelque chose pour quelqu'un d'autre. » — Melvin Jones",
    'hist-timeline-title': "Les grandes étapes d'une histoire mondiale",
    'hist-timeline-sub': 'Des jalons qui ont élargi la portée du service Lions.',
    'hist-1917-title': 'La naissance du mouvement',
    'hist-1917-desc': "À Chicago, Melvin Jones rassemble des clubs autour d'une ambition nouvelle : mettre leurs compétences au service de la société. La première convention se tient la même année à Dallas.",
    'hist-1920-title': "Le premier pas à l'international",
    'hist-1920-desc': "Un club est fondé au Canada : le mouvement franchit les frontières des États-Unis et affirme sa vocation internationale.",
    'hist-1925-title': "L'appel d'Helen Keller",
    'hist-1925-desc': "À la convention de Cedar Point, Helen Keller lance aux Lions le défi de devenir les « chevaliers des aveugles ». Cet appel marque durablement l'engagement du mouvement pour la vue.",
    'hist-1945-title': "Un engagement auprès de l'ONU",
    'hist-1945-desc': "Des représentants Lions contribuent aux travaux qui accompagnent la création des Nations unies et participent à la rédaction de la charte de l'organisation.",
    'hist-1954-title': '« We Serve » devient la devise',
    'hist-1954-desc': "La devise « We Serve », traduite par « Nous servons », exprime en deux mots la raison d'être des Lions, partout dans le monde.",
    'hist-1957-title': 'La jeunesse entre en action',
    'hist-1957-desc': "Le premier Leo club voit le jour en Pennsylvanie. Le programme Leo donne aux jeunes l'occasion de grandir par le leadership, l'expérience et le service.",
    'hist-1968-title': 'La fondation LCIF',
    'hist-1968-desc': "La Fondation du Lions Clubs International (LCIF) est créée pour soutenir des projets humanitaires d'envergure et renforcer l'action des clubs.",
    'hist-1990-title': 'La campagne SightFirst',
    'hist-1990-desc': "Lancée pour lutter contre la cécité évitable, SightFirst permet de financer des soins, de former des professionnels et de développer des services ophtalmologiques.",
    'hist-2017-title': 'Un siècle de service',
    'hist-2017-desc': "Le Lions Clubs International célèbre son centenaire et renouvelle son engagement à servir les communautés, dans plus de 200 pays et territoires.",
    'hist-africa-eyebrow': 'L’héritage se poursuit en Afrique de l’Ouest',
    'hist-africa-title': 'Des racines ivoiriennes à une nouvelle génération de Lions',
    'hist-africa-sub': 'Le mouvement mondial prend aussi vie dans les clubs locaux, au plus près des communautés et de leurs besoins.',
    'hist-local-label': 'Nos racines, notre engagement',
    'hist-local-title': 'Le mouvement Lions en Côte d’Ivoire',
    'hist-local-desc': "L'histoire ivoirienne du Lions s'inscrit dans l'essor du mouvement en Afrique de l'Ouest. Les repères communiqués pour cette page situent l'obtention de la charte du Lions Club Abidjan-Lagune au 20 décembre 1954. Aujourd'hui, le Lions Club Abidjan UIPA poursuit cet héritage au sein du réseau Lions en Côte d'Ivoire et du District 403 A2, en adaptant le service aux réalités de sa communauté.",
    'hist-local-note': "La date locale est reprise des éléments historiques transmis au club ; elle pourra être complétée par les archives de la charte et du district.",
    'hist-uipa-label': 'Lions Club Abidjan UIPA',
    'hist-uipa-title': "Une histoire qui s'écrit au présent",
    'hist-uipa-desc': "À l'intersection de l'Université Internationale Privée d'Abidjan et de la vie locale, le Lions Club Abidjan UIPA rassemble des personnes désireuses de faire vivre la devise « Nous servons » auprès de leur communauté.",
    'hist-uipa-created-title': 'La création du club',
    'hist-uipa-created-desc': "Le Lions Club Abidjan UIPA voit le jour autour d’une ambition commune : mettre l’engagement universitaire au service de la communauté.",
    'hist-uipa-recognition-title': 'Son officialisation',
    'hist-uipa-recognition-desc': "Le club est officiellement reconnu en 2024 et inscrit son engagement dans la continuité du mouvement Lions.",
    'hist-uipa-values': "Notre histoire ne se résume pas à des dates : elle se construit chaque année grâce aux bénévoles, aux partenaires et aux personnes accompagnées.",
    'hist-values-title': 'Une mission portée par des valeurs',
    'hist-values-sub': "Au-delà des époques et des frontières, l'action Lions repose sur le service, l'intégrité et la solidarité.",
    'hist-vision-title': 'Notre vision',
    'hist-vision-desc': 'Être un leader mondial du service humanitaire et de proximité.',
    'hist-mission-title': 'Notre mission',
    'hist-mission-desc': 'Donner aux bénévoles les moyens de servir leur communauté, de répondre aux besoins humanitaires et de promouvoir la paix et la compréhension entre les peuples.',
    'hist-motto-title': 'Notre devise',
    'hist-motto-desc': "« Nous servons » : une invitation à transformer la volonté d'aider en actions utiles.",
    'hist-ethics-title': 'Notre éthique',
    'hist-ethics-desc': 'Intégrité, respect, entraide et responsabilité guident le service et les relations avec nos communautés.',
    'hist-causes-title': "Des causes pour répondre aux besoins d'aujourd'hui",
    'hist-causes-intro': 'Le service Lions se concentre sur des besoins concrets et complémentaires :',
    'hist-cause-1': 'La vue',
    'hist-cause-2': 'Le diabète',
    'hist-cause-3': 'La faim',
    'hist-cause-4': "L'environnement",
    'hist-cause-5': 'Le cancer infantile',
    'hist-cause-6': 'La jeunesse',
    'hist-cause-7': "L'aide aux catastrophes",
    'hist-cause-8': "L'action humanitaire",
    'hist-cause-9': 'La santé mentale',
    'hist-symbols-title': 'Des symboles, un même esprit',
    'hist-symbols-desc': "L'emblème aux deux profils de lion évoque un regard tourné vers le passé et l'avenir, au service des communautés. La devise « Nous servons » rassemble les membres autour d'une même promesse. Les insignes et les cérémonies rappellent l'appartenance au mouvement ; sur le terrain, ce sont surtout l'écoute, la présence et les actes qui font vivre ses valeurs.",
    'hist-structure-title': "Une organisation qui relie l'action locale au monde",
    'hist-structure-sub': "Chaque niveau facilite la coopération, le partage d'expérience et la réalisation des projets.",
    'hist-level-1': "Club — l'action de proximité",
    'hist-level-2': 'Zone et région — la coordination locale',
    'hist-level-3': 'District — le réseau national ou territorial',
    'hist-level-4': 'District multiple — la coopération régionale',
    'hist-level-5': 'Lions International — le mouvement mondial',
    'hist-sources-label': 'Pour aller plus loin :',
    'hist-source-history': 'histoire officielle du Lions Clubs International',
    'hist-source-about': 'mission et causes Lions',
    'uipa-eyebrow': 'Notre club, notre engagement',
    'uipa-title': 'Lions Club Abidjan UIPA : servir au cœur de la communauté',
    'uipa-intro': "À la rencontre du monde universitaire et de la vie locale, le Lions Club Abidjan UIPA rassemble des personnes qui veulent mettre leurs compétences et leur énergie au service des autres.",
    'uipa-anchor-title': 'Un ancrage universitaire et communautaire',
    'uipa-anchor-desc': "En lien avec l'Université Internationale Privée d'Abidjan, le club fait vivre l'esprit de service dans un environnement où se rencontrent apprentissage, initiative et engagement citoyen. Il crée un espace de collaboration entre la communauté universitaire et les acteurs locaux, autour de projets utiles et solidaires.",
    'uipa-mission-title': 'Notre mission, en actes',
    'uipa-goal-1': "Répondre, avec les communautés, aux besoins sociaux et humanitaires d'Abidjan et de ses environs.",
    'uipa-goal-2': 'Encourager les jeunes à développer leur leadership, leur sens des responsabilités et leur capacité à travailler en équipe.',
    'uipa-goal-3': "Relier l'engagement bénévole, l'excellence académique et les compétences du monde professionnel.",
    'uipa-structure-title': "Des équipes au service d'une même vision",
    'uipa-structure-sub': 'Les responsabilités du club se complètent pour faire grandir les membres et transformer les besoins repérés en projets collectifs.',
    'uipa-role-board-title': 'Bureau du club',
    'uipa-role-board-desc': "La présidence, le secrétariat et la trésorerie assurent l'animation, le suivi et la bonne gestion de la vie du club.",
    'uipa-role-ems-title': 'Équipe Mondiale du Service — EMS',
    'uipa-role-ems-desc': 'Elle aide à identifier les besoins prioritaires, à concevoir des actions et à mobiliser les membres et partenaires.',
    'uipa-role-eml-title': 'Équipe Mondiale du Leadership — EML',
    'uipa-role-eml-desc': 'Elle encourage la formation, le partage d’expérience et le développement des compétences de leadership.',
    'uipa-role-eme-title': "Équipe Mondiale de l'Effectif — EME",
    'uipa-role-eme-desc': 'Elle contribue à accueillir les nouveaux membres, à renforcer les liens et à faire vivre un club ouvert et engagé.',
    'uipa-actions-title': "Des domaines d'action proches des besoins",
    'uipa-actions-intro': "Dans l'esprit des causes mondiales du Lions International, le club peut mobiliser ses membres et partenaires autour de plusieurs priorités :",
    'uipa-action-1': 'Éducation, mentorat et accompagnement de la jeunesse',
    'uipa-action-2': 'Sensibilisation et prévention en santé',
    'uipa-action-3': 'Santé visuelle et dépistage',
    'uipa-action-4': 'Environnement, reboisement et cadre de vie',
    'uipa-action-5': 'Solidarité et soutien aux personnes vulnérables',
    'uipa-action-6': 'Réponse aux urgences et aide aux catastrophes',
    'uipa-actions-note': "Ces axes expriment les champs d'engagement du club ; les actions réalisées sont présentées dans l'onglet Activités.",
    'uipa-life-title': 'Une vie de club qui cultive le collectif',
    'uipa-life-desc': "La vie Lions s'appuie sur des temps d'échange, de décision et de convivialité : assemblées générales, conseils d'administration, réunions statutaires et rencontres entre membres. Les formations et les échanges avec la Zone, la Région et le District permettent aussi de partager les expériences et de mieux préparer les projets.",
    'uipa-join-title': 'Pourquoi nous rejoindre ?',
    'uipa-join-desc': "Pour mettre ses talents au service des autres, apprendre à conduire des projets, développer son leadership et rejoindre un réseau de bénévoles animé par l'envie d'agir.",
    'uipa-cta-title': 'Et si votre engagement faisait la différence ?',
    'uipa-cta-desc': 'Découvrez les membres du club ou prenez contact avec nous pour échanger sur la manière de participer à nos projets.',
    'uipa-cta-members': 'Découvrir nos membres',
    'uipa-cta-contact': 'Nous contacter',
    'hist-presidents-title': 'Les présidents successifs du club',
    'hist-presidents-sub': "Des premiers mandats documentés à aujourd'hui",
    'hist-presidents-term-1': 'Mandat 2023-2024',
    'hist-presidents-term-2': 'Mandat 2024-2025',
    'hist-presidents-term-3': 'Mandat 2025-2026',
    'hist-presidents-term-4': 'Mandat 2026-2027',
    'act-title': "Nos Domaines d'Action",
    'act-sub': 'Nous agissons pour les grandes causes mondiales et les besoins humanitaires prioritaires.',
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
    'hist-eyebrow': 'A century of commitment',
    'hist-title': 'A history of service that brings people together',
    'hist-sub': 'Since 1917, Lions have joined forces to meet community needs. From Chicago to Abidjan, one belief has endured across generations: serving together can change lives.',
    'hist-nav-world': 'The global movement',
    'hist-nav-ivory-coast': 'In Côte d’Ivoire',
    'hist-nav-uipa': 'Our UIPA club',
    'hist-origin-label': 'An idea born in Chicago',
    'hist-origin-title': 'Service begins with doing something for someone else',
    'hist-origin-desc': 'In 1917, Melvin Jones encouraged clubs to look beyond their professional interests and work for the good of their communities. This founding choice still inspires Lions volunteers: listen, bring people together, and take action where it matters.',
    'hist-origin-quote': '"You can’t get very far until you start doing something for someone else." — Melvin Jones',
    'hist-timeline-title': 'Milestones in a worldwide story',
    'hist-timeline-sub': 'Key moments that broadened the reach of Lions service.',
    'hist-1917-title': 'The movement begins',
    'hist-1917-desc': 'In Chicago, Melvin Jones brings clubs together around a new ambition: putting their abilities to work for society. The first convention is held in Dallas that same year.',
    'hist-1920-title': 'The first international step',
    'hist-1920-desc': 'A club is founded in Canada. The movement crosses the United States border and embraces its international purpose.',
    'hist-1925-title': 'Helen Keller’s challenge',
    'hist-1925-desc': 'At the Cedar Point convention, Helen Keller challenges Lions to become “Knights of the Blind.” Her call has a lasting impact on the movement’s commitment to sight.',
    'hist-1945-title': 'A commitment to the United Nations',
    'hist-1945-desc': 'Lions representatives contribute to the work surrounding the creation of the United Nations and help draft its charter.',
    'hist-1954-title': '“We Serve” becomes the motto',
    'hist-1954-desc': '“We Serve” expresses in two words the purpose of Lions everywhere in the world.',
    'hist-1957-title': 'Young people take action',
    'hist-1957-desc': 'The first Leo club is founded in Pennsylvania. The Leo program gives young people the opportunity to grow through leadership, experience, and service.',
    'hist-1968-title': 'The LCIF is established',
    'hist-1968-desc': 'The Lions Clubs International Foundation (LCIF) is created to support large-scale humanitarian projects and strengthen club service.',
    'hist-1990-title': 'The SightFirst campaign',
    'hist-1990-desc': 'Launched to fight preventable blindness, SightFirst funds care, trains professionals, and expands eye-care services.',
    'hist-2017-title': 'A century of service',
    'hist-2017-desc': 'Lions Clubs International celebrates its centennial and renews its commitment to serving communities in more than 200 countries and geographic areas.',
    'hist-africa-eyebrow': 'The legacy continues in West Africa',
    'hist-africa-title': 'Ivorian roots and a new generation of Lions',
    'hist-africa-sub': 'The worldwide movement also comes to life through local clubs, close to communities and their needs.',
    'hist-local-label': 'Our roots, our commitment',
    'hist-local-title': 'The Lions movement in Côte d’Ivoire',
    'hist-local-desc': 'The history of Lions in Côte d’Ivoire is part of the movement’s growth in West Africa. Historical details provided for this page date the charter of Lions Club Abidjan-Lagune to December 20, 1954. Today, Lions Club Abidjan UIPA continues this legacy within the Lions network in Côte d’Ivoire and District 403 A2, adapting service to its community’s needs.',
    'hist-local-note': 'The local date comes from historical details provided to the club; charter and district archives can be added to document it further.',
    'hist-uipa-label': 'Lions Club Abidjan UIPA',
    'hist-uipa-title': 'A story still being written',
    'hist-uipa-desc': 'At the crossroads of the International Private University of Abidjan and local life, Lions Club Abidjan UIPA brings together people who want to put the motto “We Serve” into practice in their community.',
    'hist-uipa-created-title': 'The club is founded',
    'hist-uipa-created-desc': 'Lions Club Abidjan UIPA is created around a shared ambition: putting university engagement at the service of the community.',
    'hist-uipa-recognition-title': 'Official recognition',
    'hist-uipa-recognition-desc': 'The club is officially recognized in 2024, continuing its commitment as part of the Lions movement.',
    'hist-uipa-values': 'Our history is more than a list of dates: it is built year after year by volunteers, partners, and the people we serve.',
    'hist-values-title': 'A mission grounded in values',
    'hist-values-sub': 'Across time and borders, Lions service is rooted in service, integrity, and solidarity.',
    'hist-vision-title': 'Our vision',
    'hist-vision-desc': 'To be the global leader in community and humanitarian service.',
    'hist-mission-title': 'Our mission',
    'hist-mission-desc': 'To empower volunteers to serve their communities, meet humanitarian needs, and promote peace and international understanding.',
    'hist-motto-title': 'Our motto',
    'hist-motto-desc': '“We Serve”: an invitation to turn the desire to help into meaningful action.',
    'hist-ethics-title': 'Our ethics',
    'hist-ethics-desc': 'Integrity, respect, mutual support, and responsibility guide our service and our relationships with communities.',
    'hist-causes-title': 'Causes that meet today’s needs',
    'hist-causes-intro': 'Lions service focuses on connected, practical needs:',
    'hist-cause-1': 'Vision',
    'hist-cause-2': 'Diabetes',
    'hist-cause-3': 'Hunger',
    'hist-cause-4': 'Environment',
    'hist-cause-5': 'Childhood cancer',
    'hist-cause-6': 'Youth',
    'hist-cause-7': 'Disaster relief',
    'hist-cause-8': 'Humanitarian action',
    'hist-cause-9': 'Mental health',
    'hist-symbols-title': 'Symbols, one shared spirit',
    'hist-symbols-desc': 'The emblem’s two lion profiles represent a gaze toward both the past and the future, in service to communities. The motto “We Serve” unites members in a shared promise. Pins and ceremonies mark belonging to the movement; in the field, it is listening, showing up, and taking action that bring its values to life.',
    'hist-structure-title': 'An organization connecting local action to the world',
    'hist-structure-sub': 'Each level supports cooperation, shared learning, and effective projects.',
    'hist-level-1': 'Club — community-level action',
    'hist-level-2': 'Zone and region — local coordination',
    'hist-level-3': 'District — national or territorial network',
    'hist-level-4': 'Multiple district — regional cooperation',
    'hist-level-5': 'Lions International — the worldwide movement',
    'hist-sources-label': 'Learn more:',
    'hist-source-history': 'official history of Lions Clubs International',
    'hist-source-about': 'Lions mission and causes',
    'uipa-eyebrow': 'Our club, our commitment',
    'uipa-title': 'Lions Club Abidjan UIPA: serving at the heart of the community',
    'uipa-intro': 'At the crossroads of university life and the local community, Lions Club Abidjan UIPA brings together people who want to put their skills and energy to work for others.',
    'uipa-anchor-title': 'A university and community foundation',
    'uipa-anchor-desc': 'Connected with the International Private University of Abidjan, the club brings the spirit of service into an environment shaped by learning, initiative, and civic engagement. It creates space for collaboration between the university community and local partners around useful, community-minded projects.',
    'uipa-mission-title': 'Our mission in action',
    'uipa-goal-1': 'Work with communities to address social and humanitarian needs in Abidjan and nearby areas.',
    'uipa-goal-2': 'Encourage young people to develop leadership, responsibility, and teamwork skills.',
    'uipa-goal-3': 'Connect volunteer service, academic excellence, and professional skills.',
    'uipa-structure-title': 'Teams working toward a shared vision',
    'uipa-structure-sub': 'Club responsibilities complement one another to help members grow and turn identified needs into collective projects.',
    'uipa-role-board-title': 'Club officers',
    'uipa-role-board-desc': 'The president, secretary, and treasurer guide club activities, follow up on decisions, and support sound club management.',
    'uipa-role-ems-title': 'Global Service Team — GST',
    'uipa-role-ems-desc': 'It helps identify priority needs, shape service projects, and engage members and partners.',
    'uipa-role-eml-title': 'Global Leadership Team — GLT',
    'uipa-role-eml-desc': 'It encourages training, peer learning, and the development of leadership skills.',
    'uipa-role-eme-title': 'Global Membership Team — GMT',
    'uipa-role-eme-desc': 'It helps welcome new members, strengthen connections, and sustain an open and active club.',
    'uipa-actions-title': 'Areas of service shaped by local needs',
    'uipa-actions-intro': 'In keeping with Lions International’s global causes, the club can bring members and partners together around priorities such as:',
    'uipa-action-1': 'Education, mentoring, and youth development',
    'uipa-action-2': 'Health awareness and prevention',
    'uipa-action-3': 'Vision care and screening',
    'uipa-action-4': 'Environment, tree planting, and community spaces',
    'uipa-action-5': 'Solidarity and support for vulnerable people',
    'uipa-action-6': 'Emergency response and disaster relief',
    'uipa-actions-note': 'These are areas of commitment; completed projects are presented in the Activities section.',
    'uipa-life-title': 'Club life built around collaboration',
    'uipa-life-desc': 'Lions club life includes opportunities to connect, make decisions, and build fellowship: general meetings, board meetings, regular club meetings, and member gatherings. Training and exchanges with the Zone, Region, and District also help members share experience and prepare projects.',
    'uipa-join-title': 'Why join us?',
    'uipa-join-desc': 'Put your talents to work for others, learn to lead projects, strengthen your leadership, and join a network of volunteers who are ready to make a difference.',
    'uipa-cta-title': 'What if your commitment made a difference?',
    'uipa-cta-desc': 'Meet the club members or get in touch to discuss how you can take part in our projects.',
    'uipa-cta-members': 'Meet our members',
    'uipa-cta-contact': 'Contact us',
    'hist-presidents-title': 'Club presidents through the years',
    'hist-presidents-sub': 'From the earliest documented terms to today',
    'hist-presidents-term-1': 'Term 2023-2024',
    'hist-presidents-term-2': 'Term 2024-2025',
    'hist-presidents-term-3': 'Term 2025-2026',
    'hist-presidents-term-4': 'Term 2026-2027',
    'act-title': 'Our Causes',
    'act-sub': 'Serving global causes and addressing priority humanitarian needs.',
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
const statisticAnimationFrames = new WeakMap();

function animateStatistics() {
  const statistics = document.querySelectorAll('#page-accueil .stat-count');
  const duration = 2000;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  statistics.forEach(statistic => {
    const previousFrame = statisticAnimationFrames.get(statistic);
    if(previousFrame) cancelAnimationFrame(previousFrame);

    const target = Number(statistic.dataset.count);
    statistic.textContent = '0';

    if(reducedMotion) {
      statistic.textContent = String(target);
      return;
    }

    const startTime = performance.now();
    const updateCount = currentTime => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      statistic.textContent = String(Math.round(target * easedProgress));

      if(progress < 1) {
        statisticAnimationFrames.set(statistic, requestAnimationFrame(updateCount));
      } else {
        statisticAnimationFrames.delete(statistic);
      }
    };

    statisticAnimationFrames.set(statistic, requestAnimationFrame(updateCount));
  });
}

// Navigation entre les pages
function navigateTo(pageId) {
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
  const activePage = document.getElementById(`page-${pageId}`);
  if(activePage) activePage.classList.remove('hidden');
  if(pageId === 'accueil' && !document.getElementById('page-loader')) animateStatistics();

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