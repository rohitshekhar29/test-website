// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to hero section on page load
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });

    // Logo click handler - scroll to hero section
    const navLogo = document.querySelector('.nav-logo');
    if (navLogo) {
        navLogo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.firstName || !data.lastName || !data.email || !data.company) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.form-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Submitting...</span>';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Show success message
                alert('Thank you for your request! We\'ll get back to you soon.');
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    // Rotating Features Animation
    const rotatingFeatures = document.querySelectorAll('.rotating-feature');
    let currentFeatureIndex = 0;
    
    if (rotatingFeatures.length > 0) {
        // Function to rotate features
        function rotateFeatures() {
            // Remove active class from current feature
            rotatingFeatures[currentFeatureIndex].classList.remove('active');
            
            // Move to next feature
            currentFeatureIndex = (currentFeatureIndex + 1) % rotatingFeatures.length;
            
            // Add active class to new feature
            rotatingFeatures[currentFeatureIndex].classList.add('active');
        }
        
        // Start rotation (change every 3 seconds)
        setInterval(rotateFeatures, 3000);
    }

    // Product Section Tabs (Streaming Observability)
    const productTabs = document.querySelectorAll('.tab-link');
    const productTabContents = document.querySelectorAll('.tab-content');

    productTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs and contents
            productTabs.forEach(t => t.classList.remove('active'));
            productTabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Showcase Tabs (Product and Solutions sections)
    const showcaseTabs = document.querySelectorAll('.showcase-tab');
    const showcasePanels = document.querySelectorAll('.showcase-panel');

    showcaseTabs.forEach((tab, index) => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Get the parent section to scope the tab switching
            const parentSection = this.closest('section');
            const sectionTabs = parentSection.querySelectorAll('.showcase-tab');
            const sectionPanels = parentSection.querySelectorAll('.showcase-panel');
            
            // Remove active class from all tabs and panels in this section
            sectionTabs.forEach(t => t.classList.remove('active'));
            sectionPanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding panel with fade animation
            const showcaseId = this.getAttribute('data-showcase');
            const targetPanel = document.getElementById(showcaseId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Professional dark theme scroll spy for navigation
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(15, 15, 19, 0.98)';
            nav.style.borderBottomColor = 'rgba(163, 163, 180, 0.3)';
            nav.style.backdropFilter = 'blur(24px)';
            nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
        } else {
            nav.style.background = 'rgba(15, 15, 19, 0.95)';
            nav.style.borderBottomColor = 'rgba(163, 163, 180, 0.2)';
            nav.style.backdropFilter = 'blur(20px)';
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in effect
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });

    // Team Section Scroll Animations
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe team elements for animation
    const teamElements = document.querySelectorAll('.team-card, .founder-member, .founding-member, .advisor-member, .quote-card');
    teamElements.forEach(el => {
        teamObserver.observe(el);
    });

    // Mobile menu toggle (improved implementation)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            
            // Update button aria-expanded
            const isExpanded = navMenu.classList.contains('show');
            mobileMenuButton.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                navMenu.classList.remove('show');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Comparison section mobile tabs
    const comparisonTabBtns = document.querySelectorAll('.comparison-tab-btn');
    const comparisonTabs = document.querySelectorAll('.comparison-half');
    
    if (comparisonTabBtns.length > 0 && comparisonTabs.length > 0) {
        comparisonTabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all buttons and tabs
                comparisonTabBtns.forEach(b => b.classList.remove('active'));
                comparisonTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show corresponding tab
                const targetTabElement = document.getElementById(targetTab + '-tab');
                if (targetTabElement) {
                    targetTabElement.classList.add('active');
                }
            });
        });
        
        // Set initial active state
        const firstTab = document.getElementById('without-tab');
        if (firstTab) {
            firstTab.classList.add('active');
        }
    }

    // Video play button functionality
    const playButton = document.querySelector('.play-button');
    const videoContainer = document.querySelector('.hero-video-container');
    const videoIframe = document.querySelector('.video-wrapper iframe');
    
    if (playButton && videoContainer && videoIframe) {
        playButton.addEventListener('click', function() {
            // Hide the overlay
            const overlay = videoContainer.querySelector('.video-overlay');
            if (overlay) {
                overlay.style.display = 'none';
            }
            
            // Ensure iframe is clickable
            videoIframe.style.pointerEvents = 'auto';
            
            // Try to play the video by clicking on it
            videoIframe.click();
        });
        
        // Show overlay on mouse leave
        videoContainer.addEventListener('mouseleave', function() {
            const overlay = videoContainer.querySelector('.video-overlay');
            if (overlay) {
                overlay.style.display = 'flex';
            }
        });
    }
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('loading');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}