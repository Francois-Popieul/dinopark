CREATE TABLE customer (
    id_customer INT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_customer)
);

CREATE TABLE reservation (
    id_reservation INT,
    order_date DATE NOT NULL,
    visit_date DATE NOT NULL,
    reservation_ticket INT NOT NULL,
    ticket_quantity INT,
    id_customer INT NOT NULL,
    PRIMARY KEY (id_reservation),
    FOREIGN KEY (id_customer) REFERENCES customer (id_customer)
);

CREATE TABLE ticket (
    id_ticket INT,
    icon CHAR(1) NOT NULL,
    ticket_type VARCHAR(20) NOT NULL,
    audience VARCHAR(25) NOT NULL,
    details VARCHAR(200) NOT NULL,
    ticket_price INT NOT NULL,
    PRIMARY KEY (id_ticket)
);

CREATE TABLE dinosaur (
    id_dinosaur INT,
    dinosaur_name VARCHAR(50) NOT NULL,
    diet VARCHAR(20) NOT NULL,
    dinosaur_short_description VARCHAR(500) NOT NULL,
    dinosaur_long_description VARCHAR(1000) NOT NULL,
    dino_illustration_path VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_dinosaur),
    UNIQUE (dinosaur_name),
    UNIQUE (dinosaur_short_description),
    UNIQUE (dinosaur_long_description),
    UNIQUE (dino_illustration_path)
);

CREATE TABLE attraction (
    id_attraction INT,
    attraction_name VARCHAR(30) NOT NULL,
    attraction_description VARCHAR(200) NOT NULL,
    attraction_illustration_path VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_attraction)
);

CREATE TABLE administrator (
    id_administrator INT,
    mail_address VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_administrator),
    UNIQUE (mail_address)
);

CREATE TABLE Inclure (
    id_reservation INT,
    id_ticket INT,
    PRIMARY KEY (id_reservation, id_ticket),
    FOREIGN KEY (id_reservation) REFERENCES reservation (id_reservation),
    FOREIGN KEY (id_ticket) REFERENCES ticket (id_ticket)
);

CREATE TABLE Animer (
    id_dinosaur INT,
    id_attraction INT,
    PRIMARY KEY (id_dinosaur, id_attraction),
    FOREIGN KEY (id_dinosaur) REFERENCES dinosaur (id_dinosaur),
    FOREIGN KEY (id_attraction) REFERENCES attraction (id_attraction)
);

CREATE TABLE Accéder (
    id_ticket INT,
    id_attraction INT,
    PRIMARY KEY (id_ticket, id_attraction),
    FOREIGN KEY (id_ticket) REFERENCES ticket (id_ticket),
    FOREIGN KEY (id_attraction) REFERENCES attraction (id_attraction)
);

INSERT INTO
    dinosaur (
        id_dinosaur,
        dinosaur_name,
        diet,
        dinosaur_short_description,
        dinosaur_long_description,
        dino_illustration_path
    )
