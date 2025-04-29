// Initialize vanilla tilt for cards
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});

// GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    // Header animations
    gsap.from('#container-name p', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('#container-occupation', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out'
    });

    gsap.from('#header-social-media a', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        ease: 'power3.out'
    });

    // Scroll animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Project cards animation
    gsap.from('.project', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#projetos',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });

    // Service cards animation
    gsap.from('.card', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#servicos',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });
});