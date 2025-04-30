//Inicializa a inclinação vanilla para cartas;
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});

//Animações GSAP;
document.addEventListener('DOMContentLoaded', () => {
    //Animações header;
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

    gsap.from('#header-social-media a i', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        ease: 'power3.out'
    });

    //Animação do scroll;
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

    //Animação de cartões de projeto;
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

    //Animação de cartões de serviço;
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