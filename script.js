// ===================================
// NAVIGATION
// ===================================

const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');
const menuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});

// Active navigation link on scroll
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===================================
// TYPING ANIMATION
// ===================================

const typingText = document.getElementById('typingText');
const textToType = 'Mert Ayaz Ozkan';
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingText.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 150);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeText, 500);
});

// ===================================
// SCROLL ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate skill bars when skills section becomes visible
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// ===================================
// SKILL BARS ANIMATION
// ===================================

function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 100);
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// PROFILE IMAGE PLACEHOLDER
// ===================================

// Generate a placeholder profile image using canvas
function generateProfilePlaceholder() {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 400, 400);
    gradient.addColorStop(0, '#00c8ff');
    gradient.addColorStop(1, '#0080ff');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);

    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 100px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('MAO', 200, 200);

    return canvas.toDataURL();
}

// Set placeholder image
const profileImage = document.getElementById('profileImage');
if (profileImage) {
    profileImage.src = generateProfilePlaceholder();
    profileImage.alt = 'Profile picture placeholder';
}

// ===================================
// PROJECT CARD INTERACTIONS
// ===================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function () {
        this.style.zIndex = '1';
    });
});

// ===================================
// PARALLAX EFFECT (SUBTLE)
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
        updateActiveNav();
    });
});

// ===================================
// ACCESSIBILITY
// ===================================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinksContainer.classList.remove('active');
    }
});

// Focus trap for mobile menu
if (navLinksContainer) {
    const focusableElements = navLinksContainer.querySelectorAll('a');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    navLinksContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
}

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; font-weight: bold; color: #00c8ff;');
console.log('%cInterested in the code? Check out the source!', 'font-size: 14px; color: #888;');
