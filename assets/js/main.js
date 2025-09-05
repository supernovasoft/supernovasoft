(function($) {
    "use strict";

    // Initialize when document is ready
    $(document).ready(function() {
        
        // Navbar scroll effect
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.custom-navbar').addClass('scrolled');
            } else {
                $('.custom-navbar').removeClass('scrolled');
            }
            
            // Back to top button visibility
            if ($(this).scrollTop() > 300) {
                $('#backToTop').addClass('visible');
            } else {
                $('#backToTop').removeClass('visible');
            }
            
            // Animate elements on scroll
            animateOnScroll();
        });
        
        // Back to top button
        $('#backToTop').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
        
        // Smooth scrolling for anchor links
        $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 1000, function() {
                        if (history.pushState) {
                            history.pushState(null, null, this.hash);
                        } else {
                            location.hash = this.hash;
                        }
                    });
                }
            }
        });
        
        // Initialize tooltips
        $('[data-bs-toggle="tooltip"]').tooltip();
        
        // Contact form submission
        $('#contactForm').submit(function(e) {
            e.preventDefault();
            
            var form = $(this);
            var submitButton = form.find('button[type="submit"]');
            var originalText = submitButton.html();
            
            // Show loading state
            submitButton.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...');
            submitButton.prop('disabled', true);
            
            // Simulate form submission
            setTimeout(function() {
                // Reset form
                form[0].reset();
                
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                
                // Reset button
                submitButton.html(originalText);
                submitButton.prop('disabled', false);
            }, 2000);
        });
        
        // Initialize animations
        animateOnScroll();
        
        // Initialize floating WhatsApp button
        $('#wapp').floatingWhatsApp({
            phone: '905312089995', 
            popupMessage: 'Hello, how can I help you?', 
            showPopup: true,
            showOnIE: false,
            headerTitle: 'Welcome!',
            message: "I want to install and configure system on the Cloud!",
            size: '52px',
            backgroundColor: '#25D366',
            position: 'right'
        });
    });
    
    // Animate elements on scroll
    function animateOnScroll() {
        $('.animate__animated').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight - 100 > position) {
                var animation = $(this).data('animation') || 'fadeInUp';
                $(this).addClass('animate__' + animation);
            }
        });
    }
    
    // Text rotation animation for hero section
    function initTextRotation() {
        var texts = [
            "We Build Amazing Web Application for your business",
            "We Deliver Qualified Solution for your business",
            "We Deploy Succeeded Production for your business",
            "We Add Value to your business"
        ];
        
        var currentIndex = 0;
        var textElement = $('#rotating-text');
        
        setInterval(function() {
            currentIndex = (currentIndex + 1) % texts.length;
            textElement.fadeOut(500, function() {
                $(this).text(texts[currentIndex]).fadeIn(500);
            });
        }, 3000);
    }
    
    // Initialize text rotation if element exists
    if ($('#rotating-text').length) {
        initTextRotation();
    }
    
})(jQuery);