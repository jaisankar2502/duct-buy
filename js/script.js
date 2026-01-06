// Sticky Header Effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-times');
    });
});

// Reveal Animations on Scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);

// Initial call to reveal elements on page load
reveal();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
// Brand Hybrid Scroll Animation (Auto + Manual Parallax)
const brandsTrack = document.querySelector('.brands-track');
if (brandsTrack) {
    // Disable CSS animation to let JS handle it smoothly with parallax
    brandsTrack.style.animation = 'none';

    let autoX = 0;
    const autoSpeed = 0.8; // Pixels per frame

    function animateBrands() {
        autoX += autoSpeed;

        // Manual scroll influence (parallax)
        const scrollInfluence = window.scrollY * 0.2;

        // Total movement
        // Reset point: 25 brands * 280px (200px width + 80px gap) = 7000px
        const totalX = (autoX + scrollInfluence) % 7000;

        brandsTrack.style.transform = `translateX(-${totalX}px)`;

        requestAnimationFrame(animateBrands);
    }

    animateBrands();
}
