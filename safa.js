<<<<<<< HEAD
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
=======
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
>>>>>>> 8083897 (update)
});