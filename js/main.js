const skills = document.querySelectorAll('#skills .fill');
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const fill = entry.target.querySelector('.fill');
        const targetWidth = fill.getAttribute('data-fill');

        if (entry.isIntersecting) {
            fill.style.width = targetWidth;
        } else {
            fill.style.width = '0';
        }
    });
}, { threshold: 0.01 });

document.querySelectorAll('#skills .skill').forEach(skill => {
    observer.observe(skill);
});

const highlightNav = () => {
    let currentSection = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fill").forEach(bar => {
        const fill = bar.getAttribute("data-fill");
        bar.style.width = fill;
    });
});