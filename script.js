// Fun animations and interactive elements

// Scroll Animation for Food Items
window.addEventListener('scroll', function() {
    const animatedElements = document.querySelectorAll('.scroll-animation img');
    animatedElements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add('active');
        }
    });
});

// Interactive Modules (Accordion Effect)
const modules = document.querySelectorAll('.module');

modules.forEach(function(module) {
    module.addEventListener('click', function() {
        this.classList.toggle('open');
        const content = this.querySelector('.module-content');
        if (this.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }
    });
});

// Initializing module content height to zero
window.addEventListener('load', function() {
    const moduleContents = document.querySelectorAll('.module-content');
    moduleContents.forEach(function(content) {
        content.style.maxHeight = 0;
    });
});
