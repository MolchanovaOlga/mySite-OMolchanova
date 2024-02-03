const firstPage = document.querySelector('container-header-hero');

window.addEventListener('load', loadPage);

function loadPage() {
    firstPage.classList.add('animation-load-page');
}