// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile menu toggle - make it global
window.toggleMobileMenu = function() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (mobileNav && menuIcon && closeIcon) {
        if (mobileNav.classList.contains('show')) {
            mobileNav.classList.remove('show');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            mobileNav.classList.add('show');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    }
}

// Smooth scroll to section - make it global
window.scrollToSection = function(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav && mobileNav.classList.contains('show')) {
            window.toggleMobileMenu();
        }
    }
}

// FAQ toggle - make it global
let openFaqIndex = 0; // First FAQ open by default

window.toggleFaq = function(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const clickedItem = faqItems[index];
    
    if (clickedItem) {
        if (openFaqIndex === index) {
            // Close if already open
            clickedItem.classList.remove('active');
            openFaqIndex = null;
        } else {
            // Close all
            faqItems.forEach(item => item.classList.remove('active'));
            // Open clicked
            clickedItem.classList.add('active');
            openFaqIndex = index;
        }
    }
}

// Initialize first FAQ as open
document.addEventListener('DOMContentLoaded', function() {
    const firstFaq = document.querySelector('.faq-item');
    if (firstFaq) {
        firstFaq.classList.add('active');
    }
});

// Floating WhatsApp visibility
function updateFloatingWhatsApp() {
    const floatingBtn = document.getElementById('floating-whatsapp');
    if (floatingBtn) {
        if (window.scrollY > 300) {
            floatingBtn.classList.add('show');
        } else {
            floatingBtn.classList.remove('show');
        }
    }
}

// Check on scroll
window.addEventListener('scroll', updateFloatingWhatsApp);

// Check on load
document.addEventListener('DOMContentLoaded', function() {
    updateFloatingWhatsApp();
    // Also check immediately in case page is already scrolled
    setTimeout(updateFloatingWhatsApp, 100);
});

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .pricing-card, .benefit-card, .testimonial-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const header = document.getElementById('header');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileNav && mobileNav.classList.contains('show')) {
        if (header && !header.contains(event.target)) {
            window.toggleMobileMenu();
        }
    }
});

// Prevent default on anchor links with onclick
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button[onclick*="window.open"]');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Let the onclick handler work
        });
    });
});
