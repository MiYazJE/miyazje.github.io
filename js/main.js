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

function main() {
    applyEvents();
}

main();