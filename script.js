// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;
const navbar = document.querySelector('.navbar');

// Initialize mobile menu state
let isMenuOpen = false;

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    isMenuOpen = !isMenuOpen;
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.style.overflow = isMenuOpen ? 'hidden' : '';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (isMenuOpen && 
        !navLinks.contains(e.target) && 
        !hamburger.contains(e.target)) {
        isMenuOpen = false;
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        body.style.overflow = '';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        body.style.overflow = '';
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Hero Section Animation
gsap.from('.hero-content h1', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.hero-content p', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: 'power4.out'
});

gsap.from('.hero-buttons', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 1,
    ease: 'power4.out'
});

// About Section Animation
gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.feature', {
    scrollTrigger: {
        trigger: '.about-features',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power4.out'
});


// Facilities Section Animation
gsap.from('.facility-item', {
    scrollTrigger: {
        trigger: '.facilities',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power4.out'
});



// Gallery Section Animation
gsap.from('.gallery-item', {
    scrollTrigger: {
        trigger: '.gallery',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    scale: 0.8,
    opacity: 0,
    stagger: 0.2,
    ease: 'power4.out'
});

// Testimonials Section Animation
gsap.from('.testimonial-content', {
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

// Contact Section Animation
gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: 100,
    opacity: 0,
    ease: 'power4.out'
});

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dotsContainer = document.querySelector('.testimonial-dots');

// Create dots
testimonials.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTestimonial(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToTestimonial(index) {
    testimonials[currentTestimonial].style.display = 'none';
    dots[currentTestimonial].classList.remove('active');
    
    currentTestimonial = index;
    
    testimonials[currentTestimonial].style.display = 'block';
    dots[currentTestimonial].classList.add('active');
}

// Auto slide testimonials
setInterval(() => {
    goToTestimonial((currentTestimonial + 1) % testimonials.length);
}, 5000);

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Enhanced Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
    });
});

// Enhanced Form Submission with Loading State
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    submitBtn.textContent = 'Message Sent!';
    submitBtn.style.background = '#2ecc71';
    
    // Reset form
    contactForm.reset();
    
    // Reset button after delay
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;0
        submitBtn.style.background = '#3498db';
    }, 3000);
});

// Enhanced Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = newsletterForm.querySelector('button');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;
    
    // Simulate subscription (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    submitBtn.textContent = 'Subscribed!';
    submitBtn.style.background = '#2ecc71';
    
    // Reset form
    newsletterForm.reset();
    
    // Reset button after delay
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '#3498db';
    }, 3000);
});

// Gallery Image Modal
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal when clicking the close button or outside the image
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.className === 'close') {
                modal.remove();
            }
        });
    });
});


// Add scroll progress styles
const style = document.createElement('style');
style.textContent = `
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: #3498db;
        z-index: 1001;
        transition: width 0.1s ease;
    }
`;
document.head.appendChild(style);

// Typing Text Animation
const typingText = document.querySelector('.typing-text');
const text = typingText.textContent;
typingText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation after a short delay
setTimeout(typeWriter, 1000); 