lucide.createIcons();


// --- Translation ---
const dict = {en, fr};
var translator = new EOTranslator(dict);
function changeLanguage(lang) {
    translator.language = lang;
    translator.translateDOM();
}
translator.translateDOM();

//After each page change reload Lucide icons, AlpineJS & EOTranslator
htmx.on('htmx:afterSwap', (e) => {
    Alpine.flushAndStopDeferringMutations?.();
    Alpine.initTree(e.target);
    lucide.createIcons();
    translator.translateDOM(e.target);
});

//to process alpineJS generated element for HTMX
document.addEventListener("alpine:mutated", (e) => {
    htmx.process(e.target);
    lucide.createIcons();
    translator.translateDOM(e.target);
});

// Every pages are going to be in the /pages folder
htmx.on('htmx:configRequest', (evt) => {
  evt.detail.path = '/Oeil/pages' + evt.detail.path;
});

// --- SIDEBAR --- //
const sidebar = document.getElementById('sidebar');
sidebar.addEventListener('click', () => {
    if(sidebar.classList.contains('sidebar-close')) toggleSideBar();
})
function toggleSideBar() {
    sidebar.classList.toggle('sidebar-open');
    sidebar.classList.toggle('sidebar-close');
}

// --- BREADCRUMB --- //
const breadcrumb = document.getElementById('breadcrumb');
const labels = {
    "home": "sidebar.home",
    "search": "sidebar.search",
    "priorities": "sidebar.priorities",
    "findout": "sidebar.findoutmore",
    "contact": "sidebar.contact"
}
htmx.on('htmx:afterRequest', (e) => {

    //TODO split by '/' and get all paths
    const path = e.detail.pathInfo.finalRequestPath;
    const page = path.slice(path.lastIndexOf('/')+1, path.lastIndexOf('.'));

    const a = document.createElement('a');
    a.setAttribute('href', path);
    a.setAttribute('eo-translator', labels[page])
    a.text = translator.translate(labels[page]) || page;

    if(breadcrumb.children.length >= 2) {
        breadcrumb.removeChild(breadcrumb.lastChild);
    }
    breadcrumb.appendChild(a);
});
