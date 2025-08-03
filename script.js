document.addEventListener('DOMContentLoaded', function() {

    // Typing effect for the hero section
    const options = {
        strings: ['Data Scientist.', 'AI Enthusiast.', 'Developer.', 'Problem Solver.'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
    };

    const typed = new Typed('.typing-effect', options);


    // Fade-in effect for sections on scroll
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, // item is 20% in view
        rootMargin: "0px 0px -50px 0px" // trigger animation a bit sooner
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});