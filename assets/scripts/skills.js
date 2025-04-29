const skillButtons = document.querySelectorAll('.skill-btn');
const skillTitle = document.getElementById('skill-title');
const skillDescription = document.getElementById('skill-description');

const skillDetails = {
    'HTML': {
        title: 'HTML - Estrutura Web',
        description: 'Experiência sólida na criação de estruturas HTML5 semânticas, focadas em SEO, acessibilidade e boas práticas para desenvolvimento front-end moderno.'
    },
    'CSS': {
        title: 'CSS - Estilização Avançada',
        description: 'Domínio de CSS3, incluindo Flexbox, Grid Layout, animações e técnicas de responsividade para construção de interfaces elegantes e eficientes.'
    },
    'JavaScript': {
        title: 'JavaScript - Desenvolvimento Dinâmico',
        description: 'Amplo conhecimento em JavaScript moderno (ES6+), manipulação de DOM, APIs REST, aplicações SPA e integração com frameworks front-end.'
    },
    'React': {
        title: 'React - Interfaces Interativas',
        description: 'Criação de aplicações reativas e modulares utilizando React, Hooks, Context API e otimização de performance com técnicas de lazy loading.'
    },
    'Next.js': {
        title: 'Next.js - Fullstack Web',
        description: 'Desenvolvimento de aplicações web otimizadas, com server-side rendering, geração estática (SSG) e APIs integradas via Next.js.'
    },
    'Node.js': {
        title: 'Node.js - Backend e APIs',
        description: 'Construção de servidores escaláveis, APIs RESTful seguras e integração com bancos de dados usando Node.js e Express.'
    },
    'Golang': {
        title: 'Golang - Performance e Escalabilidade',
        description: 'Desenvolvimento de sistemas robustos e de alta performance com Golang, voltados para microserviços e aplicações de larga escala.'
    },
    'Tailwind CSS': {
        title: 'Tailwind CSS - Design Eficiente',
        description: 'Utilização de Tailwind para criar designs rápidos, responsivos e com consistência visual, seguindo metodologias como Atomic Design.'
    },
    'IA': {
        title: 'IA - Inteligência Artificial',
        description: 'Aplicação de técnicas de inteligência artificial, automação e IA conversacional para resolver problemas complexos, otimizar processos e aprimorar a comunicação entre usuários e sistemas.'
    },
    'UI/UX': {
        title: 'UI/UX - Experiência de Usuário',
        description: 'Desenvolvimento de interfaces centradas no usuário, prototipação com Figma, testes de usabilidade e design de fluxos intuitivos.'
    },
    'Git': {
        title: 'Git - Versionamento de Código',
        description: 'Controle de versões eficiente com Git, GitHub, GitFlow, incluindo resolução de conflitos e gerenciamento de branches em projetos colaborativos.'
    }
};

skillButtons.forEach(button => {
    const skill = button.getAttribute('data-skill');

    //Para mouse;
    button.addEventListener('mouseenter', () => {
        updateSkillDetails(skill);
    });

    button.addEventListener('mouseleave', () => {
        resetSkillDetails();
    });

    //Para toque em celular;
    button.addEventListener('click', () => {
        updateSkillDetails(skill);
    });
});

function updateSkillDetails(skill) {
    skillTitle.textContent = skillDetails[skill].title;
    skillDescription.textContent = skillDetails[skill].description;
}

function resetSkillDetails() {
    skillTitle.textContent = 'Passe o mouse sobre uma skill';
    skillDescription.textContent = 'Quando você passar o mouse sobre uma skill, verá aqui uma descrição detalhada sobre minha experiência naquela tecnologia.';
}