VALUES (
        1,
        'Tyrannosaurus',
        'Carnivore',
        'Prédateur emblématique du Crétacé, doté de puissantes mâchoires et de petites pattes.',
        'Le Tyrannosaurus rex, souvent abrégé en T. rex, est sans doute le dinosaure le plus emblématique de tous les temps. Ce prédateur du Crétacé supérieur mesurait jusqu’à 12 mètres de long et pesait près de 9 tonnes. Doté d’une mâchoire puissante capable d’exercer une pression de plusieurs tonnes, il pouvait broyer les os de ses proies avec une facilité déconcertante. Malgré ses bras minuscules, il était un chasseur redoutable, probablement opportuniste, alternant entre chasse active et charognage. Son crâne massif abritait un cerveau relativement développé, et ses sens, notamment l’odorat, étaient très aiguisés. Il dominait les écosystèmes nord-américains il y a environ 66 millions d’années.',
        '/images/tyrannosaurus.png'
    ),
    (
        2,
        'Triceratops',
        'Herbivore',
        'Dinosaure à trois cornes et large collerette osseuse, vivant en troupeaux.',
        'Le Triceratops est un dinosaure herbivore du Crétacé supérieur, célèbre pour ses trois cornes faciales et sa large collerette osseuse. Il mesurait environ 9 mètres de long et pesait jusqu’à 12 tonnes. Sa collerette servait probablement à intimider les prédateurs, à séduire les partenaires ou à réguler sa température corporelle. Les cornes frontales pouvaient atteindre plus d’un mètre de long, utiles pour se défendre contre des prédateurs comme le Tyrannosaurus. Il vivait en troupeaux, ce qui renforçait sa sécurité face aux menaces. Son bec puissant lui permettait de découper les végétaux coriaces, et ses dents en batterie broyaient efficacement la matière végétale.',
        '/images/triceratops.png'
    ),
    (
        3,
        'Velociraptor',
        'Carnivore',
        'Petit mais agile, connu pour sa vitesse et son intelligence en chasse.',
        'Le Velociraptor, bien que souvent représenté comme un grand chasseur dans la culture populaire, était en réalité de taille modeste : environ 2 mètres de long pour 15 kg. Ce dinosaure du Crétacé vivait en Mongolie et possédait une intelligence remarquable pour un reptile. Il était doté de griffes recourbées sur ses pattes arrière, dont une en forme de faucille, utilisée pour lacérer ses proies. Des études ont montré qu’il était probablement couvert de plumes, ce qui le rapproche des oiseaux modernes. Agile, rapide et doté d’une excellente coordination, il chassait probablement en groupe, ce qui augmentait son efficacité face à des proies plus grandes.',
        '/images/velociraptor.png'
    ),
    (
        4,
        'Brachiosaurus',
        'Herbivore',
        'Grand sauropode au long cou, capable d’atteindre les feuillages élevés.',
        'Le Brachiosaurus est un sauropode gigantesque du Jurassique, reconnaissable à ses membres antérieurs plus longs que les postérieurs, lui donnant une posture inclinée vers l’avant. Il pouvait atteindre 25 mètres de long et peser jusqu’à 50 tonnes. Son long cou lui permettait d’atteindre les feuillages élevés, exploitant une niche alimentaire inaccessible à d’autres herbivores. Contrairement à d’autres sauropodes, il avait une tête relativement petite et un museau large, adapté au broutage. Il vivait probablement en troupeaux et se déplaçait lentement mais sûrement à travers les forêts jurassiques. Sa taille imposante le protégeait des prédateurs, et son système respiratoire était extrêmement efficace.',
        '/images/brachiosaurus.png'
    ),
    (
        5,
        'Stegosaurus',
        'Herbivore',
        'Reconnaissable à ses grandes plaques dorsales et sa queue hérissée de pointes.',
        'Le Stegosaurus est un dinosaure du Jurassique supérieur, célèbre pour ses grandes plaques osseuses disposées le long de son dos et sa queue munie de pointes redoutables appelées "thagomizers". Il mesurait environ 9 mètres de long et pesait jusqu’à 5 tonnes. Les plaques dorsales servaient probablement à la régulation thermique ou à la communication visuelle. Malgré un cerveau très petit, il possédait un système nerveux efficace pour contrôler sa puissante queue défensive. Herbivore, il se nourrissait de fougères et de plantes basses grâce à son bec corné. Sa posture basse et sa démarche lente en faisaient une cible facile, mais ses défenses naturelles étaient dissuasives.',
        '/images/stegosaurus.png'
    ),
    (
        6,
        'Spinosaurus',
        'Carnivore',
        'L’un des plus grands carnivores, avec une voile dorsale distinctive.',
        'Le Spinosaurus est l’un des plus grands dinosaures carnivores jamais découverts, dépassant même le Tyrannosaurus en taille. Il pouvait atteindre 15 mètres de long et peser plus de 10 tonnes. Ce dinosaure du Crétacé vivait en Afrique du Nord et possédait une voile dorsale spectaculaire, formée par des épines vertébrales allongées. Il était semi-aquatique, chassant des poissons géants dans les rivières et les marécages. Son museau allongé et ses dents coniques étaient parfaitement adaptés à la capture de proies glissantes. Des études récentes suggèrent qu’il nageait activement, utilisant sa queue comme propulseur. Son mode de vie unique en fait un cas fascinant parmi les théropodes.',
        '/images/spinosaurus.png'
    ),
    (
        7,
        'Ankylosaurus',
        'Herbivore',
        'Blindé comme un tank, avec une massue osseuse au bout de la queue.',
        'L’Ankylosaurus est un dinosaure du Crétacé supérieur, célèbre pour son armure corporelle et sa massue caudale. Il mesurait environ 6 à 8 mètres de long et pesait jusqu’à 8 tonnes. Son corps était recouvert de plaques osseuses et de nodules, le rendant presque invulnérable aux attaques. Sa queue se terminait par une masse osseuse capable de briser les os d’un prédateur. Herbivore, il se nourrissait de plantes basses grâce à son bec large et ses dents en forme de feuilles. Malgré sa lenteur, il était extrêmement bien protégé. Son apparence évoque un tank vivant, et il est souvent considéré comme l’un des dinosaures les mieux défendus.',
        '/images/ankylosaurus.png'
    ),
    (
        8,
        'Parasaurolophus',
        'Herbivore',
        'Possède une longue crête tubulaire utilisée pour la communication sonore.',
        'Le Parasaurolophus est un dinosaure herbivore du Crétacé, appartenant à la famille des hadrosauridés. Il est célèbre pour sa longue crête tubulaire qui s’étend vers l’arrière de son crâne. Cette crête, creuse, servait probablement à produire des sons pour communiquer avec ses congénères. Il mesurait environ 10 mètres de long et pesait 2 à 3 tonnes. Il vivait en troupeaux et se déplaçait sur deux ou quatre pattes selon les besoins. Son bec lui permettait de couper les végétaux, et ses dents formaient une batterie efficace pour les broyer. Sa crête unique en fait l’un des dinosaures les plus reconnaissables et intrigants.',
        '/images/parasaurolophus.png'
    ),
    (
        9,
        'Allosaurus',
        'Carnivore',
        'Prédateur du Jurassique, plus léger que le T. rex mais tout aussi redoutable.',
        'L’Allosaurus est un grand prédateur du Jurassique supérieur, souvent considéré comme l’ancêtre du Tyrannosaurus. Il mesurait environ 9 mètres de long et pesait jusqu’à 2 tonnes. Doté de puissantes mâchoires et de griffes acérées, il était un chasseur agile et intelligent. Il possédait une grande mobilité au niveau du cou et des membres, lui permettant de saisir et de lacérer ses proies avec précision. Il vivait en Amérique du Nord et probablement en groupes, ce qui lui permettait de s’attaquer à des proies plus grandes comme les sauropodes. Son squelette révèle une musculature puissante et une structure adaptée à la chasse active.',
        '/images/allosaurus.png'
    ),
    (
        10,
        'Pachycephalosaurus',
        'Herbivore',
        'Connu pour son crâne épais, utilisé probablement pour des combats de dominance.',
        'Le Pachycephalosaurus est un dinosaure du Crétacé supérieur, connu pour son crâne épais en forme de dôme. Ce dôme osseux pouvait atteindre 25 cm d’épaisseur et servait probablement lors de combats de dominance entre individus. Il mesurait environ 4 à 5 mètres de long et pesait près de 450 kg. Herbivore, il se nourrissait de plantes basses, de fruits et peut-être d’insectes. Son corps était compact, avec des membres postérieurs puissants lui permettant de courir rapidement. Son comportement social reste mystérieux, mais les blessures crâniennes fossilisées suggèrent des affrontements fréquents. Il est souvent représenté comme un dinosaure "casque-bélier" dans les reconstitutions.',
        '/images/pachycephalosaurus.png'
    ),
    (
        11,
        'Therizinosaurus',
        'Herbivore',
        'Dinosaure étrange avec de longues griffes, un bec et une allure de prédateur végétarien.',
        'Le Therizinosaurus est sans doute l’un des dinosaures les plus étranges jamais découverts. Ce théropode du Crétacé supérieur possédait d’immenses griffes pouvant atteindre un mètre de long, utilisées probablement pour se défendre ou manipuler la végétation. Bien qu’il ait l’allure d’un prédateur, il était en réalité herbivore, doté d’un bec et d’un long cou lui permettant d’atteindre les feuillages. Il mesurait jusqu’à 10 mètres de long et avait une posture bipède. Sa silhouette inhabituelle, avec un torse large, des bras puissants et une tête petite, intrigue encore les paléontologues. Il est souvent comparé à un oiseau géant, preuve de l’étonnante diversité des dinosaures.',
        '/images/therizinosaurus.png'
    ),
    (
        12,
        'Concavenator',
        'Carnivore',
        'Théropode ibérique avec une bosse dorsale énigmatique, proche des allosaures.',
        'Le Concavenator est un théropode du Crétacé inférieur découvert en Espagne. Il mesurait environ 6 mètres de long et possédait une étrange bosse dorsale formée par deux vertèbres allongées. Cette structure pourrait avoir servi à la communication visuelle ou à la régulation thermique. Ce dinosaure présente également des caractéristiques proches des oiseaux, comme des insertions musculaires suggérant la présence de plumes. Carnivore, il chassait probablement de petits vertébrés et utilisait ses griffes pour capturer ses proies. Sa découverte a bouleversé notre compréhension de l’évolution des théropodes européens. Le Concavenator incarne la transition entre les dinosaures classiques et les formes aviaires.',
        '/images/concavenator.png'
    ),
    (
        13,
        'Europasaurus',
        'Herbivore',
        'Sauropode nain découvert en Allemagne, preuve d’un nanisme insulaire.',
        'L’Europasaurus est un sauropode nain du Jurassique supérieur, découvert en Allemagne. Contrairement à ses cousins géants, il mesurait à peine 6 mètres de long, résultat probable d’un phénomène de nanisme insulaire. Vivant sur une île isolée, il s’est adapté à un environnement où les ressources étaient limitées. Malgré sa petite taille, il conservait les traits typiques des sauropodes : long cou, queue étendue et corps massif. Herbivore, il se nourrissait de végétation basse et moyenne. Sa découverte a permis de mieux comprendre les mécanismes évolutifs liés à l’insularité. L’Europasaurus est un exemple fascinant de l’adaptabilité des dinosaures à des niches écologiques spécifiques.',
        '/images/europasaurus.png'
    ),
    (
        14,
        'Rugops',
        'Carnivore',
        'Petit abélisauridé africain, au crâne rugueux, probablement charognard.',
        'Le Rugops est un petit abélisauridé du Crétacé moyen, découvert au Niger. Il mesurait environ 4 à 5 mètres de long et possédait un crâne rugueux, d’où son nom signifiant "face ridée". Ce dinosaure carnivore était probablement un charognard, utilisant son odorat développé pour repérer les carcasses. Son corps était relativement gracile, avec des membres antérieurs réduits et une tête large. Il vivait dans un environnement tropical aux côtés de géants comme le Spinosaurus. Bien que moins impressionnant que ses contemporains, le Rugops jouait un rôle écologique important en nettoyant les restes. Sa morphologie unique en fait un spécimen clé pour comprendre les abélisauridés africains.',
        '/images/rugops.png'
    ),
    (
        15,
        'Leaellynasaura',
        'Herbivore',
        'Petit ornithopode australien, adapté aux climats polaires du Crétacé.',
        'Le Leaellynasaura est un petit ornithopode du Crétacé inférieur, découvert en Australie. Il mesurait environ 2 mètres de long et était adapté à des conditions polaires, avec de longues périodes d’obscurité. Son cerveau relativement grand suggère une intelligence supérieure à celle de nombreux autres dinosaures. Il possédait de grands yeux, probablement pour voir dans la pénombre, et une longue queue rigide utilisée pour l’équilibre. Herbivore, il se nourrissait de fougères et de conifères. Sa capacité à survivre dans des climats extrêmes en fait un exemple remarquable de résilience évolutive. Le Leaellynasaura est aussi l’un des rares dinosaures à porter le nom d’une enfant.',
        '/images/leaellynasaura.png'
    ),
    (
        16,
        'Minmi',
        'Herbivore',
        'Ankylosaure primitif australien, avec une armure corporelle légère.',
        'Le Minmi est un ankylosaure primitif du Crétacé inférieur, découvert en Australie. Il mesurait environ 3 mètres de long et était doté d’une armure corporelle légère composée de plaques osseuses et de nodules. Contrairement à ses cousins plus massifs, il était plus agile et pouvait se déplacer rapidement pour échapper aux prédateurs. Herbivore, il se nourrissait de plantes basses et utilisait son bec pour couper la végétation. Son squelette révèle une structure musculaire bien développée, notamment au niveau des pattes. Le Minmi est l’un des premiers dinosaures blindés identifiés en Australie, et son nom est inspiré d’un lieu aborigène, soulignant son importance culturelle.',
        '/images/minmi.png'
    ),
    (
        17,
        'Zuniceratops',
        'Herbivore',
        'Cératopsien précoce d’Amérique du Nord, avec deux cornes frontales.',
        'Le Zuniceratops est un cératopsien précoce du Crétacé moyen, découvert au Nouveau-Mexique. Il mesurait environ 3,5 mètres de long et possédait deux cornes frontales, mais pas de corne nasale. Sa collerette était plus simple que celle des Triceratops, indiquant une évolution encore en cours. Herbivore, il se nourrissait de végétaux grâce à son bec puissant. Il représente une étape intermédiaire entre les cératopsiens primitifs et les formes plus avancées. Sa découverte a permis de mieux comprendre l’origine nord-américaine de cette famille de dinosaures. Le Zuniceratops vivait probablement en petits groupes et utilisait ses cornes pour se défendre ou rivaliser avec ses congénères.',
        '/images/zuniceratops.png'
    ),
    (
        18,
        'Incisivosaurus',
        'Herbivore',
        'Théropode à grandes incisives, probablement omnivore, proche des oiseaux.',
        'L’Incisivosaurus est un petit théropode du Crétacé inférieur, découvert en Chine. Il mesurait environ 1 mètre de long et possédait de grandes incisives à l’avant de sa mâchoire, d’où son nom. Ces dents inhabituelles suggèrent un régime omnivore, combinant végétaux et petits animaux. Il est considéré comme un proche parent des oiseaux, avec une structure osseuse légère et des caractéristiques aviaires. Son crâne révèle une capacité crânienne relativement élevée, et il était probablement couvert de plumes. L’Incisivosaurus est un exemple fascinant de la diversité des théropodes et de leur transition vers les oiseaux. Sa morphologie unique intrigue encore les chercheurs.',
        '/images/incisivosaurus.png'
    ),
    (
        19,
        'Balaur',
        'Carnivore',
        'Rapace roumain à double griffe, peut-être omnivore, cousin du Velociraptor.',
        'Le Balaur est un dinosaure du Crétacé supérieur découvert en Roumanie. Ce petit théropode mesurait environ 2 mètres de long et possédait une double griffe sur chaque pied, une caractéristique unique. Il vivait sur une île isolée, ce qui a influencé son évolution vers une forme robuste et musclée. Bien qu’il soit apparenté aux Velociraptors, il avait une morphologie plus trapue, suggérant un mode de vie différent. Certains chercheurs pensent qu’il était omnivore, combinant chasse et cueillette. Le Balaur est un exemple de l’effet de l’insularité sur les dinosaures, et sa découverte a enrichi notre compréhension des écosystèmes insulaires du Crétacé.',
        '/images/balaur.png'
    ),
    (
        20,
        'Psittacosaurus',
        'Herbivore',
        'Petit dinosaure à bec de perroquet, très répandu en Asie.',
        'Le Psittacosaurus est un petit dinosaure du Crétacé inférieur, très répandu en Asie. Il mesurait environ 2 mètres de long et possédait un bec semblable à celui d’un perroquet, adapté à la consommation de végétaux coriaces. Il est l’un des cératopsiens les plus primitifs connus, sans cornes ni collerette développée. Des fossiles exceptionnellement bien conservés montrent qu’il avait des structures semblables à des plumes sur la queue, utilisées peut-être pour la parade. Il vivait en groupes et se déplaçait principalement sur deux pattes. Le Psittacosaurus est l’un des dinosaures les mieux documentés, avec des centaines de spécimens retrouvés, offrant une mine d’informations sur son mode de vie.',
        '/images/psittacosaurus.png'
    ),
    (
        21,
        'Pteranodon',
        'Piscivore',
        'Reptile volant du Crétacé, reconnaissable à sa crête allongée et son bec effilé.',
        'Le Pteranodon est un ptérosaure emblématique du Crétacé supérieur, souvent confondu à tort avec un dinosaure. Doté d’une envergure pouvant atteindre 7 mètres, il possédait un long bec sans dents, parfaitement adapté à la capture de poissons, sa principale source de nourriture. Sa crête crânienne, aux formes et couleurs variées selon les individus, aurait pu jouer un rôle dans la régulation thermique ou la parade sexuelle. Contrairement aux oiseaux, ses ailes étaient formées par une membrane tendue entre un doigt allongé et son corps. Il vivait principalement près des côtes et des zones maritimes, planant au-dessus des vagues à la recherche de proies. Le Pteranodon illustre la diversité des reptiles volants ayant peuplé les cieux il y a environ 85 à 75 millions d’années.',
        '/images/pteranodon.png'
    );

