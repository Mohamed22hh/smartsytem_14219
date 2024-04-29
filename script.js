// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add active class to nav links on scroll
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop - 100; // Adjust this value as needed
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});

// Animate on scroll
const animatedElements = document.querySelectorAll('.animate__animated');

function animateOnScroll() {
    animatedElements.forEach(element => {
        const elementPos = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPos < windowHeight - 100) {
            element.classList.add(element.dataset.animation);
        } else {
            element.classList.remove(element.dataset.animation);
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Counter animation
const counters = document.querySelectorAll('.counter');

function startCounters() {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const step = target / 100;
        let count = 0;

        const counterInterval = setInterval(() => {
            count += step;
            counter.textContent = Math.floor(count);

            if (count >= target) {
                counter.textContent = target;
                clearInterval(counterInterval);
            }
        }, 10);
    });
}

window.addEventListener('load', startCounters);