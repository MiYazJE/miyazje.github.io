import { proyects } from './proyects.js';

(function () {
    const triggerScrollElements = [];
    const nav = document.querySelector('nav');
    let selectedEl = document.querySelector('.default');

    function setNavLinkSelected(newSelected) {
        selectedEl.classList.remove('linkSelected');
        selectedEl = newSelected;
        selectedEl.classList.add('linkSelected');
    }

    function replenishProyects() {
        const wrapProyects = document.querySelector('#wrapProjects');
        wrapProyects.innerHTML = proyects.map((proyect) => `
            <div class="project-card">
                <img src="${proyect.imagePath}" />
                <div class="description">
                    <h1>${proyect.name}</h1>
                    <p>${proyect.description}</p>
                    <a target="_blank" href="${proyect.url}">Checkout!</a>
                </div>
            </div>`).join('');
    }

    function startScrollElements() {
        const elements = [
            document.querySelector('#whoAmI'),
            document.querySelector('#projects'),
            document.querySelector('#contact'),
        ];
        for (let i = 0; i < elements.length; i++) {
            const current = elements[i];
            const currentRect = current.getBoundingClientRect();
            const isLastElement = i === elements.length - 1;
            let next, nextRect;
            if (!isLastElement) {
                next = elements[i + 1];
                nextRect = next.getBoundingClientRect();
            }
            const id = current.getAttribute('id');
            triggerScrollElements.push({ 
                id,
                element: current,
                min: currentRect.y,
                max: !isLastElement ? nextRect.y - 1 : 1000000,
            }); 
        }
        window.addEventListener('scroll', (e) => {
            [...Object.values(triggerScrollElements)].forEach(({ id, min, max }) => {
                if (window.scrollY >= min && window.scrollY <= max) {
                    if (window.scrollY >= 100) {
                        nav.classList.add('unscale');
                    }
                    else {
                        nav.classList.remove('unscale');
                    }
                    const liElement = document.querySelector(`.${id}Li`);
                    setNavLinkSelected(liElement);
                }
            });
        });
    }

    function main() {
        replenishProyects();
        startScrollElements();
    }

    main();
})();