INSERT INTO
    attraction (
        id_attraction,
        attraction_name,
        attraction_description,
        attraction_illustration_path
    )
VALUES (
        1,
        'Stegausorus Ride',
        'Attraction pour les enfants, permettant de monter des stégausores dans la nature.',
        '/images/attractions/stegosaurus_ride.png'
    ),
    (
        2,
        'Dinosaur Pit',
        'Fosse où s’affrontent des dinosaures de différentes espèces lors de combats sanglants et mortels.',
        '/images/attractions/dinosaur_pit.png'
    ),
    (
        3,
        'Survival Pit',
        'Fosse où des visiteurs volontaires et téméraires affrontent des dinosaures.',
        '/images/attractions/survival_pit.png'
    ),
    (
        4,
        'Pteranodon Flight',
        'Attraction pour les adultes permettant de voler sur le dos d’un ptéranodon au-dessus du parc et de ses environs.',
        '/images/attractions/pteranodon_flight.png'
    ),
    (
        5,
        'Jurassic Rapids',
        'Descente d’un cours d’eau tumultueux au milieu des la nature luxuriante du parc et des dinosaures.',
        '/images/attractions/jurassic_rapids.png'
    ),
    (
        6,
        'Archaeological Excavations',
        'Attraction destinée aux enfants leur permettant de s’initier aux fouilles archéologiques à la recherche de fossiles de dinosaures.',
        '/images/attractions/archaeological_excavations.png'
    ),
    (
        7,
        'Velociraptor Escape Run',
        'Tentez d’échapper à des vélociraptors affamés lancés à vos trousses à bord de véhicules ou à pied.',
        '/images/attractions/velociraptor_escape_run.png'
    );

