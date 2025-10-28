const fr = {
    lang: "FR",
    
    sidebar: {

        title: "Observatoire législatif",
        subtitle: "Parlement européen",
        legislative: "Législatif:",
        home: "Accueil",
        search: "Recherche",
        priorities: "Priorités",
        about: "A propos:",
        findoutmore: "En savoir plus",
        contact: "Contactez-nous"
    },

    home: {
        title: "L'Observatoire législatif",
        info: `
            <p>Bienvenue sur la base de données du Parlement européen qui permet de suivre le processus décisionnel de l’UE.</p>
            <p>Veuillez explorer le site, avec ses fonctions de recherche, le calendrier des sessions plénières et les fiches de procédures contenant liens vers la documentation et des résumés des documents importants.</p>
            <p>Pour avoir des informations plus détaillées sur l’Observatoire législatif cliquez sur l’onglet "En savoir plus"</p>
            
            <button hx-get="/search.html">Recherche</button>
        `

    },

    priorities: {
        title: "Priorités législatives",
        description: 'Tout en continuant de travailler sur toutes les propositions législatives, le Parlement européen, le Conseil et la Commission européenne se sont engagés à se mettre d’accord chaque année sur un certain nombre de propositions auxquelles ils souhaitent donner un traitement prioritaire dans le processus législatif pour assurer des progrès substantiels. Ces propositions prioritaires sont incluses dans la <a href="https://www.europarl.europa.eu/news/en/press-room/20221214IPR64711/eu-institutions-agree-on-joint-priorities-for-2023-and-2024" target="_blank">Déclaration commune sur les priorités législatives de l’UE</a>.',
        view: "Voir"    
    },

    findoutmore: {
        intro: {
            title: "Introduction",
            subtitle: "Bienvenue sur le site de l’Observatoire législatif.",
            description: `
            <p>
                L’Observatoire permet de suivre toutes les procédures législatives et non législatives de l’UE examinées par le Parlement européen. 
                Il n’a cessé de se développer depuis sa création en 1994. Des nouveautés ont été ajoutées au fil des années, qui ont fait de ce site une riche source d’informations sur le processus décisionnel de l’UE, en mettant tout particulièrement l’accent sur les activités du Parlement européen. 
                Parmi les fonctions disponibles, on trouvera : 
            </p>
            <ul>
                <li>un outil de <a hx-get="/search.html">recherche</a> permettant au lecteur de combiner plusieurs options de recherche afin d’explorer l’ensemble des fiches de procédure;</li>
                <li>le calendrier des sessions plénières pour rechercher des informations sur les séances parlementaires passées, présentes et futures;</li>
                <li>des fiches de procédure comprenant des informations sur les principaux acteurs,  la chronologie des événements et des liens vers différents sites;</li>
                <li>un outil <a hx-get="/search.html">d’abonnement</a> qui permet au lecteur de sauvegarder des recherches et de recevoir des notifications à intervalles réguliers en cas de modifications des résultats des recherches. Avec les flux RSS disponibles, cela permet aux utilisateurs de rester informés des derniers développements dans les dossiers qui les intéressent.</li>
            </ul>
            `
        },
        oeil: {
            title: "Qu’est-ce que l’Observatoire législatif ?",
            description: `
            <p>L’Observatoire législatif, créé en 1994, est un instrument de suivi du processus décisionnel de l’UE, avec un accent particulier mis sur les activités du Parlement européen. Le site a évolué et englobe maintenant des informations sur les activités du Parlement, non seulement lorsqu’il exerce ses pouvoirs législatifs mais aussi ses pouvoirs budgétaires, son droit d’initiative, son pouvoir d’approuver des nominations ainsi que certains accords internationaux, son pouvoir de révoquer une délégation de pouvoir à la Commission ou de s’opposer à un acte délégué.</p>
            <p>L’Observatoire législatif &nbsp;publie des données complètes en anglais et en français, appelées "fiches de procédure". Chaque fiche a un numéro d’identification unique et est régulièrement mise à jour, jusqu’à l’étape finale de la procédure. Des mises à jour quotidiennes de la base de données assurent que les nouvelles données sont ajoutées rapidement aux fiches de procédure existantes.</p>
            <p>Le site contient toutes les procédures en cours, quelle que soit leur date de création, et toutes les procédures qui ont été soumises au Parlement européen depuis le début de la quatrième législature (juillet 1994).</p>
            `
        },
        home: {
            title: "Que puis-je trouver sur la page d’accueil ?",
            description: `
            <p>Les bannières dans la partie droite de la page d’accueil de l’Observatoire législatif contiennent des liens directs avec un certain nombre de pages du site web du Parlement européen et&nbsp;des sites des autres institutions de l’UE.</p>
            <p>Un <strong>calendrier&nbsp;des périodes de sessions</strong>&nbsp;indiquant les journées de séance du Parlement européen constitue une autre nouveauté&nbsp; sur la page d’accueil du site. A l’aide de ce calendrier, vous pouvez rechercher des procédures inscrites à l’ordre du jour des sessions passées, présentes ou futures. Les dates de la prochaine session sont&nbsp;indiquées avec des liens vers les fiches de procédures à l’ordre du jour de la session pour chaque journée de séance. Ces informations sont régulièrement mises à jour afin de tenir compte de la planification de la séance plénière.</p><p>La <a hx-get="/home.html">page d’accueil</a> montre aussi les dernières fiches de procédure publiées dans l’Observatoire législatif, ainsi que toutes les procédures contenant les derniers rapports déposés pour la plénière par les commissions parlementaires.</p>
            <p>Enfin, la page d’accueil contient une section qui renvoie aux dernières <strong>fiches de document d’information</strong>. Celles-ci contiennent les documents pour information officiellement envoyés par la Commission européenne au Parlement et renvoyés aux commissions parlementaires compétentes. Si la commission parlementaire décide de ne pas élaborer de rapport sur un document pour information, celui-ci disparaîtra de la base de données après un an.</p>
            `
        },
        web: {
            title: "Comment faire des recherches sur le site web ?",
            description: `
                <p>Cliquer sur l’onglet <strong><a hx-get="/search.html">Recherche</a></strong> pour accéder à l’outil de recherche de l’Observatoire législatif. La case de recherche centrale permet aux utilisateurs de saisir les termes de recherche voulus et de filtrer la liste des résultats, par le biais des options de recherche qui s’affichent sur le côté droit de l’écran. Vous pouvez aussi cliquer sur RECHERCHER pour visualiser l’ensemble des filtres de recherche disponibles pour la base de données.</p>
                <p>N’oubliez pas que l’Observatoire législatif contient des milliers de <strong>fiches de procédure</strong>. Nous vous proposons de commencer par filtrer votre recherche par législature, type de procédure, etc. avant d’affiner votre recherche.</p>
                <p>Si vous connaissez déjà une référence spécifique, vous pouvez cliquer sur l’onglet <strong>Recherche par référence</strong> dans la case de recherche centrale et remplir les champs pertinents.</p>
                <p>Pour plus d’informations sur les fonctions de recherche, cliquer sur l’icône "information" dans la case de recherche centrale.</p><p>Nous rappelons aux utilisateurs que toute recherche dans l’Observatoire donne comme résultat une liste de fiches de procédure contenant les informations recherchées et non une liste séparée de documents, noms, références, etc.</p>

            `
        },
        procedure: {
            title: "Qu’est-ce qu’une fiche de procédure ?",
            description: `
                <p>Les fiches de procédure sont le produit phare de l’Observatoire législatif. Chaque fiche de procédure est un recueil de données centralisé et régulièrement mis à jour sur les acteurs principaux, les événements clés et les documents relatifs à un dossier particulier. Les fiches de procédure en cours contiennent aussi des prévisions concernant les étapes futures en lien avec la procédure concernée.</p>
                <p>Les fiches de procédure comprennent non seulement des références de documents, des liens et d’autres données utiles, mais aussi des <strong>résumés</strong> factuels et politiquement neutres des principaux documents et événements liés à une procédure donnée. Ces synthèses ont pour but d’aider les utilisateurs de l’Observatoire législatif à mieux comprendre le déroulement d’une procédure dans son ensemble, étape après étape.</p>
                <p>Les fiches de procédure et les résumés sont disponibles en anglais et en français uniquement, néanmoins certains liens vers des documents-source permettent aux lecteurs de sélectionner les autres versions linguistiques disponibles. Chaque dossier de la procédure – y compris les résumés qui y figurent – peut être accessible&nbsp; au format PDF et&nbsp; peut être sauvegardé et imprimé.</p>
            `
        },
        info: {
            title: "Comment les informations sont-elles présentées dans les fiches de procédure ?",
             description: `
                <p>Les fiches de procédure de l’Observatoire législatif comprennent différentes sections qui peuvent être ouvertes ou fermées, permettant aux lecteurs d’avoir une vue d’ensemble ou simplement de se concentrer sur une seule section. Une fiche législative type comprendra les sections suivantes :</p>
                <ul>
                    <li><strong>Informations de base</strong>, avec titre, <a title="Classement par sujets" href="https://oeil.secure.europarl.europa.eu/oeil/fr/external-documents/download?id=13" target="_blank">classement par sujets</a>, référence de procédure, type de procédure et prochaine étape en attente. On peut aussi y trouver des liens vers des fiches de procédure liées;</li>
                    <li><strong>Acteurs principaux, </strong><strong>c’est-à-dire</strong> les institutions de l’UE concernées, y compris les commissions et le(s) rapporteur(s) au Parlement européen (avec indication de&nbsp;leur appartenance politique), le Commissaire responsable, la DG compétente à la Commission, etc. Dans la mesure du possible, des liens vers différentes pages des institutions sont également proposés;</li>
                    <li><strong>Evénements clés</strong>, indiquant la succession chronologique des événements dans une procédure, avec des liens vers les documents et résumés pertinents;</li><li><strong>Informations techniques</strong>, mentionnant la base juridique, l’instrument législatif,&nbsp; etc.</li>
                    <li>Liens vers l’<strong>acte final </strong>d’une procédure tel que publié au Journal officiel de l’UE. NB&nbsp;: chaque fois qu’un acte législatif final contient des dispositions relatives aux actes délégués, cela est explicitement mentionné dans la fiche de procédure et les résumés.</li>
                    <li><strong>Portail de documentation</strong> indiquant tous les documents relatifs à une procédure, dans l’ordre chronologique, regroupés par institution ou en une liste complète, avec références, liens et résumés des principaux documents ;</li>
                    <li>Liens vers deux autres sites web : <strong>IPEX</strong>, une plateforme d’échange d’information entre le Parlement européen et les parlements nationaux, et <strong>EUR-Lex</strong>, le site web consacré au droit et aux publications de l’UE.</li>
                    <li>Les fiches de procédure en cours peuvent aussi contenir des <strong>prévisions</strong> et&nbsp; les délais prévus pour les prochaines activités, telles que l’adoption d’un rapport en commission.</li>
                    <li>Certaines fiches de procédure contiennent des liens vers les <strong>procédures des actes délégués</strong> pertinentes (DEA), s’il y en a.&nbsp;<em>Explication : un acte législatif peut déléguer à la Commission le pouvoir d’adopter des actes délégués. Les deux co-législateurs, Parlement et Conseil, peuvent révoquer une délégation de pouvoir ou s’opposer à sa reconduction tacite et ils peuvent aussi s’opposer à un acte délégué au travers d’une procédure d’examen. Tous ces cas de figure sont présentés sous la rubrique «&nbsp;</em><em>procédure d’acte délégué&nbsp;»</em><em>.</em></li>
                </ul>
             `
        },
        who: {
            title: "Qui gère le site ?",
            description: `
                <p>La Direction Générale de la Présidence du Parlement européen est responsable de la gestion opérationnelle de l’Observatoire législatif, avec les contributions de nombreux services du Parlement. La gestion technique du site est sous la responsabilité de la Direction Générale Innovation et support technologique.
                <br>
                <br>
                Pour envoyer un message au Webmaster de l’Observatoire législatif, cliquez sur le lien <a title="Contactez-nous" hx-get="/contact.html">Contactez-nous</a><strong>.</strong>
                </p>

            `
        }
    },

    contact: {
        email: "Courriel",
        message: "Message",
        send: "Envoyer"
    }

    
}