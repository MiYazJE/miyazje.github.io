import { proyects } from './proyects.js';

let selectedEl = document.querySelector('.default');
selectedEl.classList.add('linkSelected')

function applyEvents() {
    document.querySelectorAll('li')
        .forEach(el => el.addEventListener('click', 
            () => setNavLinkSelected(el))
    );
}

function setNavLinkSelected(newSelected) {
    selectedEl.classList.remove('linkSelected');
    selectedEl = newSelected;
    selectedEl.classList.add('linkSelected');
}

function replenishProyects() {
    const wrapProyects = document.querySelector('#wrapProjects');
    wrapProyects.innerHTML = proyects.map(proyect => (`
        <div class="project-card">
            <img src="${proyect.imagePath}" />
            <div class="description">
                <h1>${proyect.name}</h1>
                <p>${proyect.description}</p>
                <a target="_blank" href="${proyect.url}">Checkout!</a>
            </div>
        </div>`)).join('');
}

function main() {
    applyEvents();
    replenishProyects();
}

main();