INSERT INTO
    ticket (
        id_ticket,
        icon,
        ticket_type,
        audience,
        details,
        ticket_price
    )
VALUES (
        1,
        '🦴',
        'Jeunes explorateurs',
        '3 à 12 ans',
        'Attractions sûres, éducatives et amusantes conçues pour les plus jeunes aventuriers. ',
        '25'
    ),
    (
        2,
        '🦖',
        'Amateurs de frissons',
        'à partir de 13 ans',
        'Vivez une aventure sensationnelle au milieu des dinosaures avec des attractions palpitantes et une expérience haletante. ',
        '49'
    ),
    (
        3,
        '👑',
        'Visiteurs VIP',
        'Accès premium',
        'Bénéficiez d’un coupe-file pour profiter sans attendre d’attractions et de commodités premium. ',
        '99'
    );

INSERT INTO
    administrator (
        id_administrator,
        mail_address,
        password
    )
VALUES (
        1,
        ' john.hammond@dinopark.com',
        'dinosarecute'
    ),
    (
        2,
        ' dennis.nedry@dinopark.com',
        'allforthemoney'
    );

INSERT INTO
    Animer (id_dinosaur, id_attraction)
VALUES (5, 1),
    (1, 2),
    (3, 2),
    (6, 2),
    (9, 2),
    (3, 7),
    (4, 5),
    (8, 5),
    (10, 3),
    (12, 3),
    (14, 3),
    (16, 6),
    (13, 6),
    (20, 6),
    (22, 4);

INSERT INTO
    Accéder (id_ticket, id_attraction)
VALUES (1, 4),
    (1, 6),
    (2, 2),
    (2, 5),
    (2, 7),
    (3, 3),
    (3, 2),
    (3, 5),
    (3, 4);