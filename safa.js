// JavaScript for active navigation link
document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Loop through links to find matching href
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Set active class based on current page
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just log it and show an alert
            console.log({name, email, subject, message});
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Certificate view functionality
    const certificateCards = document.querySelectorAll('.certificate-card');
    if (certificateCards.length > 0) {
        certificateCards.forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.classList.contains('view-certificate')) {
                    const viewLink = this.querySelector('.view-certificate');
                    if (viewLink) {
                        viewLink.click();
                    }
                }
            });
        });
    }
});

// JavaScript untuk animasi website Safa Rhiyanda
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi animasi scroll dengan Intersection Observer API
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // Opsional: hentikan pengamatan setelah elemen dianimasikan
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,  // Trigger animasi ketika 10% dari elemen terlihat
            rootMargin: '0px 0px -50px 0px'  // Offset untuk trigger animasi lebih awal
        });
        
        elements.forEach(el => {
            observer.observe(el);
        });
    };
    
    // Tambahkan kelas 'animate-on-scroll' ke semua elemen yang ingin dianimasikan
    const addAnimationClasses = function() {
        // Section titles
        document.querySelectorAll('.section-title, .sub-section-title').forEach(el => {
            el.classList.add('animate-on-scroll');
        });
        
        // Skill bars
        document.querySelectorAll('.skill-item').forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            el.style.animationDelay = `${0.1 * index}s`;
        });
        
        // Portfolio, blog dan sertifikat items
        document.querySelectorAll('.portfolio-item, .blog-item, .sertifikat-item').forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            el.style.animationDelay = `${0.1 * index}s`;
        });
        
        // Timeline items
        document.querySelectorAll('.timeline-item').forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            el.style.animationDelay = `${0.2 * index}s`;
        });
    };
    
    // Animasi counter untuk skill progress bars
    const animateSkillBars = function() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const targetWidth = bar.style.width;
            // Set width ke 0 dulu
            bar.style.width = '0';
            
            // Delay sedikit untuk efek visual yang lebih baik
            setTimeout(() => {
                // Animasikan ke target width
                bar.style.transition = 'width 1.5s ease-out';
                bar.style.width = targetWidth;
            }, 300);
        });
    };
    
    // Inisialisasi semua animasi
    const initAnimations = function() {
        addAnimationClasses();
        animateOnScroll();
        animateSkillBars();
        
        // Tambahkan smooth scrolling untuk semua internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };
    
    // Tambahkan efek parallax untuk section home
    const initParallax = function() {
        const homeSection = document.getElementById('home');
        if (!homeSection) return;
        
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            
            if (scrollPosition <= window.innerHeight) {
                // Parallax effect untuk background
                homeSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
            }
        });
    };
    
    // Animasi untuk FAQ items
    const initFaqAnimation = function() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Toggle active class
                item.classList.toggle('active');
                
                // Change icon
                const icon = item.querySelector('.faq-icon i');
                
                if (item.classList.contains('active')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                    // Tambahkan animasi rotate saat active
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                    icon.style.transform = 'rotate(0deg)';
                }
                
                // Animate answer
                const answer = item.querySelector('.faq-answer');
                if (item.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = '0px';
                }
            });
        });
    };
    
    // Type writer effect untuk home section heading
    const initTypeWriter = function() {
        const heading = document.querySelector('#home h2');
        if (!heading) return;
        
        const text = heading.textContent;
        heading.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heading.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Jalankan efek setelah sedikit delay
        setTimeout(typeWriter, 500);
    };
    
    // Inisialisasi semua animasi
    initAnimations();
    initParallax();
    initFaqAnimation();
    initTypeWriter();
});