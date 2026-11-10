/*
 * SocioPolix — données des idéologies.
 *
 * Pour ajouter une idéologie, copier un bloc et le remplir :
 *   idees    : [titre, explication]
 *   histoire : [année (nombre), titre court, explication]
 *   figures  : [nom, dates, description SANS citer le nom (sert aux quiz)]
 *   oeuvres  : [titre, auteur, année]
 *   courants : [nom, description]
 *   exemples : [période, titre, lieu, explication] — mises en pratique historiques
 *   partis   : { note (facultatif), hier: [...], aujourdhui: [...] }
 *              chaque parti : [nom, pays, période, description]
 *   proches  : ids d'idéologies voisines (jamais proposées comme mauvaises réponses)
 *   quiz     : { q: question, r: [bonne réponse, 3 mauvaises], e: explication }
 * Les quiz sur les dates, les auteurs, les figures et les partis sont générés automatiquement.
 */
window.IDEOLOGIES = [
  {
    id: "liberalisme",
    nom: "Libéralisme",
    couleur: "#d4a900",
    naissance: "XVIIe – XVIIIe siècle",
    accroche: "La liberté de l’individu comme point de départ de toute politique.",
    resume: "Né de la contestation de l’absolutisme et des guerres de religion, le libéralisme affirme que les individus possèdent des droits que le pouvoir doit garantir et ne peut violer. Il défend l’État de droit, la limitation du pouvoir, la tolérance et, dans sa dimension économique, la propriété privée et le libre-échange.",
    idees: [
      ["Droits individuels", "Chaque personne dispose de droits (vie, liberté, propriété, conscience) antérieurs à l’État, que celui-ci a pour mission de protéger."],
      ["Pouvoir limité", "Le pouvoir doit être encadré par une constitution, divisé entre plusieurs organes et soumis à la loi."],
      ["Consentement des gouvernés", "Un gouvernement n’est légitime que s’il repose sur l’accord de ceux qu’il gouverne."],
      ["Liberté économique", "La propriété privée, la concurrence et le libre-échange sont vus comme les moteurs de la prospérité."],
      ["Tolérance et pluralisme", "L’État n’a pas à imposer une religion ni une conception unique de la vie bonne."]
    ],
    histoire: [
      [1689, "Bill of Rights anglais et « Deux traités du gouvernement civil » de Locke", "Après la Glorieuse Révolution, le Parlement limite le pouvoir royal ; Locke théorise le gouvernement par consentement."],
      [1748, "Parution de « De l’esprit des lois »", "Montesquieu y défend la séparation des pouvoirs législatif, exécutif et judiciaire."],
      [1776, "Parution de « La Richesse des nations » et Déclaration d’indépendance américaine", "Adam Smith fonde l’économie politique libérale la même année que la naissance des États-Unis."],
      [1789, "Déclaration des droits de l’homme et du citoyen", "La Révolution française proclame la liberté, l’égalité en droits et la souveraineté de la nation."],
      [1859, "Parution de « De la liberté » de John Stuart Mill", "Mill formule le principe de non-nuisance : on ne peut contraindre un individu que pour empêcher un tort fait à autrui."],
      [1947, "Fondation de la Société du Mont-Pèlerin", "Autour de Hayek, des intellectuels relancent le libéralisme face au planisme : c’est l’une des sources du néolibéralisme."],
      [1971, "Parution de « Théorie de la justice » de John Rawls", "Rawls renouvelle le libéralisme en y intégrant une exigence forte de justice sociale."]
    ],
    figures: [
      ["John Locke", "1632-1704", "Philosophe anglais, théoricien des droits naturels et du gouvernement fondé sur le consentement."],
      ["Montesquieu", "1689-1755", "Philosophe français des Lumières, penseur de la séparation des pouvoirs."],
      ["Adam Smith", "1723-1790", "Économiste et philosophe écossais, auteur de la métaphore de la « main invisible »."],
      ["Benjamin Constant", "1767-1830", "Écrivain et homme politique franco-suisse, il distingue la liberté des Anciens de celle des Modernes."],
      ["Alexis de Tocqueville", "1805-1859", "Penseur français qui analyse la démocratie américaine et met en garde contre la « tyrannie de la majorité »."],
      ["John Stuart Mill", "1806-1873", "Philosophe britannique utilitariste, défenseur de la liberté d’expression et de l’égalité des sexes."],
      ["Friedrich Hayek", "1899-1992", "Économiste austro-britannique, critique de la planification et prix Nobel d’économie en 1974."],
      ["John Rawls", "1921-2002", "Philosophe américain, auteur du « voile d’ignorance » et d’un libéralisme égalitaire."]
    ],
    oeuvres: [
      ["Deux traités du gouvernement civil", "John Locke", 1689],
      ["De l’esprit des lois", "Montesquieu", 1748],
      ["La Richesse des nations", "Adam Smith", 1776],
      ["De la démocratie en Amérique", "Alexis de Tocqueville", 1835],
      ["De la liberté", "John Stuart Mill", 1859],
      ["La Route de la servitude", "Friedrich Hayek", 1944],
      ["Théorie de la justice", "John Rawls", 1971]
    ],
    courants: [
      ["Libéralisme classique", "Défense des libertés et d’un État limité à ses fonctions essentielles (XVIIIe-XIXe siècles)."],
      ["Social-libéralisme", "Accepte l’intervention de l’État pour donner à chacun les moyens réels de sa liberté."],
      ["Ordolibéralisme", "École allemande : l’État fixe et fait respecter les règles de la concurrence sans diriger l’économie."],
      ["Néolibéralisme", "Renouveau du XXe siècle prônant dérégulation, privatisations et ouverture des marchés."],
      ["Libéralisme conservateur", "Associe les libertés économiques et politiques à l’attachement à l’ordre et aux mœurs héritées (Tocqueville, Raymond Aron)."],
      ["Libéralisme égalitaire", "Dans le sillage de Rawls : les inégalités ne sont justes que si elles profitent aux plus défavorisés."],
      ["École autrichienne", "Mises et Hayek : le marché est un processus de découverte qu’aucun planificateur ne peut remplacer."]
    ],
    critiques: [
      "Les socialistes lui reprochent de proclamer des libertés « formelles » sans donner à tous les moyens matériels de les exercer.",
      "Les conservateurs et les communautariens l’accusent de dissoudre les liens sociaux dans l’individualisme.",
      "Les politiques néolibérales sont critiquées pour le creusement des inégalités et l’instabilité financière."
    ],
    exemples: [
      ["À partir de 1689", "La monarchie parlementaire britannique", "Royaume-Uni", "Après la Glorieuse Révolution, le roi gouverne sous le contrôle du Parlement : c’est le premier régime durable de pouvoir limité."],
      ["1787-1791", "La Constitution américaine et sa Déclaration des droits", "États-Unis", "Séparation des pouvoirs, fédéralisme et libertés garanties par écrit : une application directe de Locke et de Montesquieu."],
      ["1846", "L’abrogation des Corn Laws", "Royaume-Uni", "En supprimant les droits de douane sur les céréales, le pays bascule dans le libre-échange."],
      ["À partir de 1975", "Les réformes des « Chicago Boys »", "Chili", "Privatisations et ouverture des marchés menées sous la dictature de Pinochet : un cas souvent cité pour montrer que libéralisme économique et libertés politiques ne vont pas toujours ensemble."]
    ],
    partis: {
      hier: [
        ["Parti libéral", "Royaume-Uni", "1859-1988", "Grand parti de gouvernement du XIXe siècle (Gladstone), supplanté par les travaillistes après 1918."],
        ["Parti national-libéral", "Allemagne", "1867-1918", "Parti de la bourgeoisie libérale, allié de Bismarck pour l’unification."],
        ["Parti radical", "France", "fondé en 1901", "Pilier de la IIIe République : laïcité, libertés publiques, défense de la petite propriété."]
      ],
      aujourdhui: [
        ["FDP", "Allemagne", "depuis 1948", "Parti libéral-démocrate, attaché au marché et aux libertés civiles."],
        ["Libéraux-démocrates", "Royaume-Uni", "depuis 1988", "Héritiers du Parti libéral, d’orientation sociale-libérale."],
        ["VVD", "Pays-Bas", "depuis 1948", "Libéralisme de centre droit, longtemps premier parti du pays."],
        ["Renaissance", "France", "depuis 2016", "Parti centriste d’Emmanuel Macron, libéral en économie et pro-européen."]
      ]
    },
    proches: ["libertarianisme", "social-democratie"],
    quiz: [
      { q: "Quel principe Montesquieu défend-il pour empêcher les abus de pouvoir ?", r: ["La séparation des pouvoirs", "La dictature du prolétariat", "Le droit divin des rois", "La démocratie directe permanente"], e: "Dans « De l’esprit des lois » (1748), Montesquieu soutient qu’il faut que « le pouvoir arrête le pouvoir »." },
      { q: "Selon le « principe de non-nuisance » de John Stuart Mill, quand peut-on contraindre un individu ?", r: ["Pour empêcher qu’il nuise à autrui", "Pour son propre bien moral", "Dès que la majorité le souhaite", "Jamais, en aucune circonstance"], e: "Pour Mill, la seule raison légitime d’user de la force contre un individu est d’empêcher un tort fait aux autres." },
      { q: "Que désigne la « main invisible » chez Adam Smith ?", r: ["Le fait que la recherche de l’intérêt personnel puisse servir l’intérêt général", "Le contrôle secret de l’État sur les prix", "L’influence de l’Église sur l’économie", "La solidarité spontanée entre ouvriers"], e: "Smith observe qu’en poursuivant son propre intérêt sur un marché, chacun contribue souvent, sans le vouloir, à la richesse de tous." },
      { q: "Quelle expérience de pensée John Rawls propose-t-il pour définir une société juste ?", r: ["Le voile d’ignorance", "L’état de nature guerrier", "Le mythe de la caverne", "Le pari de Pascal"], e: "Rawls imagine des personnes choisissant les règles de la société sans savoir quelle place elles y occuperont." }
    ]
  },

  {
    id: "conservatisme",
    nom: "Conservatisme",
    couleur: "#1d4f91",
    naissance: "Fin du XVIIIe siècle",
    accroche: "Préserver ce que le temps a éprouvé, réformer avec prudence.",
    resume: "Le conservatisme se forme en réaction à la Révolution française. Il se méfie des projets qui prétendent reconstruire la société à partir de principes abstraits et valorise la tradition, les institutions héritées, l’ordre et la continuité entre les générations. Il n’est pas hostile à tout changement, mais veut qu’il soit graduel.",
    idees: [
      ["Tradition", "Les coutumes et institutions héritées condensent l’expérience de générations ; elles méritent le respect avant d’être réformées."],
      ["Prudence", "La société est trop complexe pour être refaite d’un coup : mieux vaut réformer peu à peu que révolutionner."],
      ["Ordre et autorité", "Sans autorité légitime et sans ordre, il n’y a ni liberté durable ni sécurité."],
      ["Corps intermédiaires", "Famille, religion, communautés locales et associations structurent la vie sociale mieux que l’État ou l’individu isolé."],
      ["Scepticisme envers l’abstraction", "Les « droits de l’homme » en général comptent moins que les libertés concrètes d’un peuple et de son histoire."]
    ],
    histoire: [
      [1790, "Parution des « Réflexions sur la Révolution de France »", "Edmund Burke y critique la table rase révolutionnaire : c’est le texte fondateur du conservatisme moderne."],
      [1797, "Parution des « Considérations sur la France »", "Joseph de Maistre y interprète la Révolution comme un châtiment providentiel et fonde la pensée contre-révolutionnaire."],
      [1815, "Congrès de Vienne", "Les monarchies européennes restaurent l’ordre ancien après la chute de Napoléon."],
      [1818, "Chateaubriand fonde le journal « Le Conservateur »", "Le mot entre dans le vocabulaire politique."],
      [1874, "Second gouvernement Disraeli au Royaume-Uni", "Il met en œuvre un conservatisme social (« one-nation ») soucieux de la condition ouvrière."],
      [1953, "Parution de « The Conservative Mind » de Russell Kirk", "L’ouvrage donne une généalogie intellectuelle au conservatisme américain d’après-guerre."],
      [1979, "Margaret Thatcher devient Première ministre", "Avec Ronald Reagan (élu en 1980), elle incarne l’alliance du conservatisme et du libéralisme économique."]
    ],
    figures: [
      ["Edmund Burke", "1729-1797", "Député et penseur irlando-britannique, critique de la Révolution française et père du conservatisme moderne."],
      ["Joseph de Maistre", "1753-1821", "Penseur savoyard contre-révolutionnaire, défenseur de la monarchie et de l’autorité du pape."],
      ["François-René de Chateaubriand", "1768-1848", "Écrivain romantique et homme politique français, fondateur du journal qui donna son nom au courant."],
      ["Benjamin Disraeli", "1804-1881", "Premier ministre britannique, promoteur d’un conservatisme social réconciliant les « deux nations », riches et pauvres."],
      ["Michael Oakeshott", "1901-1990", "Philosophe britannique, critique du « rationalisme en politique »."],
      ["Russell Kirk", "1918-1994", "Essayiste américain qui a redonné une tradition intellectuelle au conservatisme aux États-Unis."],
      ["Margaret Thatcher", "1925-2013", "Première ministre britannique de 1979 à 1990, surnommée la « Dame de fer »."],
      ["Roger Scruton", "1944-2020", "Philosophe britannique, défenseur contemporain de la tradition, de la beauté et de l’attachement au lieu."]
    ],
    oeuvres: [
      ["Réflexions sur la Révolution de France", "Edmund Burke", 1790],
      ["Considérations sur la France", "Joseph de Maistre", 1797],
      ["Sybil ou les Deux Nations", "Benjamin Disraeli", 1845],
      ["The Conservative Mind", "Russell Kirk", 1953],
      ["Le Rationalisme en politique", "Michael Oakeshott", 1962]
    ],
    courants: [
      ["Traditionalisme contre-révolutionnaire", "Rejet des principes de 1789, défense du trône et de l’autel (Maistre, Bonald)."],
      ["Conservatisme libéral", "Associe défense des institutions traditionnelles et économie de marché."],
      ["Néoconservatisme", "Courant américain de la fin du XXe siècle, favorable à une politique étrangère interventionniste."],
      ["National-conservatisme", "Met l’accent sur la souveraineté nationale, l’identité culturelle et le contrôle de l’immigration."],
      ["Conservatisme social", "Défense de la famille, de la religion et de la morale traditionnelle, notamment sur l’avortement et le mariage."],
      ["Paléoconservatisme", "Courant américain hostile aux interventions militaires, à l’immigration et au libre-échange."],
      ["Conservatisme « one-nation »", "Tradition britannique issue de Disraeli : les élites ont des devoirs envers les classes populaires."]
    ],
    critiques: [
      "Ses adversaires lui reprochent de justifier les hiérarchies et les injustices existantes au nom de la tradition.",
      "Il serait défini par ce qu’il refuse plus que par un projet : ce qu’il conserve change selon les époques et les pays.",
      "L’alliance avec le libéralisme économique est jugée contradictoire, le marché bouleversant les traditions qu’il veut protéger."
    ],
    exemples: [
      ["1815-1848", "L’Europe de Metternich", "Autriche et Europe", "Le chancelier autrichien organise l’entente des monarchies pour étouffer les mouvements libéraux et nationaux."],
      ["1814-1830", "La Restauration", "France", "Les Bourbons reviennent sur le trône ; les « ultras » veulent effacer l’héritage révolutionnaire."],
      ["1874-1880", "Le gouvernement Disraeli", "Royaume-Uni", "Lois sur la santé publique, le logement ouvrier et les syndicats : le conservatisme réformateur en actes."],
      ["Années 1980", "La « révolution conservatrice » de Thatcher et Reagan", "Royaume-Uni, États-Unis", "Baisse des impôts, privatisations, fermeté face aux syndicats et à l’URSS, discours sur les valeurs traditionnelles."]
    ],
    partis: {
      hier: [
        ["Tories", "Royaume-Uni", "fin du XVIIe siècle-1834", "Parti du roi et de l’Église anglicane, ancêtre du Parti conservateur."],
        ["Parti de l’Ordre", "France", "1848-1852", "Coalition de monarchistes et de notables après la révolution de 1848 (Thiers, Falloux)."],
        ["Parti conservateur allemand", "Allemagne", "1876-1918", "Parti de l’aristocratie prussienne et des grands propriétaires."]
      ],
      aujourdhui: [
        ["Parti conservateur", "Royaume-Uni", "depuis 1834", "L’un des plus anciens partis du monde encore en activité."],
        ["Les Républicains", "France", "depuis 2015", "Principal parti de la droite de gouvernement, héritier du RPR et de l’UMP."],
        ["Parti républicain", "États-Unis", "depuis 1854", "Devenu le grand parti conservateur américain dans la seconde moitié du XXe siècle."],
        ["Droit et justice (PiS)", "Pologne", "depuis 2001", "National-conservateur, proche de l’Église catholique."]
      ]
    },
    proches: ["democratie-chretienne", "nationalisme", "liberalisme"],
    quiz: [
      { q: "En réaction à quel événement le conservatisme moderne se constitue-t-il ?", r: ["La Révolution française", "La révolution d’Octobre", "La Réforme protestante", "La Première Guerre mondiale"], e: "Les « Réflexions » de Burke (1790) répondent directement aux événements de 1789." },
      { q: "Que reproche Edmund Burke aux révolutionnaires français ?", r: ["De vouloir reconstruire la société à partir de principes abstraits", "D’être trop attachés à la monarchie", "De refuser le commerce avec l’Angleterre", "De ne pas aller assez loin dans l’égalité"], e: "Pour Burke, la société est un héritage à réformer prudemment, non une page blanche." },
      { q: "Que désigne le conservatisme « one-nation » de Disraeli ?", r: ["Un conservatisme social voulant unir riches et pauvres", "Le refus de toute immigration", "L’union des couronnes d’Angleterre et d’Écosse", "Un projet d’empire mondial unique"], e: "Disraeli s’inquiétait de voir le pays divisé en « deux nations » et défendait des réformes sociales menées par les conservateurs." },
      { q: "Quelle attitude face au changement caractérise le conservatisme ?", r: ["L’accepter s’il est graduel et prudent", "Le refuser en toutes circonstances", "L’accélérer par la révolution", "Le confier à des experts planificateurs"], e: "Burke lui-même écrivait qu’un État sans moyens de changer n’a pas les moyens de se conserver." }
    ]
  },

  {
    id: "socialisme",
    nom: "Socialisme",
    couleur: "#e0457b",
    naissance: "Début du XIXe siècle",
    accroche: "L’égalité réelle et la solidarité contre les injustices du capitalisme.",
    resume: "Le socialisme naît avec la révolution industrielle et la misère ouvrière. Il critique un capitalisme qui concentre les richesses et propose d’organiser collectivement la production et la répartition. Très divers, il va des communautés idéales des premiers penseurs aux grands partis ouvriers, réformistes ou révolutionnaires.",
    idees: [
      ["Égalité sociale", "L’égalité devant la loi ne suffit pas : il faut réduire les inégalités réelles de conditions."],
      ["Critique du capitalisme", "La propriété privée des moyens de production permet à une minorité de profiter du travail de la majorité."],
      ["Propriété ou contrôle collectif", "Les grands moyens de production doivent appartenir à la collectivité ou être contrôlés par elle."],
      ["Solidarité", "La coopération doit primer sur la concurrence ; la société est responsable de chacun de ses membres."],
      ["Émancipation des travailleurs", "Les travailleurs doivent s’organiser (syndicats, partis, coopératives) pour conquérir leurs droits."]
    ],
    histoire: [
      [1800, "Robert Owen prend la direction de la filature de New Lanark", "Il y expérimente une organisation plus humaine du travail : journée réduite, école, logements."],
      [1839, "Parution de « Organisation du travail » de Louis Blanc", "Il y propose des « ateliers sociaux » soutenus par l’État."],
      [1864, "Fondation de la Première Internationale à Londres", "L’Association internationale des travailleurs réunit socialistes, syndicalistes et anarchistes."],
      [1889, "Fondation de la Deuxième Internationale à Paris", "Elle fédère les partis socialistes et fait du 1er mai une journée de revendication."],
      [1905, "Création de la SFIO", "Les socialistes français s’unifient sous l’impulsion de Jean Jaurès et Jules Guesde."],
      [1920, "Congrès de Tours", "La majorité rejoint l’Internationale communiste et fonde le futur PCF ; Léon Blum garde la « vieille maison » socialiste."],
      [1936, "Victoire du Front populaire en France", "Le gouvernement Blum instaure les congés payés et la semaine de 40 heures."],
      [1981, "François Mitterrand est élu président de la République", "Premier président socialiste de la Ve République : nationalisations, retraite à 60 ans, abolition de la peine de mort."]
    ],
    figures: [
      ["Henri de Saint-Simon", "1760-1825", "Penseur français qui rêve d’une société dirigée par les « industriels » et les savants au profit du plus grand nombre."],
      ["Robert Owen", "1771-1858", "Industriel gallois devenu réformateur, pionnier du mouvement coopératif."],
      ["Charles Fourier", "1772-1837", "Penseur français, inventeur du phalanstère, communauté harmonieuse de travail et de vie."],
      ["Pierre Leroux", "1797-1871", "Philosophe français qui popularise le mot « socialisme » dans les années 1830."],
      ["Louis Blanc", "1811-1882", "Journaliste et homme politique français, membre du gouvernement provisoire de 1848 et défenseur du droit au travail."],
      ["Jean Jaurès", "1859-1914", "Député du Tarn, fondateur de « L’Humanité », pacifiste assassiné à la veille de la Première Guerre mondiale."],
      ["Léon Blum", "1872-1950", "Chef du gouvernement du Front populaire en 1936."],
      ["François Mitterrand", "1916-1996", "Président de la République française de 1981 à 1995."]
    ],
    oeuvres: [
      ["Théorie des quatre mouvements", "Charles Fourier", 1808],
      ["Organisation du travail", "Louis Blanc", 1839],
      ["L’Armée nouvelle", "Jean Jaurès", 1911],
      ["À l’échelle humaine", "Léon Blum", 1945]
    ],
    courants: [
      ["Socialisme utopique", "Premiers socialistes (Saint-Simon, Fourier, Owen) qui imaginent des communautés modèles."],
      ["Socialisme démocratique", "Veut transformer la société par le suffrage universel et la loi."],
      ["Socialisme autogestionnaire", "Confie la gestion des entreprises aux travailleurs eux-mêmes."],
      ["Guesdisme", "Courant marxiste français de Jules Guesde, centré sur la lutte des classes et le parti ouvrier."],
      ["Austromarxisme", "École viennoise (Otto Bauer) cherchant une voie entre réformisme et bolchevisme."],
      ["Socialisme chrétien", "Tire de l’Évangile une critique de l’argent et de l’exploitation."],
      ["Socialismes africain et arabe", "Après les indépendances, Nyerere en Tanzanie ou Nasser en Égypte adaptent le socialisme aux réalités locales."]
    ],
    critiques: [
      "Les libéraux lui reprochent de menacer la liberté individuelle et l’efficacité économique en étendant le rôle de l’État.",
      "Les communistes ont accusé les socialistes réformistes de s’accommoder du capitalisme.",
      "Au pouvoir, les partis socialistes ont souvent été critiqués par leur base pour leurs compromis avec l’économie de marché."
    ],
    exemples: [
      ["1859-1968", "Le Familistère de Guise", "France", "L’industriel Jean-Baptiste Godin, disciple de Fourier, loge ses ouvriers dans un « palais social » et leur transmet l’entreprise sous forme de coopérative."],
      ["À partir de 1909", "Les kibboutz", "Palestine puis Israël", "Des communautés agricoles où la propriété, le travail et l’éducation des enfants sont mis en commun."],
      ["1936-1938", "Le Front populaire", "France", "Congés payés, semaine de 40 heures, conventions collectives : des conquêtes sociales durables obtenues en quelques semaines."],
      ["1981-1983", "Les débuts de la présidence Mitterrand", "France", "Nationalisations, retraite à 60 ans, cinquième semaine de congés ; dès 1983, le « tournant de la rigueur » marque les limites de l’expérience."]
    ],
    partis: {
      hier: [
        ["SFIO", "France", "1905-1969", "Section française de l’Internationale ouvrière, le parti de Jaurès puis de Blum."],
        ["Parti socialiste italien", "Italie", "1892-1994", "L’un des plus anciens partis ouvriers d’Europe, emporté par les scandales de corruption."],
        ["Parti socialiste unifié (PSU)", "France", "1960-1989", "Laboratoire d’idées de la gauche autogestionnaire."]
      ],
      aujourdhui: [
        ["Parti socialiste", "France", "depuis 1969", "Héritier de la SFIO ; son action au pouvoir relève largement de la social-démocratie."],
        ["La France insoumise", "France", "depuis 2016", "Gauche radicale se réclamant du socialisme démocratique et de l’écologie."],
        ["Die Linke", "Allemagne", "depuis 2007", "Parti de la gauche radicale, issu en partie de l’ancien parti dirigeant de la RDA."],
        ["Parti des travailleurs (PT)", "Brésil", "depuis 1980", "Né du syndicalisme ouvrier, parti du président Lula."]
      ]
    },
    proches: ["communisme", "social-democratie", "anarchisme"],
    quiz: [
      { q: "Dans quel contexte le socialisme apparaît-il ?", r: ["La révolution industrielle et la misère ouvrière", "Les guerres de Religion", "La décolonisation", "La crise pétrolière de 1973"], e: "Les premiers socialistes réagissent aux conditions de vie des ouvriers dans l’Europe industrielle du début du XIXe siècle." },
      { q: "Qu’est-ce qu’un phalanstère, selon Charles Fourier ?", r: ["Une communauté de vie et de travail harmonieuse", "Un syndicat de métier", "Un parti politique clandestin", "Une banque coopérative"], e: "Fourier imagine des communautés d’environ 1 600 personnes où le travail serait choisi et attrayant." },
      { q: "Quelles réformes sont associées au Front populaire de 1936 ?", r: ["Les congés payés et la semaine de 40 heures", "Le droit de vote des femmes", "La création de la Sécurité sociale", "La retraite à 60 ans"], e: "Les accords Matignon et les lois de juin 1936 instaurent deux semaines de congés payés et les 40 heures." },
      { q: "Que se passe-t-il au congrès de Tours en 1920 ?", r: ["Le mouvement socialiste français se scinde entre socialistes et communistes", "Les syndicats adoptent la grève générale", "La SFIO fusionne avec les radicaux", "Jaurès est élu à la tête du parti"], e: "La majorité des délégués adhère à l’Internationale communiste ; la minorité, autour de Blum, maintient la SFIO." }
    ]
  },

  {
    id: "communisme",
    nom: "Communisme",
    couleur: "#c0281c",
    naissance: "Milieu du XIXe siècle",
    accroche: "Abolir les classes sociales par la mise en commun des moyens de production.",
    resume: "Le communisme moderne s’appuie sur l’analyse de Marx et Engels : l’histoire est mue par la lutte des classes, et le capitalisme sera renversé par le prolétariat pour laisser place à une société sans classes ni propriété privée des moyens de production. Au XXe siècle, il devient l’idéologie officielle d’États à parti unique, de l’URSS à la Chine.",
    idees: [
      ["Lutte des classes", "L’histoire des sociétés est celle de l’affrontement entre classes dominantes et classes dominées."],
      ["Matérialisme historique", "Ce sont les conditions économiques de production qui façonnent les institutions et les idées d’une époque."],
      ["Abolition de la propriété privée des moyens de production", "Usines, terres et capitaux doivent devenir propriété commune."],
      ["Société sans classes", "Le but final est une société d’abondance où l’État dépérit : « de chacun selon ses capacités, à chacun selon ses besoins »."],
      ["Internationalisme", "Les travailleurs de tous les pays partagent les mêmes intérêts, par-delà les frontières."]
    ],
    histoire: [
      [1848, "Parution du « Manifeste du parti communiste »", "Marx et Engels y appellent les prolétaires de tous les pays à s’unir."],
      [1867, "Parution du livre I du « Capital »", "Marx y analyse le fonctionnement du capitalisme et l’exploitation du travail."],
      [1871, "Commune de Paris", "Pendant 72 jours, Paris insurgé expérimente un gouvernement ouvrier ; Marx y voit un modèle."],
      [1917, "Révolution d’Octobre en Russie", "Les bolcheviks de Lénine prennent le pouvoir à Petrograd."],
      [1922, "Création de l’URSS", "Premier État se réclamant du communisme, bientôt dominé par Staline."],
      [1949, "Proclamation de la République populaire de Chine", "Les communistes de Mao Zedong l’emportent au terme de la guerre civile."],
      [1956, "Rapport Khrouchtchev", "Le dirigeant soviétique dénonce les crimes de Staline devant le XXe congrès du Parti."],
      [1991, "Dissolution de l’URSS", "Deux ans après la chute du mur de Berlin, le bloc soviétique disparaît."]
    ],
    figures: [
      ["Karl Marx", "1818-1883", "Philosophe et économiste allemand, théoricien de la lutte des classes et critique du capitalisme."],
      ["Friedrich Engels", "1820-1895", "Fils d’industriel allemand, ami, mécène et coauteur du fondateur du marxisme."],
      ["Lénine", "1870-1924", "Chef des bolcheviks et dirigeant de la révolution russe de 1917."],
      ["Rosa Luxemburg", "1871-1919", "Révolutionnaire germano-polonaise, critique de l’autoritarisme bolchevik, assassinée à Berlin."],
      ["Joseph Staline", "1878-1953", "Dirigeant de l’URSS de la fin des années 1920 à sa mort, responsable de la Grande Terreur."],
      ["Léon Trotski", "1879-1940", "Organisateur de l’Armée rouge, théoricien de la « révolution permanente », assassiné en exil au Mexique."],
      ["Antonio Gramsci", "1891-1937", "Dirigeant communiste italien emprisonné par le fascisme, penseur de l’« hégémonie culturelle »."],
      ["Mao Zedong", "1893-1976", "Fondateur de la République populaire de Chine, qui fait de la paysannerie la force révolutionnaire."]
    ],
    oeuvres: [
      ["Manifeste du parti communiste", "Karl Marx et Friedrich Engels", 1848],
      ["Le Capital (livre I)", "Karl Marx", 1867],
      ["Que faire ?", "Lénine", 1902],
      ["L’Accumulation du capital", "Rosa Luxemburg", 1913],
      ["Cahiers de prison", "Antonio Gramsci", 1929]
    ],
    courants: [
      ["Marxisme-léninisme", "Un parti d’avant-garde discipliné conduit la révolution et exerce la « dictature du prolétariat »."],
      ["Trotskisme", "Défend la révolution permanente et internationale contre la bureaucratie stalinienne."],
      ["Maoïsme", "Adapte le marxisme aux sociétés paysannes et prône la mobilisation permanente des masses."],
      ["Eurocommunisme", "Dans les années 1970, des partis d’Europe de l’Ouest prennent leurs distances avec Moscou et acceptent le pluralisme."],
      ["Stalinisme", "« Socialisme dans un seul pays », collectivisation forcée, terreur et culte du chef."],
      ["Conseillisme", "Le pouvoir doit revenir aux conseils ouvriers et non au parti (Pannekoek, Luxemburg en partie)."],
      ["Titisme", "Voie yougoslave : autogestion des entreprises et indépendance vis-à-vis de Moscou."],
      ["Castrisme et guévarisme", "Révolution par la guérilla rurale, exportée en Amérique latine et en Afrique."]
    ],
    critiques: [
      "Les régimes communistes du XXe siècle ont été des dictatures à parti unique, responsables de répressions de masse, de famines et de camps (Goulag, Grand Bond en avant, Khmers rouges).",
      "Les libéraux, comme Hayek, soutiennent que la planification centrale ne peut ni coordonner l’économie ni coexister avec la liberté.",
      "Anarchistes et socialistes démocratiques ont critiqué très tôt la confiscation du pouvoir par le parti."
    ],
    exemples: [
      ["1922-1991", "L’Union soviétique", "URSS", "Économie entièrement planifiée, parti unique, industrialisation à marche forcée ; le stalinisme y ajoute la terreur de masse et le Goulag."],
      ["1949-1976", "La Chine de Mao", "Chine", "Collectivisation des terres, Grand Bond en avant (qui provoque une famine de plusieurs dizaines de millions de morts), puis Révolution culturelle."],
      ["Depuis 1959", "Cuba après la révolution", "Cuba", "Régime de parti unique, économie étatisée, système de santé et d’éducation gratuit, libertés politiques absentes."],
      ["1975-1979", "Le Kampuchéa démocratique", "Cambodge", "Les Khmers rouges vident les villes et abolissent la monnaie ; près d’un quart de la population périt."]
    ],
    partis: {
      hier: [
        ["Ligue des communistes", "Europe", "1847-1852", "L’organisation pour laquelle Marx et Engels rédigent le Manifeste."],
        ["Parti communiste de l’Union soviétique", "URSS", "1912-1991", "Issu des bolcheviks, parti unique de l’URSS."],
        ["Parti communiste italien", "Italie", "1921-1991", "Le plus puissant d’Europe de l’Ouest, figure de proue de l’eurocommunisme."]
      ],
      aujourdhui: [
        ["Parti communiste français", "France", "depuis 1920", "Né du congrès de Tours, premier parti de France à la Libération, aujourd’hui très affaibli."],
        ["Parti communiste chinois", "Chine", "depuis 1921", "Au pouvoir depuis 1949 ; il dirige désormais une économie largement ouverte au marché."],
        ["Parti communiste de Grèce (KKE)", "Grèce", "depuis 1918", "Resté fidèle au marxisme-léninisme."],
        ["Lutte ouvrière", "France", "depuis 1968", "Organisation trotskiste."]
      ]
    },
    proches: ["socialisme", "anarchisme", "social-democratie"],
    quiz: [
      { q: "Selon Marx, quel est le moteur de l’histoire ?", r: ["La lutte des classes", "Le progrès des idées", "La volonté des grands hommes", "La concurrence entre nations"], e: "Le « Manifeste » s’ouvre sur cette thèse : l’histoire de toute société jusqu’à nos jours est l’histoire de luttes de classes." },
      { q: "Quelle formule résume la société communiste achevée ?", r: ["De chacun selon ses capacités, à chacun selon ses besoins", "Liberté, égalité, fraternité", "Laissez faire, laissez passer", "Travail, famille, patrie"], e: "Marx emploie cette formule dans la « Critique du programme de Gotha » (1875)." },
      { q: "Quelle notion Antonio Gramsci a-t-il développée ?", r: ["L’hégémonie culturelle", "La révolution permanente", "La main invisible", "Le voile d’ignorance"], e: "Pour Gramsci, une classe domine aussi en faisant accepter ses idées comme le « bon sens » de toute la société." },
      { q: "Que désigne le prolétariat chez Marx ?", r: ["Ceux qui ne possèdent que leur force de travail", "Les paysans propriétaires de leur terre", "Les petits commerçants", "Les fonctionnaires de l’État"], e: "Le prolétaire, ne possédant pas de moyens de production, doit vendre son travail à la bourgeoisie pour vivre." }
    ]
  },

  {
    id: "anarchisme",
    nom: "Anarchisme",
    couleur: "#6e6a75",
    naissance: "Milieu du XIXe siècle",
    accroche: "L’ordre sans le pouvoir : ni dieu, ni maître, ni État.",
    resume: "L’anarchisme refuse toute domination, à commencer par celle de l’État, mais aussi celles du capital et de l’Église. Loin de prôner le chaos, il imagine une société organisée par la libre association, l’autogestion et le fédéralisme. Il s’oppose aux marxistes sur un point décisif : on ne libère pas la société en s’emparant de l’État.",
    idees: [
      ["Refus de l’État", "L’État, même révolutionnaire, est une machine de domination qu’il faut abolir et non conquérir."],
      ["Autogestion", "Les producteurs et les habitants gèrent eux-mêmes, directement, leurs affaires communes."],
      ["Fédéralisme", "Les communes et associations libres se coordonnent de bas en haut, sans pouvoir central."],
      ["Entraide", "La coopération est un facteur de l’évolution aussi important que la compétition."],
      ["Action directe", "Agir soi-même (grève, boycott, occupation) plutôt que déléguer à des représentants."]
    ],
    histoire: [
      [1840, "Parution de « Qu’est-ce que la propriété ? »", "Proudhon y répond : « c’est le vol » et se déclare anarchiste, donnant au mot un sens positif."],
      [1872, "Congrès de La Haye : rupture entre Marx et Bakounine", "Les anarchistes sont exclus de la Première Internationale et fondent leur propre organisation à Saint-Imier."],
      [1892, "Parution de « La Conquête du pain »", "Kropotkine y expose le communisme libertaire."],
      [1906, "Charte d’Amiens", "La CGT affirme l’indépendance du syndicalisme vis-à-vis des partis, sous l’influence des anarcho-syndicalistes."],
      [1910, "Fondation de la CNT en Espagne", "La confédération anarcho-syndicaliste devient une organisation de masse."],
      [1918, "Début de la Makhnovchtchina en Ukraine", "L’armée paysanne de Nestor Makhno défend des communes libres avant d’être écrasée par l’Armée rouge."],
      [1936, "Révolution sociale en Espagne", "En Catalogne et en Aragon, usines et terres sont collectivisées par les travailleurs pendant la guerre civile."]
    ],
    figures: [
      ["Pierre-Joseph Proudhon", "1809-1865", "Ouvrier typographe français, premier à se dire anarchiste, théoricien du mutuellisme et du fédéralisme."],
      ["Mikhaïl Bakounine", "1814-1876", "Révolutionnaire russe, grand rival de Marx au sein de la Première Internationale."],
      ["Louise Michel", "1830-1905", "Institutrice et figure de la Commune de Paris, déportée en Nouvelle-Calédonie."],
      ["Pierre Kropotkine", "1842-1921", "Prince russe et géographe, théoricien de l’entraide et du communisme libertaire."],
      ["Errico Malatesta", "1853-1932", "Militant italien infatigable, propagandiste de l’insurrection et de l’organisation libertaire."],
      ["Emma Goldman", "1869-1940", "Militante née en Lituanie et active aux États-Unis, pionnière de l’anarcha-féminisme."],
      ["Nestor Makhno", "1888-1934", "Paysan ukrainien, chef d’une armée insurrectionnelle libertaire pendant la guerre civile russe."]
    ],
    oeuvres: [
      ["Qu’est-ce que la propriété ?", "Pierre-Joseph Proudhon", 1840],
      ["L’Unique et sa propriété", "Max Stirner", 1844],
      ["Étatisme et anarchie", "Mikhaïl Bakounine", 1873],
      ["La Conquête du pain", "Pierre Kropotkine", 1892],
      ["L’Entraide, un facteur de l’évolution", "Pierre Kropotkine", 1902]
    ],
    courants: [
      ["Mutuellisme", "Échange équitable entre producteurs indépendants, crédit gratuit (Proudhon)."],
      ["Communisme libertaire", "Mise en commun des biens sans État ni salariat (Kropotkine)."],
      ["Anarcho-syndicalisme", "Le syndicat est à la fois l’outil de la lutte et la base de la société future."],
      ["Anarchisme individualiste", "Primat absolu de l’autonomie de l’individu sur toute organisation (Stirner)."],
      ["Anarcha-féminisme", "L’État et le patriarcat sont deux formes d’une même domination (Emma Goldman)."],
      ["Municipalisme libertaire", "Murray Bookchin : des communes autogérées en assemblées, fédérées entre elles."],
      ["Anarchisme pacifiste", "Refus de toute violence, y compris révolutionnaire, à la suite de Tolstoï."],
      ["Insurrectionnalisme", "Privilégie l’attaque directe et les petits groupes informels aux organisations durables."]
    ],
    critiques: [
      "Ses adversaires jugent irréaliste une société complexe sans État pour arbitrer les conflits et assurer la sécurité.",
      "Les marxistes lui reprochent de désarmer la révolution en refusant de prendre le pouvoir.",
      "La « propagande par le fait » (attentats des années 1890) a durablement associé l’anarchisme à la violence."
    ],
    exemples: [
      ["1918-1921", "Le territoire libre d’Ukraine", "Ukraine", "Sous la protection de l’armée de Makhno, des communes paysannes et des soviets libres s’organisent sans parti dirigeant."],
      ["1936-1939", "Les collectivisations de Catalogne et d’Aragon", "Espagne", "Usines, transports et terres sont gérés par les travailleurs eux-mêmes ; l’expérience est brisée par la guerre et par les rivalités au sein du camp républicain."],
      ["Depuis 1994", "Les communes zapatistes du Chiapas", "Mexique", "Sans se dire anarchistes, les zapatistes pratiquent l’autogouvernement et les mandats révocables : « commander en obéissant »."],
      ["À partir de 2012", "L’administration autonome du Rojava", "Nord de la Syrie", "Le mouvement kurde y applique un « confédéralisme démocratique » inspiré de Murray Bookchin : assemblées locales et parité."]
    ],
    partis: {
      note: "Les anarchistes refusent par principe de former des partis et de briguer le pouvoir : ils s’organisent en fédérations, syndicats et collectifs.",
      hier: [
        ["Fédération jurassienne", "Suisse", "1871-1880", "Organisation des horlogers du Jura, cœur de l’Internationale « antiautoritaire »."],
        ["CNT-FAI", "Espagne", "années 1930", "Syndicat anarcho-syndicaliste et fédération anarchiste, forts de plus d’un million de membres en 1936."],
        ["Parti libéral mexicain", "Mexique", "1905-1918", "Malgré son nom, le mouvement libertaire des frères Flores Magón pendant la révolution mexicaine."]
      ],
      aujourdhui: [
        ["Fédération anarchiste", "France", "depuis 1945", "Elle édite le journal « Le Monde libertaire »."],
        ["CNT", "Espagne", "depuis 1910", "Syndicat anarcho-syndicaliste, aujourd’hui minoritaire."],
        ["Industrial Workers of the World (IWW)", "États-Unis", "depuis 1905", "Syndicat révolutionnaire prônant « un seul grand syndicat »."],
        ["Union communiste libertaire", "France", "depuis 2019", "Organisation communiste libertaire."]
      ]
    },
    proches: ["socialisme", "communisme", "libertarianisme"],
    quiz: [
      { q: "Quelle réponse célèbre Proudhon donne-t-il à la question « Qu’est-ce que la propriété ? »", r: ["C’est le vol", "C’est la liberté", "C’est un droit sacré", "C’est le fruit du travail"], e: "Proudhon vise la propriété qui permet de vivre du travail d’autrui, non la possession personnelle." },
      { q: "Sur quoi porte le désaccord central entre Bakounine et Marx ?", r: ["Le rôle de l’État dans la révolution", "L’existence des classes sociales", "La nécessité d’abolir le capitalisme", "Le droit de grève"], e: "Marx veut que le prolétariat s’empare de l’État ; Bakounine veut le détruire, redoutant une « bureaucratie rouge »." },
      { q: "Quelle thèse Kropotkine défend-il dans « L’Entraide » ?", r: ["La coopération est un facteur majeur de l’évolution", "La lutte de tous contre tous est naturelle", "Seul l’État peut créer la solidarité", "Les espèces n’évoluent pas"], e: "En géographe et naturaliste, Kropotkine répond au darwinisme social en montrant le rôle de l’entraide chez les animaux et les humains." },
      { q: "Qu’est-ce que l’« action directe » ?", r: ["Agir soi-même, sans intermédiaire ni représentant", "Voter à chaque élection", "Créer un parti d’avant-garde", "Négocier avec le gouvernement"], e: "Grève, boycott ou occupation : les intéressés agissent eux-mêmes plutôt que de déléguer à des élus." }
    ]
  },

  {
    id: "social-democratie",
    nom: "Social-démocratie",
    couleur: "#f0704a",
    naissance: "Fin du XIXe siècle",
    accroche: "Réformer le capitalisme par la démocratie plutôt que le renverser.",
    resume: "Issue du mouvement ouvrier marxiste, la social-démocratie abandonne peu à peu l’idée de révolution : c’est par les élections, la loi et la négociation entre syndicats et patronat que l’on améliore le sort des travailleurs. Après 1945, elle bâtit en Europe l’État-providence et l’économie mixte.",
    idees: [
      ["Réformisme", "Le progrès social s’obtient par étapes, dans le cadre de la démocratie parlementaire."],
      ["État-providence", "La collectivité protège chacun contre la maladie, le chômage, la vieillesse et la pauvreté."],
      ["Économie mixte", "Le marché est accepté, mais régulé et complété par des services publics."],
      ["Dialogue social", "Syndicats puissants et patronat négocient salaires et conditions de travail."],
      ["Redistribution", "L’impôt progressif finance les services publics et réduit les inégalités."]
    ],
    histoire: [
      [1875, "Congrès de Gotha", "Les socialistes allemands s’unissent dans le parti qui deviendra le SPD."],
      [1899, "Parution des « Présupposés du socialisme » de Bernstein", "Il propose de « réviser » Marx : le capitalisme ne s’effondre pas, il faut le réformer."],
      [1932, "Les sociaux-démocrates suédois arrivent durablement au pouvoir", "Ils gouverneront presque sans interruption jusqu’en 1976 et construiront le « foyer du peuple »."],
      [1938, "Accords de Saltsjöbaden en Suède", "Syndicats et patronat s’engagent à régler leurs conflits par la négociation."],
      [1945, "Gouvernement travailliste de Clement Attlee", "Il nationalise des secteurs clés et crée le service national de santé (NHS)."],
      [1959, "Congrès de Bad Godesberg", "Le SPD renonce officiellement au marxisme et accepte l’économie de marché."],
      [1969, "Willy Brandt devient chancelier d’Allemagne fédérale", "Il lance l’Ostpolitik, politique de détente avec l’Est."],
      [1997, "Tony Blair devient Premier ministre britannique", "Son « New Labour » incarne la « troisième voie » entre social-démocratie classique et libéralisme."]
    ],
    figures: [
      ["Eduard Bernstein", "1850-1932", "Théoricien allemand du « révisionnisme », pour qui « le mouvement est tout, le but final n’est rien »."],
      ["Hjalmar Branting", "1860-1925", "Premier chef de gouvernement social-démocrate de Suède, prix Nobel de la paix en 1921."],
      ["Clement Attlee", "1883-1967", "Premier ministre travailliste britannique de 1945 à 1951, bâtisseur de l’État-providence d’après-guerre."],
      ["Willy Brandt", "1913-1992", "Chancelier ouest-allemand, prix Nobel de la paix en 1971 pour sa politique de détente."],
      ["Olof Palme", "1927-1986", "Premier ministre suédois, voix du tiers-mondisme et du désarmement, assassiné à Stockholm."],
      ["Tony Blair", "né en 1953", "Premier ministre britannique de 1997 à 2007, promoteur de la « troisième voie »."]
    ],
    oeuvres: [
      ["Les Présupposés du socialisme", "Eduard Bernstein", 1899],
      ["The Future of Socialism", "Anthony Crosland", 1956],
      ["La Troisième Voie", "Anthony Giddens", 1998]
    ],
    courants: [
      ["Révisionnisme", "Révision du marxisme par Bernstein : évolution graduelle plutôt que révolution."],
      ["Modèle nordique", "Impôts élevés, protection sociale universelle et négociation collective généralisée."],
      ["Travaillisme", "Tradition britannique née des syndicats plutôt que du marxisme."],
      ["Troisième voie", "Dans les années 1990, synthèse avec le libéralisme économique (Blair, Schröder)."],
      ["Fabianisme", "La Société fabienne, fondée à Londres en 1884, veut des réformes graduelles préparées par l’expertise."],
      ["Socialisme libéral", "Carlo Rosselli puis Norberto Bobbio : la justice sociale comme accomplissement des libertés."]
    ],
    critiques: [
      "La gauche radicale lui reproche d’avoir renoncé à dépasser le capitalisme et de se contenter de l’aménager.",
      "Les libéraux critiquent le poids des impôts et de la dépense publique.",
      "La « troisième voie » est accusée d’avoir éloigné ces partis de leur électorat populaire."
    ],
    exemples: [
      ["1919-1934", "« Vienne la Rouge »", "Autriche", "La municipalité sociale-démocrate bâtit des dizaines de milliers de logements sociaux, des dispensaires et des écoles."],
      ["1932-1976", "Le « foyer du peuple » suédois", "Suède", "Quarante-quatre ans de gouvernement social-démocrate : protection sociale universelle, plein emploi, faibles inégalités."],
      ["1945-1951", "Le gouvernement Attlee", "Royaume-Uni", "Service national de santé, assurances sociales, nationalisation du charbon, du rail et de l’énergie."],
      ["1969-1982", "Les chanceliers Brandt et Schmidt", "Allemagne de l’Ouest", "Extension de l’État social et de la cogestion, qui donne aux salariés des sièges dans les conseils des grandes entreprises."]
    ],
    partis: {
      hier: [
        ["Parti ouvrier social-démocrate d’Autriche", "Autriche", "1889-1934", "Le parti de « Vienne la Rouge », interdit par la dictature de Dollfuss."],
        ["Parti social-démocrate (SDP)", "Royaume-Uni", "1981-1988", "Scission modérée du Parti travailliste."],
        ["SPD de la république de Weimar", "Allemagne", "1919-1933", "Principal soutien de la première démocratie allemande, interdit par les nazis."]
      ],
      aujourdhui: [
        ["SPD", "Allemagne", "depuis 1875", "Le plus ancien parti d’Allemagne."],
        ["Parti social-démocrate suédois (SAP)", "Suède", "depuis 1889", "Architecte du modèle suédois."],
        ["Parti travailliste", "Royaume-Uni", "depuis 1900", "Né des syndicats britanniques."],
        ["PSOE", "Espagne", "depuis 1879", "« Socialiste » de nom, social-démocrate dans sa pratique de gouvernement."]
      ]
    },
    proches: ["socialisme", "communisme", "liberalisme"],
    quiz: [
      { q: "Qu’est-ce qui distingue la social-démocratie du communisme ?", r: ["Elle choisit la réforme démocratique plutôt que la révolution", "Elle refuse toute intervention de l’État", "Elle rejette les syndicats", "Elle défend le parti unique"], e: "La social-démocratie veut transformer la société par les élections, la loi et la négociation." },
      { q: "Quel tournant le SPD prend-il à Bad Godesberg en 1959 ?", r: ["Il abandonne la référence au marxisme", "Il fusionne avec le parti communiste", "Il renonce à participer aux élections", "Il adopte un programme écologiste"], e: "Le programme de Bad Godesberg accepte l’économie de marché : « la concurrence autant que possible, la planification autant que nécessaire »." },
      { q: "Quelle institution britannique le gouvernement Attlee crée-t-il en 1948 ?", r: ["Le service national de santé (NHS)", "La BBC", "La Banque d’Angleterre", "Le Parlement écossais"], e: "Le NHS offre des soins gratuits à tous, financés par l’impôt." },
      { q: "Que soutenait Eduard Bernstein, père du « révisionnisme » ?", r: ["Le capitalisme ne s’effondrera pas de lui-même : il faut le réformer pas à pas", "La révolution armée est imminente", "Il faut abolir l’État immédiatement", "Les syndicats sont inutiles"], e: "Bernstein constatait que la condition ouvrière s’améliorait et que les prédictions d’effondrement ne se réalisaient pas." }
    ]
  },

  {
    id: "fascisme",
    nom: "Fascisme",
    couleur: "#7a5c43",
    naissance: "Années 1920",
    accroche: "La nation totale, le chef et la violence contre la démocratie.",
    resume: "Né en Italie au lendemain de la Première Guerre mondiale, le fascisme est un nationalisme radical qui veut fondre l’individu dans une nation unie derrière un chef, encadrée par un parti unique et mobilisée en permanence. Il rejette à la fois la démocratie libérale et le marxisme. Sa variante allemande, le nazisme, y ajoute un racisme biologique et un antisémitisme exterminateur. Étudier le fascisme, c’est comprendre comment il a conduit à la guerre et au génocide.",
    idees: [
      ["Ultranationalisme", "La nation, conçue comme un corps organique, est la valeur suprême ; elle doit renaître et s’étendre."],
      ["Culte du chef", "Un guide (Duce, Führer) incarne la volonté du peuple et ne rend de comptes à personne."],
      ["État totalitaire", "« Tout dans l’État, rien hors de l’État, rien contre l’État » : parti unique, propagande, embrigadement."],
      ["Rejet de la démocratie et du marxisme", "Le pluralisme, le parlementarisme et la lutte des classes sont vus comme des facteurs de division."],
      ["Exaltation de la violence", "La guerre et la force sont glorifiées comme régénératrices ; les opposants sont éliminés."],
      ["Corporatisme", "Patrons et ouvriers sont réunis de force dans des corporations contrôlées par l’État."]
    ],
    histoire: [
      [1919, "Mussolini fonde les Faisceaux italiens de combat à Milan", "Anciens combattants et nationalistes forment des milices, les « chemises noires »."],
      [1922, "Marche sur Rome", "Sous la pression des fascistes, le roi nomme Mussolini chef du gouvernement."],
      [1925, "Mussolini instaure la dictature", "Après l’assassinat du député Matteotti, les libertés et les partis d’opposition sont supprimés."],
      [1933, "Hitler devient chancelier d’Allemagne", "En quelques mois, les nazis détruisent la république de Weimar."],
      [1935, "Lois de Nuremberg", "L’Allemagne nazie prive les Juifs de leur citoyenneté et interdit les mariages « mixtes »."],
      [1939, "Début de la Seconde Guerre mondiale", "L’invasion de la Pologne ouvre un conflit qui fera plusieurs dizaines de millions de morts, dont six millions de Juifs assassinés."],
      [1945, "Chute des régimes fasciste et nazi", "Mussolini est exécuté par des partisans, Hitler se suicide ; le procès de Nuremberg juge les dirigeants nazis."]
    ],
    figures: [
      ["Benito Mussolini", "1883-1945", "Ancien socialiste italien devenu fondateur du fascisme et dictateur, surnommé le « Duce »."],
      ["Giovanni Gentile", "1875-1944", "Philosophe italien, principal théoricien du régime fasciste et de l’« État éthique »."],
      ["Adolf Hitler", "1889-1945", "Dictateur de l’Allemagne nazie, responsable de la Seconde Guerre mondiale en Europe et de la Shoah."],
      ["José Antonio Primo de Rivera", "1903-1936", "Fondateur de la Phalange espagnole en 1933."],
      ["Oswald Mosley", "1896-1980", "Fondateur de l’Union britannique des fascistes en 1932."]
    ],
    oeuvres: [
      ["La Doctrine du fascisme", "Benito Mussolini et Giovanni Gentile", 1932],
      ["Les Origines du totalitarisme (analyse critique)", "Hannah Arendt", 1951],
      ["Reconnaître le fascisme (analyse critique)", "Umberto Eco", 1995],
      ["Le Fascisme en action (analyse historique)", "Robert Paxton", 2004]
    ],
    courants: [
      ["Fascisme italien", "Le modèle d’origine : État total, parti unique, corporatisme."],
      ["National-socialisme (nazisme)", "Variante allemande fondée sur le racisme biologique, l’antisémitisme et la conquête d’un « espace vital »."],
      ["Phalangisme", "Variante espagnole, mêlant nationalisme, catholicisme et syndicalisme d’État."],
      ["Néofascisme", "Mouvements d’après 1945 qui se réclament de cet héritage ou en reprennent les thèmes."],
      ["Austrofascisme", "Régime autoritaire, catholique et corporatiste de Dollfuss en Autriche (1933-1938) ; son classement comme fascisme est discuté."],
      ["Fascisme clérical", "Alliance du modèle fasciste et d’un nationalisme religieux, comme dans la Slovaquie de Tiso."],
      ["Intégralisme brésilien", "Mouvement des « chemises vertes » de Plínio Salgado dans les années 1930."]
    ],
    critiques: [
      "Le fascisme a conduit à la suppression des libertés, à la guerre d’agression et, avec le nazisme, au génocide des Juifs et des Roms d’Europe.",
      "Les historiens débattent de sa définition : pour certains (Paxton), il se reconnaît à ses actes plus qu’à sa doctrine ; d’autres discutent de l’extension du terme à des régimes autoritaires comme celui de Franco.",
      "L’usage du mot comme simple insulte politique tend à en brouiller le sens historique."
    ],
    exemples: [
      ["1922-1943", "L’Italie fasciste", "Italie", "Parti unique, police politique, encadrement de la jeunesse, conquête de l’Éthiopie, lois antisémites de 1938."],
      ["1933-1945", "Le Troisième Reich", "Allemagne", "La dictature nazie déclenche la guerre en Europe et organise l’extermination de six millions de Juifs."],
      ["1941-1945", "L’État indépendant de Croatie", "Croatie", "Le régime des Oustachis, satellite de l’Axe, massacre Serbes, Juifs et Roms."],
      ["1943-1945", "La République de Salò", "Nord de l’Italie", "État fantoche dirigé par Mussolini sous protection allemande."]
    ],
    partis: {
      note: "Qualifier de « fascistes » des partis actuels fait débat : la plupart des historiens réservent le terme aux mouvements qui s’en réclament et classent les droites radicales d’aujourd’hui dans d’autres catégories (national-populisme, extrême droite).",
      hier: [
        ["Parti national fasciste", "Italie", "1921-1943", "Le parti de Mussolini."],
        ["NSDAP (parti nazi)", "Allemagne", "1920-1945", "Le parti d’Hitler, parti unique à partir de 1933."],
        ["Garde de fer", "Roumanie", "1927-1941", "Mouvement fasciste mystique et violemment antisémite."],
        ["Mouvement social italien (MSI)", "Italie", "1946-1995", "Parti néofasciste fondé par d’anciens cadres de la République de Salò."]
      ],
      aujourdhui: [
        ["CasaPound", "Italie", "depuis 2003", "Mouvement dont les membres se disent « fascistes du troisième millénaire »."],
        ["Forza Nuova", "Italie", "depuis 1997", "Groupuscule néofasciste."],
        ["Aube dorée", "Grèce", "fondée en 1985", "Parti néonazi dont les dirigeants ont été condamnés en 2020 pour direction d’une organisation criminelle."]
      ]
    },
    proches: ["nationalisme", "conservatisme"],
    quiz: [
      { q: "Dans quel pays et à quelle période le fascisme naît-il ?", r: ["En Italie, après la Première Guerre mondiale", "En Allemagne, après 1870", "En Espagne, pendant la guerre civile", "En France, pendant l’affaire Dreyfus"], e: "Mussolini fonde les Faisceaux de combat à Milan en 1919 et prend le pouvoir en 1922." },
      { q: "Quelle formule de Mussolini résume l’ambition totalitaire du fascisme ?", r: ["Tout dans l’État, rien hors de l’État, rien contre l’État", "L’État, c’est moi", "Moins d’État, plus de liberté", "L’État dépérira de lui-même"], e: "L’État fasciste prétend encadrer tous les aspects de la vie : travail, loisirs, jeunesse, culture." },
      { q: "Qu’est-ce qui distingue le nazisme du fascisme italien d’origine ?", r: ["Le racisme biologique et l’antisémitisme placés au cœur de la doctrine", "Le refus du parti unique", "L’attachement à la démocratie parlementaire", "Le pacifisme"], e: "Le nazisme fait de la « race » le principe central de sa vision du monde, ce qui mène à la Shoah." },
      { q: "À quelles idéologies le fascisme s’oppose-t-il simultanément ?", r: ["Au libéralisme démocratique et au marxisme", "Au nationalisme et au militarisme", "Uniquement au conservatisme", "Uniquement à l’anarchisme"], e: "Il se présente comme une « troisième voie » contre la démocratie parlementaire et contre la lutte des classes." }
    ]
  },

  {
    id: "nationalisme",
    nom: "Nationalisme",
    couleur: "#4b3fa8",
    naissance: "XIXe siècle",
    accroche: "À chaque nation son État, à chaque peuple le droit de se gouverner.",
    resume: "Le nationalisme fait de la nation la communauté politique fondamentale : elle doit disposer de son propre État et sa souveraineté prime. Il a servi des causes très différentes : unification de l’Italie et de l’Allemagne, émancipation des peuples colonisés, mais aussi exclusion des minorités et guerres de conquête.",
    idees: [
      ["Primat de la nation", "La loyauté envers la nation passe avant les appartenances de classe, de région ou de religion."],
      ["Souveraineté nationale", "La nation doit se gouverner elle-même, sans dépendre d’une puissance extérieure."],
      ["Droit des peuples à disposer d’eux-mêmes", "Chaque peuple a vocation à former son propre État."],
      ["Identité commune", "Langue, histoire, culture ou volonté de vivre ensemble fondent le sentiment national."],
      ["Unité", "Les divisions internes doivent s’effacer devant l’intérêt national."]
    ],
    histoire: [
      [1808, "Fichte prononce ses « Discours à la nation allemande »", "Dans Berlin occupé par Napoléon, il appelle au réveil national par la langue et l’éducation."],
      [1831, "Mazzini fonde Jeune Italie", "Le mouvement veut une Italie unie, républicaine et indépendante."],
      [1861, "Proclamation du royaume d’Italie", "L’unité italienne aboutit après les campagnes de Cavour et de Garibaldi."],
      [1882, "Conférence de Renan « Qu’est-ce qu’une nation ? »", "Il définit la nation comme un « plébiscite de tous les jours », fondé sur la volonté et non sur la race."],
      [1899, "Charles Maurras rejoint l’Action française", "Il en fait le foyer du « nationalisme intégral », monarchiste et antisémite."],
      [1918, "Quatorze points du président Wilson", "Le droit des peuples à disposer d’eux-mêmes devient un principe de la paix d’après-guerre."],
      [1947, "Indépendance de l’Inde", "Le mouvement national mené par Gandhi et Nehru met fin à la domination britannique."],
      [1960, "« Année de l’Afrique »", "Dix-sept pays africains accèdent à l’indépendance."]
    ],
    figures: [
      ["Johann Gottfried Herder", "1744-1803", "Philosophe allemand pour qui chaque peuple possède un génie propre exprimé par sa langue."],
      ["Johann Gottlieb Fichte", "1762-1814", "Philosophe allemand qui appelle au sursaut national face à l’occupation napoléonienne."],
      ["Giuseppe Mazzini", "1805-1872", "Révolutionnaire génois, apôtre de l’unité italienne et d’une Europe des peuples."],
      ["Giuseppe Garibaldi", "1807-1882", "Chef militaire de l’expédition des Mille, héros de l’unification italienne."],
      ["Ernest Renan", "1823-1892", "Historien français qui définit la nation par la volonté de vivre ensemble."],
      ["Maurice Barrès", "1862-1923", "Écrivain français, chantre de « la terre et les morts »."],
      ["Charles Maurras", "1868-1952", "Théoricien français du « nationalisme intégral » et dirigeant de l’Action française."],
      ["Mohandas Gandhi", "1869-1948", "Dirigeant du mouvement d’indépendance de l’Inde par la non-violence."]
    ],
    oeuvres: [
      ["Discours à la nation allemande", "Johann Gottlieb Fichte", 1808],
      ["Qu’est-ce qu’une nation ?", "Ernest Renan", 1882],
      ["Les Déracinés", "Maurice Barrès", 1897],
      ["L’Imaginaire national (analyse)", "Benedict Anderson", 1983],
      ["Nations et nationalisme (analyse)", "Ernest Gellner", 1983]
    ],
    courants: [
      ["Nationalisme civique", "La nation est une communauté de citoyens unis par des institutions et une volonté commune."],
      ["Nationalisme ethnique", "La nation est définie par l’ascendance, la langue ou la culture héritées."],
      ["Nationalisme de libération", "Lutte d’un peuple dominé ou colonisé pour son indépendance."],
      ["Nationalisme intégral", "Doctrine de Maurras : la nation avant tout, contre la république et les « étrangers de l’intérieur »."],
      ["Indépendantisme régional", "Revendication d’un État pour une nation sans État : Écosse, Catalogne, Québec, Corse."],
      ["Pan-nationalismes", "Projets d’unir tous les peuples d’une même famille : panslavisme, pangermanisme."],
      ["Irrédentisme", "Volonté de rattacher à la nation les territoires « non délivrés » peuplés de compatriotes."],
      ["Souverainisme", "Refus des transferts de pouvoir à des instances supranationales, notamment européennes."]
    ],
    critiques: [
      "Poussé à l’extrême, il nourrit la xénophobie, l’exclusion des minorités et les guerres, comme l’ont montré les deux conflits mondiaux.",
      "Des historiens (Anderson, Gellner, Hobsbawm) soulignent que les nations sont des constructions récentes et non des réalités éternelles.",
      "Internationalistes et fédéralistes lui reprochent de faire obstacle à la coopération entre les peuples."
    ],
    exemples: [
      ["1859-1871", "Les unifications italienne et allemande", "Italie, Allemagne", "Par la diplomatie et la guerre, des dizaines d’États deviennent deux nations ; l’Empire allemand est proclamé à Versailles en 1871."],
      ["À partir de 1923", "La Turquie de Mustafa Kemal", "Turquie", "Sur les ruines de l’Empire ottoman, un État-nation laïc et centralisé, au prix de la négation des minorités."],
      ["1947-1962", "Les indépendances", "Inde, Algérie et autres", "Les mouvements nationaux mettent fin aux empires coloniaux, par la négociation ou par la guerre."],
      ["Années 1990", "L’éclatement de la Yougoslavie", "Balkans", "Les nationalismes serbe, croate et autres mènent à la guerre et au « nettoyage ethnique »."]
    ],
    partis: {
      note: "Le nationalisme se combine avec des orientations très différentes, de la gauche indépendantiste à l’extrême droite.",
      hier: [
        ["Action française", "France", "fondée en 1899", "Mouvement monarchiste du « nationalisme intégral »."],
        ["Congrès national indien", "Inde", "fondé en 1885", "Le parti de l’indépendance, autour de Gandhi et de Nehru."],
        ["Front de libération nationale (FLN)", "Algérie", "fondé en 1954", "Il mène la guerre d’indépendance contre la France."]
      ],
      aujourdhui: [
        ["Parti national écossais (SNP)", "Écosse", "depuis 1934", "Indépendantiste, de centre gauche, tenant d’un nationalisme civique."],
        ["Rassemblement national", "France", "depuis 1972", "L’ancien Front national : priorité nationale et limitation de l’immigration."],
        ["Bharatiya Janata Party (BJP)", "Inde", "depuis 1980", "Parti du nationalisme hindou."],
        ["Sinn Féin", "Irlande", "depuis 1905", "Républicain, partisan de la réunification de l’île."]
      ]
    },
    proches: ["fascisme", "conservatisme"],
    quiz: [
      { q: "Comment Ernest Renan définit-il la nation ?", r: ["Comme un « plébiscite de tous les jours »", "Comme une race pure", "Comme un territoire délimité par des frontières naturelles", "Comme l’ensemble des sujets d’un même roi"], e: "Pour Renan, la nation repose sur un passé partagé et surtout sur la volonté actuelle de vivre ensemble." },
      { q: "Quelle différence y a-t-il entre nationalisme civique et nationalisme ethnique ?", r: ["Le premier se fonde sur la volonté et les institutions, le second sur l’ascendance et la culture héritée", "Le premier est monarchiste, le second républicain", "Le premier est européen, le second américain", "Il n’y en a aucune"], e: "On oppose souvent la conception « française » (Renan) à la conception « allemande » (Herder, Fichte), même si la réalité est plus nuancée." },
      { q: "Quel principe le président Wilson promeut-il en 1918 ?", r: ["Le droit des peuples à disposer d’eux-mêmes", "Le retour aux empires", "La dictature du prolétariat", "Le protectionnisme généralisé"], e: "Ses Quatorze points inspirent le redécoupage de l’Europe après la Première Guerre mondiale." },
      { q: "Quels États naissent des mouvements nationaux du XIXe siècle ?", r: ["L’Italie et l’Allemagne unifiées", "La France et l’Angleterre", "L’URSS et la Chine populaire", "L’Inde et le Pakistan"], e: "Le royaume d’Italie est proclamé en 1861 et l’Empire allemand en 1871." }
    ]
  },

  {
    id: "ecologie",
    nom: "Écologie politique",
    couleur: "#2e9e4f",
    naissance: "Années 1960-1970",
    accroche: "Une planète finie ne peut supporter une croissance infinie.",
    resume: "L’écologie politique part d’un constat scientifique — la dégradation des écosystèmes et les limites des ressources — pour en tirer un projet de société. Elle remet en cause le productivisme, commun au capitalisme et au socialisme industriel, et défend la sobriété, la responsabilité envers les générations futures et une démocratie plus locale.",
    idees: [
      ["Limites planétaires", "Les ressources et la capacité de la Terre à absorber nos pollutions sont finies."],
      ["Critique du productivisme", "Produire et consommer toujours plus n’est ni possible ni souhaitable."],
      ["Responsabilité envers les générations futures", "Nos choix ne doivent pas compromettre la vie de ceux qui viendront après nous."],
      ["Principe de précaution", "Face à un risque grave et irréversible, l’incertitude scientifique ne justifie pas l’inaction."],
      ["Démocratie de proximité", "Décentralisation, participation citoyenne et autonomie locale."]
    ],
    histoire: [
      [1962, "Parution de « Printemps silencieux »", "Rachel Carson révèle les ravages des pesticides ; le livre lance le mouvement écologiste moderne."],
      [1970, "Premier Jour de la Terre", "Vingt millions d’Américains manifestent pour l’environnement."],
      [1972, "Rapport Meadows « Les Limites à la croissance »", "Commandé par le Club de Rome, il modélise l’épuisement des ressources. La même année se tient la conférence de l’ONU à Stockholm."],
      [1974, "Candidature de René Dumont à l’élection présidentielle française", "Premier candidat écologiste, il boit un verre d’eau à la télévision pour alerter sur sa rareté future."],
      [1980, "Fondation des Verts allemands (Die Grünen)", "Ils entrent au Bundestag dès 1983."],
      [1987, "Rapport Brundtland", "Il définit le « développement durable »."],
      [1988, "Création du GIEC", "Le groupe d’experts de l’ONU sur le climat est chargé de synthétiser les connaissances scientifiques."],
      [1992, "Sommet de la Terre à Rio", "Adoption des conventions sur le climat et la biodiversité."],
      [2015, "Accord de Paris sur le climat", "Les États s’engagent à contenir le réchauffement nettement sous 2 °C."]
    ],
    figures: [
      ["Rachel Carson", "1907-1964", "Biologiste marine américaine dont le livre sur les pesticides a éveillé la conscience écologique."],
      ["René Dumont", "1904-2001", "Agronome français, premier candidat écologiste à une élection présidentielle."],
      ["Hans Jonas", "1903-1993", "Philosophe allemand, penseur de la responsabilité envers les générations futures."],
      ["Arne Næss", "1912-2009", "Philosophe norvégien, fondateur de l’« écologie profonde »."],
      ["Murray Bookchin", "1921-2006", "Penseur américain de l’écologie sociale et du municipalisme libertaire."],
      ["André Gorz", "1923-2007", "Philosophe français d’origine autrichienne, pionnier de l’écosocialisme et de la décroissance."],
      ["Ivan Illich", "1926-2002", "Penseur d’origine autrichienne, critique de la société industrielle et théoricien de la convivialité."],
      ["Wangari Maathai", "1940-2011", "Biologiste kényane, fondatrice du Mouvement de la ceinture verte, prix Nobel de la paix en 2004."],
      ["Petra Kelly", "1947-1992", "Cofondatrice des Verts allemands, militante pacifiste."]
    ],
    oeuvres: [
      ["Printemps silencieux", "Rachel Carson", 1962],
      ["Les Limites à la croissance", "Donella Meadows et son équipe", 1972],
      ["La Convivialité", "Ivan Illich", 1973],
      ["Écologie et politique", "André Gorz", 1975],
      ["Le Principe responsabilité", "Hans Jonas", 1979]
    ],
    courants: [
      ["Environnementalisme", "Protéger la nature et corriger les pollutions sans bouleverser le système économique."],
      ["Écologie profonde", "La nature a une valeur en elle-même, indépendamment de son utilité pour l’humanité."],
      ["Écosocialisme", "Crise écologique et crise sociale ont la même cause : le capitalisme."],
      ["Décroissance", "Réduire volontairement la production et la consommation dans les pays riches."],
      ["Écologie sociale", "Murray Bookchin : la domination de la nature découle de la domination entre humains."],
      ["Écomodernisme", "Mise sur la technologie (nucléaire, intensification agricole) pour réduire notre empreinte."],
      ["Collapsologie", "Étude de l’effondrement possible de la civilisation industrielle et des façons de s’y préparer."]
    ],
    critiques: [
      "Ses adversaires lui reprochent de menacer l’emploi et le niveau de vie, ou de proposer une écologie « punitive ».",
      "Les partisans de la croissance verte estiment que l’innovation technique permettra de découpler richesse et pollution.",
      "Le mouvement est divisé sur la stratégie : réformer le capitalisme ou en sortir, nucléaire ou non, participation au pouvoir ou radicalité."
    ],
    exemples: [
      ["1971-1981", "La lutte du Larzac", "France", "Dix ans de résistance non violente de paysans contre l’extension d’un camp militaire : un moment fondateur de l’écologie française."],
      ["1987", "Le protocole de Montréal", "Monde", "Les États interdisent les gaz qui détruisent la couche d’ozone : l’exemple d’un accord environnemental qui a fonctionné."],
      ["1998-2005", "La coalition « rouge-verte »", "Allemagne", "Les Verts au gouvernement obtiennent la sortie programmée du nucléaire et une loi qui lance les énergies renouvelables."],
      ["2008", "Les droits de la nature dans la Constitution", "Équateur", "Pour la première fois, une constitution reconnaît la nature comme sujet de droit."]
    ],
    partis: {
      hier: [
        ["Values Party", "Nouvelle-Zélande", "1972-1990", "Considéré comme le premier parti écologiste national au monde."],
        ["Ecology Party", "Royaume-Uni", "1973-1990", "D’abord nommé PEOPLE, premier parti vert d’Europe."],
        ["Les Verts", "France", "1984-2010", "Ils entrent au gouvernement en 1997 au sein de la « gauche plurielle »."]
      ],
      aujourdhui: [
        ["Alliance 90 / Les Verts", "Allemagne", "depuis 1980", "Le parti vert le plus influent d’Europe."],
        ["Les Écologistes", "France", "depuis 2010", "Fondé sous le nom d’Europe Écologie-Les Verts."],
        ["Ecolo", "Belgique", "depuis 1980", "Parti vert francophone."],
        ["Parti vert européen", "Europe", "depuis 2004", "Fédération des partis verts du continent."]
      ]
    },
    proches: [],
    quiz: [
      { q: "Quel livre de 1962 est considéré comme le point de départ du mouvement écologiste moderne ?", r: ["Printemps silencieux", "Le Capital", "Le Principe responsabilité", "Les Limites à la croissance"], e: "Rachel Carson y montre les effets des pesticides, notamment le DDT, sur les oiseaux et toute la chaîne du vivant." },
      { q: "Que désigne le « productivisme » critiqué par les écologistes ?", r: ["La recherche d’une augmentation sans fin de la production", "Le travail à la chaîne uniquement", "L’agriculture biologique", "La propriété privée"], e: "Les écologistes reprochent cette logique aussi bien au capitalisme qu’aux régimes socialistes industriels." },
      { q: "Quel impératif Hans Jonas formule-t-il dans « Le Principe responsabilité » ?", r: ["Agir de façon à préserver la possibilité d’une vie humaine future sur Terre", "Maximiser le bonheur du plus grand nombre aujourd’hui", "Obéir aux lois de son pays", "Ne jamais intervenir sur la nature"], e: "Parce que la technique donne à l’humanité le pouvoir de se détruire, Jonas étend la morale aux générations à venir." },
      { q: "Que conclut le rapport Meadows en 1972 ?", r: ["Une croissance matérielle indéfinie est impossible dans un monde fini", "Le pétrole est inépuisable", "La population mondiale va diminuer", "Le climat se refroidit"], e: "À l’aide de modèles informatiques, l’équipe du MIT montre que la poursuite des tendances mène à un effondrement au XXIe siècle." }
    ]
  },

  {
    id: "feminisme",
    nom: "Féminisme",
    couleur: "#8e44ad",
    naissance: "Fin du XVIIIe siècle",
    accroche: "L’égalité entre les femmes et les hommes, en droit et dans les faits.",
    resume: "Le féminisme est à la fois un ensemble de théories et un mouvement social qui dénonce la domination masculine et réclame l’égalité. On distingue souvent des « vagues » : la conquête des droits civils et politiques, puis la libération du corps et de la vie privée, puis la prise en compte de la diversité des situations des femmes.",
    idees: [
      ["Égalité des droits", "Les femmes doivent disposer des mêmes droits civils, politiques et économiques que les hommes."],
      ["Critique du patriarcat", "La domination masculine est un système social, non un fait de nature."],
      ["« On ne naît pas femme, on le devient »", "Les rôles féminins et masculins sont construits par l’éducation et la société."],
      ["Libre disposition de son corps", "Contraception, avortement, lutte contre les violences sexuelles."],
      ["« Le privé est politique »", "Le partage des tâches, la famille et la sexualité relèvent aussi de rapports de pouvoir."]
    ],
    histoire: [
      [1791, "Déclaration des droits de la femme et de la citoyenne", "Olympe de Gouges réclame pour les femmes les droits que la Révolution réserve aux hommes."],
      [1792, "Parution de « Défense des droits de la femme »", "Mary Wollstonecraft y revendique l’accès des femmes à l’éducation et à la raison."],
      [1848, "Convention de Seneca Falls", "Première convention pour les droits des femmes aux États-Unis."],
      [1893, "La Nouvelle-Zélande accorde le droit de vote aux femmes", "C’est le premier pays à le faire au niveau national."],
      [1903, "Emmeline Pankhurst fonde l’Union sociale et politique des femmes", "Les « suffragettes » britanniques adoptent des méthodes d’action spectaculaires."],
      [1944, "Les Françaises obtiennent le droit de vote", "Elles votent pour la première fois en 1945."],
      [1949, "Parution du « Deuxième Sexe »", "Simone de Beauvoir y analyse la construction sociale de la féminité."],
      [1975, "Loi Veil en France", "L’interruption volontaire de grossesse est dépénalisée."],
      [2017, "Mouvement #MeToo", "Une vague mondiale de témoignages dénonce les violences sexuelles."]
    ],
    figures: [
      ["Olympe de Gouges", "1748-1793", "Femme de lettres française, autrice d’une déclaration des droits au féminin, guillotinée sous la Terreur."],
      ["Mary Wollstonecraft", "1759-1797", "Philosophe anglaise, pionnière de la revendication d’égalité par l’éducation."],
      ["Hubertine Auclert", "1848-1914", "Militante française du droit de vote, l’une des premières à se dire « féministe »."],
      ["Emmeline Pankhurst", "1858-1928", "Cheffe de file des suffragettes britanniques."],
      ["Simone de Beauvoir", "1908-1986", "Philosophe existentialiste française, autrice de l’ouvrage de référence du féminisme du XXe siècle."],
      ["Betty Friedan", "1921-2006", "Autrice américaine qui a décrit le « malaise sans nom » des femmes au foyer."],
      ["bell hooks", "1952-2021", "Intellectuelle afro-américaine qui articule sexisme, racisme et rapports de classe."],
      ["Kimberlé Crenshaw", "née en 1959", "Juriste américaine qui a forgé le concept d’intersectionnalité."],
      ["Judith Butler", "né·e en 1956", "Philosophe américain·e, théoricien·ne de la performativité du genre."]
    ],
    oeuvres: [
      ["Déclaration des droits de la femme et de la citoyenne", "Olympe de Gouges", 1791],
      ["Défense des droits de la femme", "Mary Wollstonecraft", 1792],
      ["Le Deuxième Sexe", "Simone de Beauvoir", 1949],
      ["La Femme mystifiée", "Betty Friedan", 1963],
      ["Ne suis-je pas une femme ?", "bell hooks", 1981],
      ["Trouble dans le genre", "Judith Butler", 1990]
    ],
    courants: [
      ["Féminisme libéral", "Obtenir l’égalité par la loi, l’éducation et l’accès à toutes les professions."],
      ["Féminisme matérialiste", "Analyse l’exploitation du travail domestique des femmes comme un rapport économique."],
      ["Féminisme radical", "Le patriarcat est le système d’oppression fondamental, qu’il faut abattre et non aménager."],
      ["Féminisme intersectionnel", "Les oppressions de genre, de race et de classe se combinent et doivent être pensées ensemble."],
      ["Féminisme universaliste", "Les droits sont les mêmes pour toutes et tous, sans distinction d’identité (Élisabeth Badinter)."],
      ["Féminisme différentialiste", "Valorise une expérience et une parole propres aux femmes (Luce Irigaray, Hélène Cixous)."],
      ["Écoféminisme", "Relie l’exploitation de la nature et la domination des femmes ; le mot est forgé par Françoise d’Eaubonne en 1974."],
      ["Afroféminisme", "Part de l’expérience des femmes noires, à la suite du « Black feminism » américain."]
    ],
    critiques: [
      "Ses opposants lui reprochent de nier les différences entre les sexes ou d’attiser un conflit entre eux.",
      "Le mouvement est traversé de débats internes vifs : universalisme ou intersectionnalité, prostitution, port du voile, place des personnes trans.",
      "Le féminisme « blanc et bourgeois » a été critiqué pour avoir longtemps ignoré les femmes pauvres et non blanches."
    ],
    exemples: [
      ["1903-1928", "Le combat des suffragettes", "Royaume-Uni", "Manifestations, grèves de la faim, emprisonnements : les Britanniques obtiennent le vote en 1918 (sous conditions) puis à égalité avec les hommes en 1928."],
      ["1965-1975", "Une décennie de droits nouveaux", "France", "Droit de travailler et d’ouvrir un compte sans l’accord du mari (1965), contraception (1967), dépénalisation de l’avortement (1975)."],
      ["24 octobre 1975", "La grève des femmes", "Islande", "Neuf Islandaises sur dix cessent le travail, salarié comme domestique ; cinq ans plus tard, le pays élit la première femme présidente au suffrage universel."],
      ["2004", "La loi contre les violences de genre", "Espagne", "Tribunaux spécialisés, protection et accompagnement des victimes : un modèle souvent cité en Europe."]
    ],
    partis: {
      note: "Le féminisme est porté surtout par des associations et des mouvements ; ses revendications ont été reprises, à des degrés divers, par des partis de presque tout l’échiquier.",
      hier: [
        ["Union sociale et politique des femmes (WSPU)", "Royaume-Uni", "1903-1917", "L’organisation des suffragettes."],
        ["Mouvement de libération des femmes (MLF)", "France", "années 1970", "Mouvement non mixte et sans hiérarchie, moteur de la lutte pour l’avortement."],
        ["Parti pour l’égalité des femmes", "Royaume-Uni", "2015-2024", "Parti fondé pour imposer l’égalité à l’agenda des autres formations."]
      ],
      aujourdhui: [
        ["Planning familial", "France", "depuis 1956", "Association pour l’accès à la contraception, à l’avortement et à l’éducation sexuelle."],
        ["National Organization for Women (NOW)", "États-Unis", "depuis 1966", "Grande organisation féministe américaine, cofondée par Betty Friedan."],
        ["Ni una menos", "Argentine", "depuis 2015", "Mouvement de masse contre les féminicides, qui a essaimé en Amérique latine."]
      ]
    },
    proches: [],
    quiz: [
      { q: "Que signifie la phrase de Simone de Beauvoir « On ne naît pas femme, on le devient » ?", r: ["La féminité est construite par la société et l’éducation", "Les femmes naissent sans droits", "Les femmes doivent mériter leur statut", "La biologie détermine le destin des femmes"], e: "Beauvoir distingue le fait biologique d’être femelle du rôle social assigné aux femmes." },
      { q: "Que désigne le concept d’intersectionnalité forgé par Kimberlé Crenshaw ?", r: ["Le croisement de plusieurs discriminations, comme le sexisme et le racisme", "L’alliance entre partis de gauche", "L’égalité salariale", "La parité en politique"], e: "Crenshaw montre en 1989 que les femmes noires subissent des discriminations que ni l’antiracisme ni le féminisme seuls ne saisissent." },
      { q: "Quel était l’objectif principal de la « première vague » féministe ?", r: ["Les droits civils et politiques, notamment le droit de vote", "Le droit à l’avortement", "La reconnaissance des identités de genre", "La semaine de 35 heures"], e: "Du XIXe siècle au début du XXe, les suffragistes et suffragettes se battent d’abord pour l’égalité juridique et le suffrage." },
      { q: "Que veut dire le slogan « le privé est politique » ?", r: ["La vie domestique et intime est aussi le lieu de rapports de pouvoir", "Les élus n’ont pas droit à une vie privée", "Les entreprises privées doivent être nationalisées", "La politique doit rester une affaire privée"], e: "Les féministes des années 1970 font entrer dans le débat public le travail domestique, la sexualité et les violences conjugales." }
    ]
  },

  {
    id: "libertarianisme",
    nom: "Libertarianisme",
    couleur: "#0e9aa7",
    naissance: "Milieu du XXe siècle",
    accroche: "Chacun est propriétaire de lui-même ; l’État doit être minimal, voire disparaître.",
    resume: "Surtout développé aux États-Unis, le libertarianisme pousse la logique libérale à son terme : la liberté individuelle et la propriété sont des droits quasi absolus, et toute contrainte de l’État — impôt compris — doit être justifiée ou abolie. Il est libéral à la fois sur le plan économique et sur les questions de mœurs.",
    idees: [
      ["Propriété de soi", "Chaque individu est l’unique propriétaire de son corps, de son travail et de ce qu’il en tire."],
      ["Principe de non-agression", "Nul ne peut prendre l’initiative de la force contre la personne ou les biens d’autrui."],
      ["État minimal ou absent", "Au plus, l’État assure police, justice et défense ; pour certains, même cela peut être laissé au marché."],
      ["Marché libre", "Les échanges volontaires coordonnent la société mieux que toute autorité."],
      ["Libertés personnelles", "Chacun vit comme il l’entend tant qu’il ne lèse personne : drogues, mœurs, expression."]
    ],
    histoire: [
      [1850, "Parution de « La Loi » de Frédéric Bastiat", "Ce pamphlet contre la « spoliation légale » deviendra une référence des libertariens."],
      [1949, "Parution de « L’Action humaine »", "Ludwig von Mises y expose l’économie de l’école autrichienne."],
      [1957, "Parution de « La Grève » (Atlas Shrugged)", "Le roman d’Ayn Rand exalte l’individu créateur face à l’État."],
      [1971, "Fondation du Parti libertarien aux États-Unis", "Il devient le troisième parti du pays par le nombre de voix, loin derrière les deux grands."],
      [1974, "Parution de « Anarchie, État et utopie »", "Robert Nozick y défend l’État minimal contre la justice redistributive de Rawls."],
      [1977, "Fondation du Cato Institute", "Ce cercle de réflexion diffuse les idées libertariennes à Washington."],
      [2023, "Javier Milei est élu président de l’Argentine", "Il se revendique « anarcho-capitaliste »."]
    ],
    figures: [
      ["Frédéric Bastiat", "1801-1850", "Économiste et pamphlétaire français, précurseur revendiqué, auteur de la « pétition des marchands de chandelles »."],
      ["Ludwig von Mises", "1881-1973", "Économiste autrichien, chef de file de l’école autrichienne et critique du calcul économique socialiste."],
      ["Ayn Rand", "1905-1982", "Romancière américaine née en Russie, fondatrice de l’objectivisme et apôtre de l’« égoïsme rationnel »."],
      ["Murray Rothbard", "1926-1995", "Économiste américain, théoricien de l’anarcho-capitalisme."],
      ["Robert Nozick", "1938-2002", "Philosophe de Harvard, défenseur de l’État minimal."],
      ["David Friedman", "né en 1945", "Économiste américain qui défend une société sans État par des arguments d’efficacité."]
    ],
    oeuvres: [
      ["La Loi", "Frédéric Bastiat", 1850],
      ["L’Action humaine", "Ludwig von Mises", 1949],
      ["La Grève", "Ayn Rand", 1957],
      ["Vers une société sans État", "David Friedman", 1973],
      ["Anarchie, État et utopie", "Robert Nozick", 1974],
      ["L’Éthique de la liberté", "Murray Rothbard", 1982]
    ],
    courants: [
      ["Minarchisme", "L’État doit se limiter à la police, à la justice et à la défense."],
      ["Anarcho-capitalisme", "Toutes les fonctions de l’État, y compris la sécurité, peuvent être assurées par le marché."],
      ["Objectivisme", "Philosophie d’Ayn Rand fondée sur la raison et l’intérêt personnel."],
      ["Libertarianisme de gauche", "Associe propriété de soi et partage égalitaire des ressources naturelles."],
      ["Agorisme", "Samuel Konkin : saper l’État par l’économie parallèle plutôt que par les élections."],
      ["Paléolibertarianisme", "Allie l’hostilité à l’État à un conservatisme culturel (le dernier Rothbard)."]
    ],
    critiques: [
      "Ses adversaires estiment qu’un État minimal laisserait sans protection les plus faibles et sans réponse les problèmes collectifs (pollution, santé publique).",
      "Considérer l’impôt comme un vol reviendrait à ignorer ce que chacun doit à la société qui rend sa prospérité possible.",
      "La liberté de contracter serait illusoire quand les parties sont en situation très inégale."
    ],
    exemples: [
      ["930-1262", "L’Islande médiévale", "Islande", "Une société sans roi ni administration, où la justice repose sur des chefs choisis et des arbitrages privés : un cas d’école cher aux anarcho-capitalistes."],
      ["1961-1971", "Le « non-interventionnisme positif »", "Hong Kong", "Le secrétaire aux Finances John Cowperthwaite maintient impôts très bas et libre-échange total, refusant jusqu’à la collecte de statistiques économiques."],
      ["Depuis 2003", "Le Free State Project", "New Hampshire, États-Unis", "Des milliers de libertariens s’installent dans un même petit État pour peser sur sa politique."],
      ["Depuis décembre 2023", "La présidence de Javier Milei", "Argentine", "Coupes massives dans la dépense publique et dérégulation : la première expérience de gouvernement menée par un libertarien déclaré."]
    ],
    partis: {
      note: "Aucun État n’a jamais appliqué intégralement le programme libertarien : ses partisans citent des expériences partielles.",
      hier: [
        ["Démocratie libérale", "France", "1997-2002", "Parti d’Alain Madelin, le plus proche des idées libérales classiques dans la France récente."],
        ["Parti libertarien des années 1970", "États-Unis", "1971-1980", "Né de l’opposition à la conscription et au contrôle des prix ; il dépasse 900 000 voix à la présidentielle de 1980."]
      ],
      aujourdhui: [
        ["Parti libertarien", "États-Unis", "depuis 1971", "Troisième parti du pays, loin derrière les deux grands."],
        ["La Libertad Avanza", "Argentine", "depuis 2021", "La coalition de Javier Milei."],
        ["ACT", "Nouvelle-Zélande", "depuis 1994", "Parti libéral classique : baisse des impôts et réduction de l’État."],
        ["Parti libertarien du Canada", "Canada", "depuis 1973", "Petit parti fédéral."]
      ]
    },
    proches: ["liberalisme", "anarchisme"],
    quiz: [
      { q: "Qu’énonce le principe de non-agression ?", r: ["Nul ne peut initier la force contre la personne ou les biens d’autrui", "Aucun pays ne doit posséder d’armée", "Les grèves sont interdites", "L’État a le monopole de la violence légitime"], e: "C’est l’axiome central du libertarianisme : seule la légitime défense justifie l’usage de la force." },
      { q: "Quelle est la différence entre minarchisme et anarcho-capitalisme ?", r: ["Le premier garde un État limité à la sécurité et à la justice, le second supprime l’État", "Le premier est de gauche, le second de droite", "Le premier refuse la propriété privée", "Il n’y en a aucune"], e: "Nozick est minarchiste ; Rothbard et David Friedman sont anarcho-capitalistes." },
      { q: "À quel philosophe Robert Nozick répond-il dans « Anarchie, État et utopie » ?", r: ["John Rawls", "Karl Marx", "Edmund Burke", "Jean-Jacques Rousseau"], e: "Contre la redistribution défendue par Rawls, Nozick soutient que seule compte la justice des acquisitions et des échanges." },
      { q: "En quoi le libertarianisme se distingue-t-il du conservatisme ?", r: ["Il défend aussi la liberté individuelle en matière de mœurs", "Il veut augmenter les impôts", "Il défend la religion d’État", "Il rejette la propriété privée"], e: "Les libertariens s’opposent à l’État aussi bien quand il régule l’économie que quand il régule la vie privée." }
    ]
  },

  {
    id: "democratie-chretienne",
    nom: "Démocratie chrétienne",
    couleur: "#3b9ed8",
    naissance: "Fin du XIXe siècle",
    accroche: "La dignité de la personne, entre individualisme libéral et collectivisme.",
    resume: "La démocratie chrétienne naît de la doctrine sociale de l’Église catholique face à la question ouvrière. Elle cherche une voie entre libéralisme et socialisme : économie de marché tempérée par la solidarité, rôle central de la famille et des corps intermédiaires. Après 1945, elle domine la vie politique en Allemagne et en Italie et porte la construction européenne.",
    idees: [
      ["Dignité de la personne", "L’être humain n’est ni un individu isolé ni un rouage de la collectivité : c’est une personne, qui s’épanouit en relation avec les autres."],
      ["Subsidiarité", "Une autorité supérieure ne doit pas faire ce qu’un échelon plus proche des gens peut accomplir lui-même."],
      ["Solidarité et bien commun", "La société doit protéger les plus faibles ; la propriété a une fonction sociale."],
      ["Économie sociale de marché", "Liberté d’entreprendre et concurrence, corrigées par la protection sociale."],
      ["Construction européenne", "La réconciliation et l’union des nations d’Europe garantissent la paix."]
    ],
    histoire: [
      [1891, "Encyclique « Rerum novarum »", "Le pape Léon XIII dénonce la misère ouvrière et défend salaire juste et syndicats, tout en rejetant le socialisme."],
      [1919, "Luigi Sturzo fonde le Parti populaire italien", "Premier grand parti démocrate-chrétien de masse."],
      [1931, "Encyclique « Quadragesimo anno »", "Pie XI y formule le principe de subsidiarité."],
      [1936, "Parution d’« Humanisme intégral »", "Jacques Maritain y réconcilie foi chrétienne, démocratie et pluralisme."],
      [1944, "Fondation du MRP en France", "Issu de la Résistance, il est l’un des trois grands partis de la IVe République à ses débuts."],
      [1949, "Konrad Adenauer devient chancelier", "La CDU dirige l’Allemagne fédérale jusqu’en 1969 et met en œuvre l’économie sociale de marché."],
      [1950, "Déclaration Schuman", "Elle propose de mettre en commun le charbon et l’acier français et allemands : c’est l’acte de naissance de l’Europe communautaire."],
      [1976, "Fondation du Parti populaire européen", "Il rassemble les partis démocrates-chrétiens du continent."]
    ],
    figures: [
      ["Léon XIII", "1810-1903", "Pape de 1878 à 1903, initiateur de la doctrine sociale de l’Église."],
      ["Luigi Sturzo", "1871-1959", "Prêtre sicilien, fondateur du premier parti de masse d’inspiration chrétienne en Italie, exilé sous Mussolini."],
      ["Konrad Adenauer", "1876-1967", "Premier chancelier de l’Allemagne fédérale, artisan de l’ancrage à l’Ouest et de la réconciliation franco-allemande."],
      ["Alcide De Gasperi", "1881-1954", "Président du Conseil italien de 1945 à 1953, l’un des « pères de l’Europe »."],
      ["Jacques Maritain", "1882-1973", "Philosophe thomiste français, inspirateur de la Déclaration universelle des droits de l’homme."],
      ["Robert Schuman", "1886-1963", "Ministre français des Affaires étrangères, auteur de la déclaration du 9 mai 1950."],
      ["Emmanuel Mounier", "1905-1950", "Philosophe français, fondateur de la revue « Esprit » et du personnalisme."],
      ["Angela Merkel", "née en 1954", "Chancelière allemande de 2005 à 2021, issue de la CDU."]
    ],
    oeuvres: [
      ["Rerum novarum", "Léon XIII", 1891],
      ["Humanisme intégral", "Jacques Maritain", 1936],
      ["Manifeste au service du personnalisme", "Emmanuel Mounier", 1936],
      ["Christianisme et démocratie", "Jacques Maritain", 1943]
    ],
    courants: [
      ["Catholicisme social", "Mouvement du XIXe siècle qui veut répondre chrétiennement à la question ouvrière."],
      ["Personnalisme", "Philosophie de Mounier et Maritain : la personne, ni individu atomisé ni élément de la masse."],
      ["Christianisme social protestant", "Équivalent protestant, influent en Allemagne, aux Pays-Bas et en Scandinavie."],
      ["Aile sociale et aile conservatrice", "Les partis démocrates-chrétiens réunissent des syndicalistes chrétiens comme des conservateurs."],
      ["Popularisme", "Doctrine de Sturzo : un parti inspiré par le christianisme mais indépendant de l’Église et ouvert à tous."],
      ["Distributisme", "Chesterton et Belloc : répartir largement la propriété plutôt que la concentrer ou la collectiviser."],
      ["Christianisme de gauche", "Du Sillon de Marc Sangnier aux chrétiens engagés dans le syndicalisme et le socialisme."]
    ],
    critiques: [
      "Les défenseurs d’une laïcité stricte contestent qu’une référence religieuse inspire un programme politique.",
      "À gauche, on lui reproche son conservatisme sur les questions de famille et de mœurs.",
      "Avec la sécularisation, ces partis sont accusés d’avoir perdu leur identité pour devenir de simples partis de centre droit."
    ],
    exemples: [
      ["1949-1963", "L’Allemagne d’Adenauer", "Allemagne de l’Ouest", "Reconstruction, économie sociale de marché, ancrage à l’Ouest et réconciliation avec la France."],
      ["1946-1992", "L’Italie de la Démocratie chrétienne", "Italie", "Le parti participe à tous les gouvernements pendant près d’un demi-siècle, avant de sombrer dans les scandales de corruption."],
      ["1951", "La Communauté européenne du charbon et de l’acier", "Europe des Six", "Portée par Schuman, Adenauer et De Gasperi, tous trois démocrates-chrétiens, elle amorce la construction européenne."],
      ["1964-1970", "La « révolution dans la liberté »", "Chili", "Le président Eduardo Frei mène réforme agraire et politique sociale en se voulant une alternative au marxisme."]
    ],
    partis: {
      hier: [
        ["Zentrum", "Allemagne", "1870-1933", "Parti des catholiques allemands, pilier de la république de Weimar."],
        ["Mouvement républicain populaire (MRP)", "France", "1944-1967", "Le parti de Robert Schuman et de Georges Bidault."],
        ["Democrazia Cristiana", "Italie", "1943-1994", "Parti dominant de l’Italie d’après-guerre."]
      ],
      aujourdhui: [
        ["CDU/CSU", "Allemagne", "depuis 1945", "L’Union chrétienne-démocrate et son alliée bavaroise."],
        ["Appel chrétien-démocrate (CDA)", "Pays-Bas", "depuis 1980", "Il réunit catholiques et protestants."],
        ["Parti populaire autrichien (ÖVP)", "Autriche", "depuis 1945", "Parti chrétien-démocrate et conservateur."],
        ["Parti populaire européen (PPE)", "Europe", "depuis 1976", "Le plus grand groupe du Parlement européen."]
      ]
    },
    proches: ["conservatisme", "liberalisme", "social-democratie"],
    quiz: [
      { q: "Que signifie le principe de subsidiarité ?", r: ["Une décision doit être prise à l’échelon le plus proche possible des personnes concernées", "L’État doit subventionner toutes les entreprises", "L’Église doit diriger l’État", "Les riches doivent aider les pauvres par la charité"], e: "Formulé en 1931, ce principe figure aujourd’hui dans les traités de l’Union européenne." },
      { q: "Quelle encyclique de 1891 fonde la doctrine sociale de l’Église ?", r: ["Rerum novarum", "Laudato si’", "Humanae vitae", "Quanta cura"], e: "Léon XIII y traite « des choses nouvelles » : la condition ouvrière née de l’industrialisation." },
      { q: "Que propose la déclaration Schuman du 9 mai 1950 ?", r: ["Mettre en commun le charbon et l’acier de la France et de l’Allemagne", "Créer une monnaie unique", "Fonder l’OTAN", "Supprimer les frontières en Europe"], e: "Elle débouche en 1951 sur la Communauté européenne du charbon et de l’acier (CECA)." },
      { q: "Qu’est-ce que l’« économie sociale de marché » ?", r: ["Un marché concurrentiel accompagné d’une forte protection sociale", "Une économie entièrement planifiée", "Un marché sans aucune règle", "Une économie fondée sur le troc"], e: "Mise en œuvre en Allemagne de l’Ouest après 1948, elle combine concurrence, monnaie stable et État social." }
    ]
  },
  {
    id: "republicanisme",
    nom: "Républicanisme",
    couleur: "#a3324a",
    naissance: "Antiquité, renouveau au XVIIIe siècle",
    accroche: "La chose publique avant les intérêts particuliers : on est libre quand on se gouverne soi-même.",
    resume: "Le républicanisme tient que le pouvoir est l’affaire de tous (res publica, la « chose publique ») et non la propriété d’un roi ou d’une caste. Être libre, ce n’est pas seulement être laissé tranquille : c’est ne dépendre du bon vouloir de personne et participer à la loi commune. En France, il a pris une forme particulière : souveraineté du peuple, État unitaire, école publique et laïcité.",
    idees: [
      ["Souveraineté du peuple", "La loi est légitime parce qu’elle exprime la volonté des citoyens et non celle d’un monarque."],
      ["Liberté comme non-domination", "Être libre, c’est ne pas vivre à la merci du pouvoir arbitraire d’autrui, même bienveillant."],
      ["Intérêt général et vertu civique", "La république suppose des citoyens capables de faire passer le bien commun avant leur intérêt propre."],
      ["Laïcité", "L’État ne reconnaît aucune religion et garantit la liberté de conscience de chacun."],
      ["Égalité par l’école", "L’instruction publique forme des citoyens éclairés et ouvre les places au mérite plutôt qu’à la naissance."]
    ],
    histoire: [
      [1762, "Parution de « Du contrat social »", "Rousseau y fonde l’autorité politique sur la volonté générale du peuple souverain."],
      [1792, "Proclamation de la Première République", "La monarchie est abolie en France le 21 septembre."],
      [1848, "Deuxième République", "Elle instaure le suffrage universel masculin et abolit l’esclavage dans les colonies."],
      [1870, "Proclamation de la Troisième République", "Après la défaite de Sedan, la république s’installe pour soixante-dix ans."],
      [1882, "Lois Ferry sur l’école", "L’enseignement primaire devient gratuit, obligatoire et laïc."],
      [1905, "Loi de séparation des Églises et de l’État", "La République « ne reconnaît, ne salarie ni ne subventionne aucun culte »."],
      [1958, "Constitution de la Cinquième République", "Son article premier définit la France comme une « République indivisible, laïque, démocratique et sociale »."],
      [1997, "Parution de « Républicanisme » de Philip Pettit", "L’ouvrage relance la théorie républicaine dans la philosophie contemporaine."]
    ],
    exemples: [
      ["509-27 av. J.-C.", "La République romaine", "Rome", "Magistrats élus pour un an, Sénat et assemblées du peuple : le modèle auquel se réfèrent tous les républicains ultérieurs."],
      ["697-1797", "La Sérénissime", "Venise", "Une république aristocratique millénaire, où le doge est élu et étroitement surveillé."],
      ["1792-1804", "La Première République", "France", "Elle invente la citoyenneté moderne et la levée en masse, mais bascule dans la Terreur puis dans le pouvoir personnel de Bonaparte."],
      ["1870-1940", "La Troisième République", "France", "École publique, libertés de la presse et d’association, séparation des Églises et de l’État : le « modèle républicain » français s’y fixe."]
    ],
    figures: [
      ["Nicolas Machiavel", "1469-1527", "Penseur florentin, auteur du « Prince », qui célèbre aussi les républiques libres de l’Antiquité."],
      ["Jean-Jacques Rousseau", "1712-1778", "Philosophe genevois, théoricien de la volonté générale et de la souveraineté du peuple."],
      ["Nicolas de Condorcet", "1743-1794", "Mathématicien et député, défenseur de l’instruction publique et du droit de vote des femmes, mort sous la Terreur."],
      ["Maximilien Robespierre", "1758-1794", "Chef de file des Jacobins, figure de la « vertu » révolutionnaire et de la Terreur."],
      ["Jules Ferry", "1832-1893", "Ministre de l’Instruction publique, père de l’école gratuite, laïque et obligatoire, et promoteur de l’expansion coloniale."],
      ["Léon Gambetta", "1838-1882", "Tribun qui proclame la République le 4 septembre 1870 et la fait accepter dans les campagnes."],
      ["Georges Clemenceau", "1841-1929", "Radical surnommé « le Tigre », dreyfusard, chef du gouvernement pendant la Grande Guerre."],
      ["Philip Pettit", "né en 1945", "Philosophe irlandais qui définit la liberté comme non-domination."]
    ],
    oeuvres: [
      ["Discours sur la première décade de Tite-Live", "Nicolas Machiavel", 1531],
      ["Du contrat social", "Jean-Jacques Rousseau", 1762],
      ["Cinq mémoires sur l’instruction publique", "Nicolas de Condorcet", 1791],
      ["Le Moment machiavélien (analyse)", "John Pocock", 1975],
      ["Républicanisme", "Philip Pettit", 1997]
    ],
    courants: [
      ["Républicanisme classique", "De Rome à Florence : régime mixte, vertu civique, crainte de la corruption."],
      ["Jacobinisme", "République une et indivisible, État centralisé, primat de la volonté nationale."],
      ["Radicalisme", "Sous la IIIe République : laïcité, école, défense des « petits » contre les « gros »."],
      ["Solidarisme", "Léon Bourgeois : chacun a une dette envers la société, ce qui justifie l’impôt et la protection sociale."],
      ["Républicanisme américain", "Les Pères fondateurs : équilibre des pouvoirs et méfiance envers les factions."],
      ["Néo-républicanisme", "Pettit et Skinner : la liberté comme absence de domination plutôt que simple absence d’entraves."]
    ],
    partis: {
      note: "En France, presque tous les partis se réclament aujourd’hui de la République ; ne figurent ici que ceux qui en ont fait le cœur de leur identité.",
      hier: [
        ["Club des jacobins", "France", "1789-1794", "Le principal club politique de la Révolution."],
        ["Union républicaine", "France", "1871-1885", "Le groupe de Gambetta, qui installe la IIIe République."],
        ["Mouvement des citoyens", "France", "1993-2003", "Fondé par Jean-Pierre Chevènement pour défendre une république sociale et souveraine."]
      ],
      aujourdhui: [
        ["Mouvement républicain et citoyen", "France", "depuis 2003", "Héritier du Mouvement des citoyens."],
        ["Parti radical de gauche", "France", "depuis 1972", "Branche de gauche de la vieille famille radicale."],
        ["Fianna Fáil", "Irlande", "depuis 1926", "Il se définit comme « le parti républicain », héritier du combat pour l’indépendance."]
      ]
    },
    critiques: [
      "On lui reproche un universalisme abstrait, qui proclame l’égalité des citoyens sans voir les discriminations réelles.",
      "La IIIe République a mené la colonisation au nom d’une « mission civilisatrice » contraire à ses propres principes.",
      "Les libéraux craignent qu’au nom de la volonté générale, la majorité n’écrase les droits des individus et des minorités."
    ],
    proches: ["liberalisme", "gaullisme", "socialisme"],
    quiz: [
      { q: "Que signifie « res publica », d’où vient le mot république ?", r: ["La chose publique", "Le pouvoir du roi", "La loi du plus fort", "Le peuple en armes"], e: "La république est le régime où le pouvoir est l’affaire de tous et non le bien d’un seul." },
      { q: "Comment le néo-républicanisme de Philip Pettit définit-il la liberté ?", r: ["Comme l’absence de domination", "Comme l’absence de toute loi", "Comme l’obéissance au chef", "Comme la richesse matérielle"], e: "On peut être laissé tranquille par un maître bienveillant et rester dominé : la liberté suppose de ne dépendre de l’arbitraire de personne." },
      { q: "Que pose la loi française de 1905 ?", r: ["La séparation des Églises et de l’État", "L’école gratuite et obligatoire", "Le suffrage universel", "La liberté de la presse"], e: "La République garantit la liberté de conscience et ne reconnaît ni ne finance aucun culte." },
      { q: "Qu’appelle-t-on « volonté générale » chez Rousseau ?", r: ["La volonté du corps des citoyens visant l’intérêt commun", "La somme des désirs de chacun", "La décision du gouvernement", "L’opinion des plus instruits"], e: "Rousseau la distingue de la « volonté de tous », simple addition d’intérêts particuliers." }
    ]
  },

  {
    id: "populisme",
    nom: "Populisme",
    couleur: "#e67e00",
    naissance: "Fin du XIXe siècle",
    accroche: "Le peuple contre les élites.",
    resume: "Le populisme est moins une doctrine complète qu’une manière de concevoir la politique : il oppose un « peuple » vertueux à une « élite » corrompue et affirme que la politique doit exprimer directement la volonté populaire. Parce que cette idée est « mince », elle se combine avec d’autres : il existe des populismes de gauche comme de droite. Le mot sert souvent d’accusation ; peu de mouvements le revendiquent.",
    idees: [
      ["Le peuple contre l’élite", "La société est coupée en deux camps : les gens ordinaires et une minorité de privilégiés qui les trahit."],
      ["Volonté populaire directe", "Le référendum et le lien direct avec le dirigeant valent mieux que les médiations parlementaires."],
      ["Leader charismatique", "Un chef incarne le peuple et parle en son nom, par-dessus les partis."],
      ["Méfiance envers les intermédiaires", "Partis, médias, juges et experts sont soupçonnés de confisquer la démocratie."],
      ["Idéologie « mince »", "Sans programme économique propre, le populisme s’adosse au nationalisme, au socialisme ou au libéralisme."]
    ],
    histoire: [
      [1874, "« Marche vers le peuple » des narodniki", "De jeunes intellectuels russes partent dans les campagnes pour soulever la paysannerie."],
      [1889, "Apogée du boulangisme", "Le général Boulanger, élu triomphalement à Paris, semble en mesure de renverser la République."],
      [1892, "Fondation du Parti populiste américain", "Le People’s Party défend les fermiers endettés contre les banques et les compagnies de chemin de fer."],
      [1946, "Juan Perón est élu président de l’Argentine", "Il s’appuie sur les ouvriers et les syndicats, les « sans-chemise »."],
      [1956, "Percée électorale du poujadisme", "Le mouvement des petits commerçants en révolte contre l’impôt fait élire 52 députés."],
      [1998, "Hugo Chávez est élu président du Venezuela", "Il lance la « révolution bolivarienne » au nom des pauvres contre l’oligarchie."],
      [2005, "Parution de « La Raison populiste »", "Ernesto Laclau y réhabilite le populisme comme logique normale de la politique."],
      [2016, "Vote du Brexit et élection de Donald Trump", "Deux victoires attribuées à la révolte des électeurs contre les élites établies."]
    ],
    exemples: [
      ["1946-1955", "L’Argentine de Perón", "Argentine", "Hausses de salaires, droits sociaux, nationalisations et culte du couple présidentiel, sur fond de mise au pas de l’opposition."],
      ["1999-2013", "Le Venezuela de Chávez", "Venezuela", "Programmes sociaux financés par le pétrole et référendums répétés, mais concentration du pouvoir et effondrement économique ultérieur."],
      ["Depuis 2010", "La Hongrie de Viktor Orbán", "Hongrie", "Un pouvoir qui revendique la « démocratie illibérale » et réduit l’indépendance de la justice et des médias."],
      ["2018-2019", "Le gouvernement Mouvement 5 étoiles-Ligue", "Italie", "Une coalition entre un populisme « antisystème » et un populisme national."]
    ],
    figures: [
      ["Georges Boulanger", "1837-1891", "Général français dont la popularité fit trembler la IIIe République à la fin des années 1880."],
      ["William Jennings Bryan", "1860-1925", "Orateur américain, trois fois candidat à la présidence, défenseur des fermiers contre les banquiers de l’Est."],
      ["Juan Perón", "1895-1974", "Militaire, trois fois président de l’Argentine, porté par les ouvriers et les syndicats."],
      ["Pierre Poujade", "1920-2003", "Papetier du Lot, meneur de la révolte des petits commerçants contre le fisc dans les années 1950."],
      ["Ernesto Laclau", "1935-2014", "Philosophe argentin pour qui construire un « peuple » est le cœur de toute politique."],
      ["Chantal Mouffe", "née en 1943", "Philosophe belge, théoricienne d’un « populisme de gauche »."],
      ["Donald Trump", "né en 1946", "Homme d’affaires, élu président des États-Unis en 2016 puis en 2024 sur le slogan « Make America Great Again »."],
      ["Hugo Chávez", "1954-2013", "Officier, président du Venezuela de 1999 à sa mort, promoteur de la « révolution bolivarienne »."]
    ],
    oeuvres: [
      ["La Raison populiste", "Ernesto Laclau", 2005],
      ["Qu’est-ce que le populisme ? (analyse)", "Jan-Werner Müller", 2016],
      ["Brève introduction au populisme (analyse)", "Cas Mudde et Cristóbal Rovira Kaltwasser", 2017],
      ["Pour un populisme de gauche", "Chantal Mouffe", 2018],
      ["Le Siècle du populisme (analyse)", "Pierre Rosanvallon", 2020]
    ],
    courants: [
      ["Populisme agrarien", "Les origines : narodniki russes et People’s Party américain, au nom des paysans."],
      ["Populisme latino-américain", "Un chef, des syndicats et la redistribution : Perón en Argentine, Vargas au Brésil."],
      ["National-populisme", "À droite : le peuple est défini par la nation, contre les élites et l’immigration."],
      ["Populisme de gauche", "Le peuple contre l’oligarchie financière : Podemos, Syriza."],
      ["Césarisme", "Le lien direct entre un chef et le peuple, ratifié par plébiscite, sur le modèle des deux Napoléon."],
      ["Techno-populisme", "La démocratie directe par les outils numériques, comme au Mouvement 5 étoiles."]
    ],
    partis: {
      note: "« Populiste » est rarement une étiquette revendiquée : ce sont surtout les politologues et les adversaires qui l’emploient. En France, le Rassemblement national et La France insoumise sont souvent ainsi qualifiés.",
      hier: [
        ["People’s Party", "États-Unis", "1892-1908", "Le premier parti à s’être appelé « populiste »."],
        ["Mouvement boulangiste", "France", "1886-1891", "Coalition hétéroclite de mécontents autour du général Boulanger."],
        ["Union de défense des commerçants et artisans", "France", "1953-1962", "Le mouvement de Pierre Poujade."]
      ],
      aujourdhui: [
        ["Parti justicialiste", "Argentine", "depuis 1946", "Le parti péroniste, toujours central dans la vie politique argentine."],
        ["Mouvement 5 étoiles", "Italie", "depuis 2009", "Né d’un blog, contre la « caste » politique."],
        ["Podemos", "Espagne", "depuis 2014", "Issu du mouvement des Indignés, inspiré par Laclau et Mouffe."],
        ["Fidesz", "Hongrie", "depuis 1988", "Parti de Viktor Orbán, d’abord libéral, devenu national-populiste."]
      ]
    },
    critiques: [
      "Pour Jan-Werner Müller, le danger du populisme est de prétendre représenter seul le « vrai » peuple, ce qui nie le pluralisme.",
      "Le terme est jugé flou et polémique : il servirait à disqualifier toute critique des élites.",
      "Ses défenseurs y voient au contraire le symptôme d’une démocratie où une partie des citoyens ne se sent plus représentée."
    ],
    proches: ["nationalisme", "conservatisme", "socialisme", "fascisme", "gaullisme"],
    quiz: [
      { q: "Quelle opposition structure le discours populiste ?", r: ["Le peuple contre les élites", "Les villes contre les campagnes", "Les jeunes contre les vieux", "Les croyants contre les athées"], e: "Selon le politologue Cas Mudde, le populisme oppose un « peuple pur » à une « élite corrompue »." },
      { q: "Pourquoi dit-on du populisme qu’il est une idéologie « mince » ?", r: ["Parce qu’il doit se combiner avec une autre idéologie, de gauche ou de droite", "Parce qu’il a peu de partisans", "Parce qu’il n’existe que depuis dix ans", "Parce qu’il refuse de participer aux élections"], e: "Il n’a pas de programme économique ou social propre : il s’adosse au nationalisme, au socialisme, etc." },
      { q: "Selon Jan-Werner Müller, quel est le trait dangereux du populisme ?", r: ["Prétendre être le seul représentant légitime du peuple", "Vouloir baisser les impôts", "Organiser des élections", "Critiquer le gouvernement"], e: "Si un seul mouvement incarne le « vrai » peuple, ses opposants deviennent illégitimes." },
      { q: "Quel mouvement a porté le premier le nom de « populiste » aux États-Unis ?", r: ["Le People’s Party des années 1890", "Le Parti démocrate de Jefferson", "Le Tea Party", "Le Parti communiste américain"], e: "Il défendait les fermiers de l’Ouest et du Sud contre les banques et les compagnies ferroviaires." }
    ]
  },

  {
    id: "gaullisme",
    nom: "Gaullisme",
    couleur: "#6b7a2a",
    naissance: "1940",
    accroche: "« Une certaine idée de la France » : indépendance nationale et État fort, au-dessus des partis.",
    resume: "Né du refus de la défaite en 1940, le gaullisme est d’abord une pratique : celle du général de Gaulle. Il repose sur quelques convictions durables : la France doit rester indépendante et tenir son rang, l’État doit être dirigé par un exécutif fort tirant sa légitimité du peuple, et le pays doit se rassembler par-delà la gauche et la droite. Il prolonge une tradition française plus ancienne, souvent rapprochée du bonapartisme.",
    idees: [
      ["Indépendance nationale", "La France ne doit dépendre d’aucun bloc : dissuasion nucléaire propre, diplomatie autonome."],
      ["Exécutif fort", "Un président « clé de voûte » des institutions, garant de la continuité de l’État."],
      ["Rassemblement", "Dépasser le « régime des partis » et le clivage entre la gauche et la droite."],
      ["Lien direct avec le peuple", "Le référendum et l’élection du président au suffrage universel fondent la légitimité."],
      ["Participation", "Associer les salariés aux résultats et aux décisions de l’entreprise, entre capitalisme et collectivisme."],
      ["Europe des nations", "Une coopération entre États souverains plutôt qu’une fédération."]
    ],
    histoire: [
      [1940, "Appel du 18 juin", "Depuis Londres, de Gaulle refuse l’armistice et appelle à poursuivre le combat."],
      [1944, "Libération et gouvernement provisoire", "De Gaulle rétablit la République et l’autorité de l’État."],
      [1946, "Discours de Bayeux", "Il y expose son projet d’institutions dominées par un chef de l’État au-dessus des partis."],
      [1947, "Fondation du RPF", "Le Rassemblement du peuple français veut réformer la IVe République."],
      [1958, "Retour au pouvoir et Ve République", "En pleine crise algérienne, de Gaulle fait adopter une nouvelle Constitution."],
      [1962, "Référendum sur l’élection du président au suffrage universel", "Le chef de l’État tiendra désormais son pouvoir directement des électeurs."],
      [1966, "Retrait du commandement intégré de l’OTAN", "La France reste alliée des États-Unis mais reprend le contrôle de ses forces."],
      [1969, "Démission du général de Gaulle", "Désavoué par un référendum sur les régions et le Sénat, il quitte aussitôt le pouvoir."],
      [1976, "Jacques Chirac fonde le RPR", "Le néo-gaullisme s’organise en parti de conquête du pouvoir."]
    ],
    exemples: [
      ["1940-1944", "La France libre", "Londres, Alger, empire", "Un gouvernement en exil et une armée qui maintiennent la France parmi les vainqueurs."],
      ["1944-1946", "Le gouvernement provisoire", "France", "Droit de vote des femmes, Sécurité sociale, nationalisations : un programme mené avec toutes les forces de la Résistance."],
      ["1958-1969", "La République gaullienne", "France", "Fin de la guerre d’Algérie, force de frappe nucléaire, planification et grands projets industriels."],
      ["2003", "Le refus de la guerre d’Irak", "France", "Jacques Chirac s’oppose à l’intervention américaine : un geste souvent présenté comme le dernier acte gaullien."]
    ],
    figures: [
      ["Charles de Gaulle", "1890-1970", "Général, chef de la France libre, fondateur de la Ve République et président de 1959 à 1969."],
      ["André Malraux", "1901-1976", "Écrivain, ministre des Affaires culturelles de 1959 à 1969."],
      ["René Capitant", "1901-1970", "Juriste, théoricien de la participation et figure des gaullistes de gauche."],
      ["Georges Pompidou", "1911-1974", "Premier ministre puis président de 1969 à 1974, artisan de la modernisation industrielle."],
      ["Michel Debré", "1912-1996", "Principal rédacteur de la Constitution de 1958 et premier Premier ministre de la Ve République."],
      ["Jacques Chaban-Delmas", "1915-2000", "Résistant, maire de Bordeaux, Premier ministre porteur du projet de « nouvelle société »."],
      ["Jacques Chirac", "1932-2019", "Fondateur du RPR, président de 1995 à 2007."],
      ["Philippe Séguin", "1943-2010", "Voix du « gaullisme social », chef de file du non au traité de Maastricht en 1992."]
    ],
    oeuvres: [
      ["Le Fil de l’épée", "Charles de Gaulle", 1932],
      ["Vers l’armée de métier", "Charles de Gaulle", 1934],
      ["Mémoires de guerre", "Charles de Gaulle", 1954],
      ["Les Droites en France (analyse)", "René Rémond", 1954],
      ["Mémoires d’espoir", "Charles de Gaulle", 1970]
    ],
    courants: [
      ["Gaullisme de guerre", "Celui de la France libre : refus de la défaite et légitimité de la Résistance."],
      ["Gaullisme social", "Ou gaullisme de gauche : participation, rôle de l’État, justice sociale (Capitant, Séguin)."],
      ["Pompidolisme", "Version plus conservatrice et industrialiste, attentive aux milieux d’affaires."],
      ["Néo-gaullisme", "Le RPR de Chirac, qui se rapproche peu à peu du libéralisme et de l’Europe."],
      ["Souverainisme gaulliste", "Au nom de l’indépendance nationale, refus de Maastricht et de l’Europe fédérale."],
      ["Héritage bonapartiste", "Selon l’historien René Rémond : autorité de l’exécutif et appel direct au peuple."]
    ],
    partis: {
      note: "Aujourd’hui, des responsables de presque tous les bords se réclament de De Gaulle ; aucun parti n’est reconnu comme son unique héritier.",
      hier: [
        ["Rassemblement du peuple français (RPF)", "France", "1947-1955", "Fondé par de Gaulle lui-même."],
        ["Union pour la nouvelle République (UNR)", "France", "1958-1967", "Le parti qui soutient de Gaulle au début de la Ve République."],
        ["Rassemblement pour la République (RPR)", "France", "1976-2002", "Le parti de Jacques Chirac, fondu ensuite dans l’UMP."]
      ],
      aujourdhui: [
        ["Debout la France", "France", "depuis 2008", "Parti de Nicolas Dupont-Aignan, sur une ligne souverainiste."],
        ["Fondation Charles-de-Gaulle", "France", "depuis 1971", "Elle n’est pas un parti : elle entretient la mémoire et l’étude de l’œuvre du général."]
      ]
    },
    critiques: [
      "François Mitterrand y voyait un « coup d’État permanent » : un pouvoir personnel échappant au contrôle du Parlement.",
      "Doctrine ou pragmatisme d’un seul homme ? Beaucoup doutent que le gaullisme ait survécu à son fondateur.",
      "Mai 68 lui reproche son autoritarisme et son conservatisme moral ; les partisans de l’Algérie française, d’avoir abandonné celle-ci."
    ],
    proches: ["conservatisme", "nationalisme", "republicanisme", "populisme", "democratie-chretienne"],
    quiz: [
      { q: "Quelle Europe le général de Gaulle défend-il ?", r: ["Une Europe des nations, coopération entre États souverains", "Une fédération dotée d’un gouvernement européen", "Une Europe placée sous direction américaine", "Aucune coopération européenne"], e: "Il accepte le Marché commun mais refuse tout transfert de souveraineté à une autorité supranationale." },
      { q: "Que désigne la « participation » dans le gaullisme ?", r: ["L’association des salariés aux bénéfices et à la marche de l’entreprise", "L’obligation de voter", "La participation de la France à l’OTAN", "L’entrée des communistes au gouvernement"], e: "De Gaulle y voyait une troisième voie entre capitalisme et collectivisme." },
      { q: "Que dénonce de Gaulle sous le nom de « régime des partis » ?", r: ["Des gouvernements faibles, soumis aux combinaisons parlementaires", "L’interdiction des partis politiques", "Le parti unique", "Le financement public des campagnes"], e: "C’est sa critique des IIIe et IVe Républiques, exposée dès le discours de Bayeux en 1946." },
      { q: "Pourquoi de Gaulle quitte-t-il le pouvoir en 1969 ?", r: ["Il est désavoué par un référendum", "Il perd l’élection présidentielle", "Il est renversé par l’armée", "Son mandat arrive à son terme"], e: "Ayant lié son sort au résultat, il démissionne dès la victoire du non, fidèle à sa conception du lien direct avec le peuple." }
    ]
  },

  {
    id: "anticolonialisme",
    nom: "Anticolonialisme",
    couleur: "#b5651d",
    naissance: "Début du XXe siècle",
    accroche: "Aucun peuple n’a le droit d’en dominer un autre.",
    resume: "L’anticolonialisme rassemble les pensées et les luttes dirigées contre la domination des empires européens sur l’Afrique, l’Asie et les Amériques. Il réclame l’indépendance politique, mais analyse aussi ce que la colonisation fait aux esprits : racisme, mépris des cultures, dépendance économique. Après les indépendances, il se prolonge dans le tiers-mondisme et les études postcoloniales.",
    idees: [
      ["Autodétermination", "Chaque peuple a le droit de choisir librement son statut politique."],
      ["Critique du racisme colonial", "La colonisation repose sur une hiérarchie des races qui déshumanise le colonisé et avilit le colonisateur."],
      ["Décoloniser les esprits", "Se libérer suppose de retrouver l’estime de sa culture, de sa langue et de son histoire."],
      ["Solidarité des peuples dominés", "Les pays d’Afrique, d’Asie et d’Amérique latine ont des intérêts communs face aux grandes puissances."],
      ["Néocolonialisme", "L’indépendance formelle peut masquer une dépendance économique et militaire maintenue."]
    ],
    histoire: [
      [1804, "Indépendance d’Haïti", "D’anciens esclaves fondent la première république noire après avoir vaincu l’armée de Napoléon."],
      [1900, "Première Conférence panafricaine à Londres", "Des intellectuels noirs d’Afrique, des Antilles et des États-Unis réclament des droits pour les peuples colonisés."],
      [1945, "Congrès panafricain de Manchester", "Nkrumah, Kenyatta et Du Bois y exigent l’indépendance immédiate de l’Afrique."],
      [1954, "Bataille de Diên Biên Phu", "La défaite française en Indochine montre qu’une armée coloniale peut être vaincue."],
      [1955, "Conférence de Bandung", "Vingt-neuf pays d’Asie et d’Afrique affirment leur refus du colonialisme et de l’alignement sur un bloc."],
      [1957, "Indépendance du Ghana", "Premier pays d’Afrique subsaharienne à se libérer de la tutelle coloniale."],
      [1962, "Indépendance de l’Algérie", "Elle met fin à huit ans de guerre et à cent trente-deux ans de présence française."],
      [1994, "Fin de l’apartheid", "Nelson Mandela est élu président de l’Afrique du Sud lors des premières élections ouvertes à tous."]
    ],
    exemples: [
      ["1791-1804", "La révolution haïtienne", "Saint-Domingue", "La seule révolte d’esclaves de l’histoire à avoir fondé un État."],
      ["1954-1962", "La guerre d’Algérie", "Algérie", "Une indépendance arrachée par les armes, au prix de plusieurs centaines de milliers de morts."],
      ["1957-1966", "Le Ghana de Nkrumah", "Ghana", "Laboratoire du panafricanisme, qui dérive vers le parti unique avant d’être renversé par un coup d’État."],
      ["1948-1994", "La lutte contre l’apartheid", "Afrique du Sud", "Désobéissance civile, lutte armée, boycott international, puis transition négociée."]
    ],
    figures: [
      ["Toussaint Louverture", "1743-1803", "Ancien esclave, chef de la révolution de Saint-Domingue, mort prisonnier en France."],
      ["W. E. B. Du Bois", "1868-1963", "Sociologue afro-américain, père du panafricanisme."],
      ["Hô Chi Minh", "1890-1969", "Fondateur du Parti communiste indochinois, il proclame l’indépendance du Vietnam en 1945."],
      ["Kwame Nkrumah", "1909-1972", "Premier dirigeant du Ghana indépendant, champion de l’unité africaine."],
      ["Aimé Césaire", "1913-2008", "Poète et député martiniquais, cofondateur de la négritude."],
      ["Nelson Mandela", "1918-2013", "Emprisonné vingt-sept ans pour sa lutte contre l’apartheid, premier président noir d’Afrique du Sud."],
      ["Frantz Fanon", "1925-1961", "Psychiatre martiniquais engagé aux côtés des indépendantistes algériens, analyste de l’aliénation coloniale."],
      ["Patrice Lumumba", "1925-1961", "Premier chef du gouvernement du Congo indépendant, assassiné quelques mois après son arrivée au pouvoir."],
      ["Edward Said", "1935-2003", "Universitaire palestino-américain, fondateur des études postcoloniales."]
    ],
    oeuvres: [
      ["Discours sur le colonialisme", "Aimé Césaire", 1950],
      ["Peau noire, masques blancs", "Frantz Fanon", 1952],
      ["Portrait du colonisé", "Albert Memmi", 1957],
      ["Les Damnés de la terre", "Frantz Fanon", 1961],
      ["Le Néo-colonialisme, dernier stade de l’impérialisme", "Kwame Nkrumah", 1965],
      ["L’Orientalisme", "Edward Said", 1978]
    ],
    courants: [
      ["Panafricanisme", "Unité et solidarité des peuples africains et de leurs diasporas."],
      ["Négritude", "Césaire, Senghor, Damas : affirmer la valeur des cultures noires contre le mépris colonial."],
      ["Non-violence", "La désobéissance civile de masse, sur le modèle gandhien."],
      ["Tiers-mondisme", "Les pays pauvres comme nouvelle force d’émancipation mondiale."],
      ["Non-alignement", "Refus de choisir entre les blocs américain et soviétique (Nehru, Nasser, Tito)."],
      ["Panarabisme", "Unir les peuples arabes par-delà les frontières tracées par les empires."],
      ["Études postcoloniales", "Analyse de l’héritage colonial dans les savoirs, les représentations et les sociétés actuelles."]
    ],
    partis: {
      hier: [
        ["Viêt Minh", "Vietnam", "1941-1951", "Front de libération dirigé par les communistes, vainqueur de la France en 1954."],
        ["Convention People’s Party", "Ghana", "1949-1966", "Le parti de Nkrumah, qui conduit le pays à l’indépendance."],
        ["Rassemblement démocratique africain", "Afrique française", "fondé en 1946", "Fédération de partis des colonies françaises d’Afrique."]
      ],
      aujourdhui: [
        ["Congrès national africain (ANC)", "Afrique du Sud", "depuis 1912", "Mouvement de libération devenu parti de gouvernement en 1994."],
        ["SWAPO", "Namibie", "depuis 1960", "Mouvement de libération au pouvoir depuis l’indépendance de 1990."],
        ["FLNKS", "Nouvelle-Calédonie", "depuis 1984", "Front indépendantiste kanak."],
        ["Front Polisario", "Sahara occidental", "depuis 1973", "Il revendique l’indépendance du territoire."]
      ]
    },
    critiques: [
      "Beaucoup de régimes issus des indépendances sont devenus des dictatures à parti unique, au nom même de la libération.",
      "La question de la violence divise : légitime et libératrice pour Fanon, à éviter pour Gandhi ou Camus.",
      "Les universalistes reprochent à certaines pensées postcoloniales d’enfermer les individus dans des identités d’origine."
    ],
    proches: ["nationalisme", "socialisme", "communisme"],
    quiz: [
      { q: "Qu’affirment les pays réunis à Bandung en 1955 ?", r: ["Leur refus du colonialisme et de l’alignement sur un bloc", "Leur adhésion à l’OTAN", "La création d’une monnaie commune", "Leur soutien aux empires européens"], e: "Cette conférence afro-asiatique marque l’entrée du « tiers-monde » sur la scène internationale." },
      { q: "Qu’est-ce que le néocolonialisme dénoncé par Kwame Nkrumah ?", r: ["Une indépendance de façade qui laisse le pays sous dépendance économique", "Le retour des armées coloniales", "La colonisation de l’espace", "Une alliance entre pays africains"], e: "Pour Nkrumah, un État peut avoir drapeau et hymne tout en étant dirigé de l’extérieur par les capitaux étrangers." },
      { q: "Que désigne la négritude ?", r: ["Un mouvement affirmant la valeur des cultures et de l’identité noires", "Une politique de ségrégation", "Un parti politique sénégalais", "Une doctrine économique"], e: "Née dans le Paris des années 1930 autour de Césaire, Senghor et Damas, elle retourne un terme de mépris en fierté." },
      { q: "Que soutient Frantz Fanon dans « Les Damnés de la terre » ?", r: ["La colonisation est une violence, que le colonisé ne brise qu’en se soulevant", "Les colonies doivent rester liées à leur métropole", "Seule la négociation permet l’indépendance", "Le racisme disparaîtra de lui-même"], e: "Écrit pendant la guerre d’Algérie, le livre analyse aussi les pièges qui guettent les nouveaux États indépendants." }
    ]
  }
];
