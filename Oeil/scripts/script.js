lucide.createIcons();

htmx.on('htmx:afterSwap', (event) => {
    Alpine.flushAndStopDeferringMutations?.();
    Alpine.initTree(event.target);
    lucide.createIcons();
});


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
    "home": "Sessions",
    "search": "Search",
    "priorities": "Priorities",
    "findout": "Find out more",
    "contact": "Contact us"
}
htmx.on('htmx:afterRequest', (e) => {

    //TODO split by '/' and get all paths
    const path = e.detail.pathInfo.finalRequestPath;
    const page = path.slice(path.lastIndexOf('/')+1, path.lastIndexOf('.'));

    const a = document.createElement('a');
    a.setAttribute('href', path);
    a.text = labels[page] || page;

    if(breadcrumb.children.length >= 2) {
        breadcrumb.removeChild(breadcrumb.lastChild);
    }
    breadcrumb.appendChild(a);
});