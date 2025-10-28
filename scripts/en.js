const en = {
    lang: "EN",

    sidebar: {
        title: "Legislative Observatory",
        subtitle: "European Parliament",
        legislative: "Legislative:",
        home: "Home",
        search: "Search",
        priorities: "Priorities",
        about: "About:",
        findoutmore: "Find out more",
        contact: "Contact us"
    },

    home: {
        title: "Legislative Observatory",
        info: `
            <p>Welcome to the European Parliament’s database for monitoring the EU decision-making process.</p>
            <p>Please explore the various features of the site such as the part-session calendar, search functions, procedure records with links to documentation and summaries of main documents.</p>
            <p>For more detailed information about the Legislative Observatory, click on "Find out more".</p>
            <button hx-get="/search.html">Search the database</button>
        `

    },

    priorities: {
        title: "Legislative priorities",
        description: 'While continuing to work on all legislative proposals, the European Parliament, the Council and the European Commission have committed to agree each year on a number of proposals to which they want to give priority treatment in the legislative process to ensure substantial progress. These priority proposals are included in the so-called <a href="https://www.europarl.europa.eu/news/en/press-room/20221214IPR64711/eu-institutions-agree-on-joint-priorities-for-2023-and-2024" target="_blank">Joint Declaration&nbsp;on the EU’s legislative priorities</a>.',
        view: "View"
    },

    findoutmore: {
        intro: {
            title: "Introduction",
            subtitle: "Welcome to the website of the Legislative Observatory.",
            description: `
            <p>
                The Legislative Observatory allows users to follow the decision-making process for all EU legislative and non-legislative procedures going through the European Parliament. 
                It has been in constant evolution since its launch in 1994. Over the years, new features have been added making the site a rich source of information on the EU’s decision-making process, with a particular focus on the European Parliament’s activities. 
                Its features include:
            </p>
            <ul>
                <li>a <a hx-get="/search.html">search tool</a> enabling readers to combine many search options to explore the comprehensive procedure records;</li>
                <li>a plenary calendar to search for information on Parliament’s past, present and future part-sessions;</li>
                <li>procedure files with more information about key players and the sequence of stages, plus more links to various other sites;</li>
                <li>a <a hx-get="/search.html">subscription</a> tool that allows users to save their searches and request notifications at regular intervals should changes occur in the results of saved searches. This, together with the RSS feeds available, enables users to stay fully abreast of developments in the dossiers of interest to them.</li>
            </ul>
            `
        },
        oeil: {
            title: "What is the Legislative Observatory?",
            description: `
            <p>
                The Legislative Observatory database was set up in 1994 as a tool to monitor the EU’s institutional decision-making process. Its particular focus is on the European Parliament’s role. Ever since, the website has expanded to include more information on Parliament’s activities, covering not only its legislative but also its budgetary powers, its right of initiative, its power to endorse appointments and a number of international agreements, its power to revoke a delegation of power to the Commission or to oppose a delegated act.
            </p>
            <p>
                The Legislative Observatory publishes comprehensive records in English and French, known as "procedure files". Each file has a unique identifying reference number and is constantly updated until the final stage of the procedure. Daily uploads of the database ensure that any new data can be rapidly added to the existing procedure files.
            </p>
            <p>
                The website contains records for all procedures still ongoing - irrespective of when they began - and all procedures that have been submitted to the European Parliament since the beginning of the fourth parliamentary term in July 1994.
            </p>
            `
        },
        home: {
            title: "What can I find on the home page?",
            description: `
            <p>
                The banners on the right-hand side of the Legislative Observatory’s home page provide direct links to a number of websites belonging to either the European Parliament or the other EU institutions.
            </p>
            <p>
                Another new feature of the home page is the part-sessions calendar showing the days of the European Parliament’s part-sessions. You can use this calendar to search for procedures on the agendas of past, present or future sessions.
            </p>
            <p>
                The dates of the current or forthcoming part-session are displayed with links to the procedure files on the agenda for the individual days. This information is regularly updated to take account of the organisational planning for the plenary.
            </p>
            <p>
                The <a hx-get="/home.html">home page</a> also lists procedure files that have been published most recently in the Legislative Observatory, as well as any procedure files containing the latest reports tabled for plenary by Parliament’s committees.
            </p>
            <p>
                Lastly, the home page contains a section linking to the most recent information document files. These contain documents for information sent to Parliament by the Commission on an official basis and referred internally to the parliamentary committees responsible for the relevant subject areas. These information files disappear from the database after a year if the committee decides not to draw up a report.
            </p>
            `
        },
        web: {
            title: "How can I search the website?",
            description: `
             <p>
                Click on the Search tab to access the Legislative Observatory search tool. The central search box enables users to enter search terms and then filter the list of results, using the search tabs that appear on the right-hand side of the screen. Alternatively, you can click on the SEARCH button (or on Enter) to see all the search filters available for the database.
            </p>
            <p>
                Bear in mind that the Legislative Observatory contains thousands of <strong>procedure files</strong>, so you might wish to start filtering your search by parliamentary term, type of procedure, etc. before refining your search.
            </p>
            <p>
                If you already know a specific document reference, try clicking on <strong>Search by reference</strong> in the central search box and filling in the appropriate fields.
            </p>
            <p>
                For more information on the search functions, click on the "information" icon in the central search box.
            </p>
            <p>
                We would remind users that any search of the Legislative Observatory results in a list of the procedure files containing the information being searched rather than a separate list of documents, names, references, etc.
            </p>
            `
        },
        procedure: {
            title: "What exactly is a procedure file?",
            description: `
             <p>
                Procedure files are the core product of the Legislative Observatory website. Each procedure file provides a centralised, frequently updated record of information on the different key players, events and documents relating to a particular procedure dossier. Files of ongoing procedures also contain forecasts for future stages.
            </p>
            <p>
                As well as document references, links and other useful information, procedure files also contain factual, politically neutral summaries of major documents and events linked to a given procedure. These summaries seek to provide Legislative Observatory readers with a better understanding of the whole process, at all stages.
            </p>
            <p>
                The procedure files and their summaries are in French and English only, but some of the source document links allow readers to select other available language versions as well. Each procedure file, including all the summaries contained in it, is accessible in PDF which can be saved and printed.
            </p>
            `
        },
        info: {
            title: "How is information presented in a procedure file?",
             description: `
             <p>
                The Legislative Observatory procedure files consist of different sections which can be opened or closed, enabling users to have an overview of the whole file or simply to focus on one section in particular. A typical legislative procedure file will contain the following sections:
            </p>

            <ul>
                <li><strong>basic information</strong>, with title, <a href="https://oeil.secure.europarl.europa.eu/oeil/en/external-documents/download?id=13" target="_blank">subject classification</a>, procedure reference, type of procedure and stage reached. This section may also contain links to related procedure files;</li>
                <li><strong>key players</strong> in the main EU institutions involved, including European Parliament committees and rapporteurs (plus indications of political group affiliation), the Commissioner responsible, the relevant Commission Directorate-General, etc. Links to various web pages of the institutions are provided wherever possible;</li>
                <li><strong>key events</strong>, listing the sequence of events in a procedure in chronological order, with links to relevant documents and summaries;</li>
                <li><strong>technical information</strong>, indicating the legal basis, legislative instrument, etc.</li>
                <li>links to the final act of a procedure, as published in the Official Journal of the European Union.  N.B. Whenever a final act contains provisions for delegated acts, this is explicitly mentioned in the procedure file and the summaries;</li>
                <li><strong>documentation gateway</strong> showing all documents relating to a procedure, in chronological order, grouped by institution or in a full list, with references, links and summaries of the major documents;</li>
                <li>links to two other sites: IPEX, a platform for information exchange between the European Parliament and the national parliaments, and EUR-Lex, a database that contains texts produced by the EU institutions;</li>
                <li>ongoing procedure files may also contain a section showing <strong>forecasts</strong> and deadlines for forthcoming activities, such as the adoption of a report in the European Parliament committee, the debate or vote in plenary, etc.;</li>
                <li>some procedure files may contain links to the related <strong>delegated acts procedures</strong> (DEA), if any. Explanation: a legislative act may delegate to the Commission the power to adopt delegated acts. The two co-legislators, Parliament and Council, can revoke a delegation of power or oppose to its tacit renewal and may initiate an examination procedure and eventually object to a delegated act under the heading “delegated acts procedures”.</li>
            </ul>
             `
        },
        who: {
            title: "Who manages the website?",
            description: `
            <p>
                The European Parliament’s Directorate-General for the Presidency is responsible for the operational management of the Legislative Observatory, with input from many different services in Parliament. The Directorate-General for Innovation and Technological Support is responsible for the technical management of the website.
            </p>
            <p>
                You can send a message to the Legislative Observatory Webmaster by clicking on <a hx-get="/contact.html">Contact us</a>.
            </p>
            `
        }
    },

    contact: {
        email: "Email",
        message: "Message",
        send: "Send"
    }

}