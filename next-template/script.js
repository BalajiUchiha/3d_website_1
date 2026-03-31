document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroContainer = document.querySelector('.hero-container');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    // Add elements fade-in on scroll using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial styles for sections before observing (fade effect)
    document.querySelectorAll('.glass, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // We do a parralax and fade out effect on the hero content as we scroll down
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const windowHeight = window.innerHeight;

        // Calculate opacity and transform based on scroll range up to windowheight
        if (scrolled <= windowHeight) {
            const ratio = scrolled / windowHeight;

            heroContent.style.opacity = 1 - (ratio * 1.5);
            scrollIndicator.style.opacity = 0.6 - (ratio * 2);

            // Scale down the hero slightly and push it down
            heroContent.style.transform = `scale(${1 - (ratio * 0.1)}) translateY(${scrolled * 0.3}px)`;
            
            // Background goes solid as we scroll down
            const darkness = 70 - (ratio * 70); 
            heroContainer.style.background = `radial-gradient(circle at center, #1a1a24 0%, var(--bg-color) ${darkness}%)`;
        }
    });
});
