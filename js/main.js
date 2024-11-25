import { proyects } from './proyects.js';

(function () {
  function renderProyects() {
    const wrapProyects = document.querySelector('#wrapProjects');
    let delay = 0.2;
    wrapProyects.innerHTML = proyects
      .map((proyect) => {
        const githubAnchor = proyect.githubUrl
          ? `<a target="_blank" class="githubBtn" href="${proyect.githubUrl}">Github</a>`
          : '';
        const urlAnchor = proyect.url
          ? `<a target="_blank" href="${proyect.url}">Project</a>`
          : '';
        return `
            <div class="project-card" data-delay="${(delay += 0.1)}">
                <img src="${proyect.imagePath}" />
                <div class="description">
                    <h1>${proyect.name}</h1>
                    <p>${proyect.description}</p>
                    <div class="btnsProject">
                        ${githubAnchor}
                        ${urlAnchor}
                    </div>
                </div>
            </div>`;
      })
      .join('');
  }

  function main() {
    $('body').tooltip({ selector: '[data-toggle=tooltip]' });
    renderProyects();

    ScrollOut({
      targets: '.transition-text, .project-card, #portfolio, .viewProjects',
      onShown: (el) => {
        el.classList.add('animate__animated');
        el.style.opacity = 1;
        el.style.animationDelay = `${el.dataset.delay}s`;
        if (el.classList.contains('project-card')) {
          el.classList.add('animate__fadeIn');
        } else {
          console.log(el.dataset.animationtype);
          el.classList.add(el.dataset.animationtype);
        }
      },
    });
  }

  main();
})();
