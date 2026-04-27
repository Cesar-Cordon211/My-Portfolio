$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // download resume button
    const downloadLinks = document.querySelectorAll(".hire-btn");

    downloadLinks.forEach(button => {
        button.addEventListener("click", () => {
            const a = document.createElement("a");
            a.href = "./images/cesar-resume.pdf";
            a.download = "cesar-resume.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });


    // owl carousel script 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true, 
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    })
});

// Handle form success/error messages
const params = new URLSearchParams(window.location.search);

if (params.get("success") === "1") {
    alert("Message sent successfully!");
}

if (params.get("error") === "1") {
    alert("Something went wrong. Please try again.");
}

// Translate into spanish
const translations = {
    en: {
        page_title: "<a href='#'>My <span>Portfolio</span></a>",
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",

        home_intro: "Hello, my name is",
        home_role: "and I'm a <span>Web Developer & Designer</span>",

        about_title: "About Me",
        about_header: "My name is Cesar and I'm a <span>Web Developer & Designer</span>",
        about_p1: "I'm a web developer focused on building clean, responsive, and user friendly websites.",
        about_p2: "Alongside development, I've worked in a family trucking business managing operations.",
        about_p3: "I'm detail oriented, adaptable, and always improving my skills.",
        about_p4: "I'm currently open to work and looking for opportunities.",
        resume_btn: "Download Resume",

        section_title: "What I Can Do",
        card1_title: "Web Development",
        card1_p: "I build responsive, fast, and user friendly websites using modern technologies like HTML, CSS, and JavaScript. From landing pages to full business sites.",
        card2_title: "UI / Web Design",
        card2_p: "I design clean and modern interfaces focused on usability and user experience, making sure your website looks professional on all devices.",
        card3_title: "Business Solutions",
        card3_p: "With real experience in a trucking business, I understand workflows like billing, communication, and operations allowing me to build practical solutions for real world needs.",

        skills_title: "My Skills",
        skills_heading: "My Skills & Experience",
        skills_p1: "I have a strong foundation in front end web development, with experience building responsive and user friendly websites using HTML, CSS, and JavaScript. I focus on writing clean, maintainable code and creating interfaces that work smoothly across different devices.",
        skills_p2: "In addition to development, I have hands on experience working in a real business environment, managing billing systems, customer communication, and daily operations. This allows me to approach projects with both technical and practical problem solving in mind.",
        skills_p3: "I am continuously improving my skills and expanding my knowledge to stay up to date with modern web technologies and best practices.",
        project_btn: "View My Work",
        advanced: "Advanced",
        intermediate: "Intermediate",

        project_title: "My Other Projects",
        website1_title: "Sunland Trucking LLC",
        website1_p: "A trucking website for a company based in Phoenix, AZ.",
        website2_title: "Taller de Ropa Marisol (Marisol's Clothing Workshop)",
        website2_p: "A simple website that uses a clothing theme to match what their services.",
        website3_title: "Video Games (final project)",
        website3_p: "This is an old school project I made as a final project for a class. One of the first Websites I ever published",
        github_link: "GitHub Link",
        website_link: "Website Link",

        contact_title: "Contact Me",
        contact_heading: "Get in Touch",
        contact_p1: "I'm currently open to new opportunities as a web developer and available for freelance or full-time work. Whether you need a website built, improved, or have a project idea, I'd be happy to help.",
        contact_p2: "Feel free to reach out and I'll get back to you as soon as possible.",
        name: "Name",
        address: "Address",
        email: "Email",
        form_title: "Message me",
        form_name: "Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Your message...",
        form_button: "Send message",

        footer: "Created By <a href='#'>Cesar Cordon</a>"
    },

    es: {
        page_title: "<a href='#'>Mi <span>Portafolio</span></a>",
        nav_home: "Inicio",
        nav_about: "Sobre mí",
        nav_services: "Servicios",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",

        home_intro: "Hola, mi nombre es",
        home_role: "y soy un <span>Desarrollador y Diseñador Web</span>",

        about_title: "Sobre mí",
        about_header: "Mi nombre es Cesar y soy <span>Desarrollador y Diseñador Web</span>",
        about_p1: "Soy un desarrollador web enfocado en crear sitios limpios, responsivos y fáciles de usar.",
        about_p2: "Además del desarrollo, he trabajado en un negocio familiar de transporte.",
        about_p3: "Soy detallista, adaptable y siempre mejorando mis habilidades.",
        about_p4: "Actualmente estoy disponible para trabajar y buscando oportunidades.",
        resume_btn: "Descargar Currículum",

        section_title: "Qué Puedo Hacer",
        card1_title: "Desarrollo Web",
        card1_p: "Desarrollo sitios web responsivos, rápidos y fáciles de usar utilizando tecnologías modernas como HTML, CSS y JavaScript. Desde páginas de aterrizaje hasta sitios completos para empresas.",
        card2_title: "Diseño UI / Web",
        card2_p: "Diseño interfaces limpias y modernas enfocadas en la usabilidad y la experiencia del usuario, asegurando que tu sitio web se vea profesional en todos los dispositivos.",
        card3_title: "Soluciones Empresariales",
        card3_p: "Con experiencia real en un negocio de transporte, entiendo procesos como facturación, comunicación y operaciones, lo que me permite crear soluciones prácticas para necesidades del mundo real.",

        skills_title: "Mis Habilidades",
        skills_heading: "Mis Habilidades y Experiencia",
        skills_p1: "Tengo una sólida base en el desarrollo web front-end, con experiencia creando sitios web responsivos y fáciles de usar utilizando HTML, CSS y JavaScript. Me enfoco en escribir código limpio y mantenible, y en crear interfaces que funcionen de manera fluida en diferentes dispositivos.",
        skills_p2: "Además del desarrollo, tengo experiencia práctica trabajando en un entorno empresarial real, gestionando sistemas de facturación, comunicación con clientes y operaciones diarias. Esto me permite abordar los proyectos con una combinación de enfoque técnico y resolución práctica de problemas.",
        skills_p3: "Estoy en constante mejora de mis habilidades y ampliando mis conocimientos para mantenerme actualizado con las tecnologías web modernas y las mejores prácticas.",
        project_btn: "Ver Mi Trabajo",
        advanced: "Avanzado",
        intermediate: "Intermedio",

        project_title: "Mis Otros Proyectos",
        website1_title: "Sunland Trucking LLC",
        website1_p: "Sitio web para una empresa de transporte ubicada en Phoenix, AZ.",
        website2_title: "Taller de Ropa Marisol",
        website2_p: "Sitio web sencillo con temática de ropa, diseñado para representar sus servicios.",
        website3_title: "Video Games (final project)",
        website3_p: "Este es un proyecto escolar antiguo que realicé como trabajo final de una clase. Uno de los primeros sitios web que publiqué.",
        github_link: "Enlace a GitHub",
        website_link: "Enlace al sitio web",

        contact_title: "Contáctame",
        contact_heading: "Ponte en contacto",
        contact_p1: "Actualmente estoy abierto a nuevas oportunidades como desarrollador web y disponible para trabajo freelance o de tiempo completo. Ya sea que necesites crear un sitio web, mejorarlo o tengas una idea de proyecto, estaré encantado de ayudarte.",
        contact_p2: "No dudes en contactarme y te responderé lo antes posible.",
        name: "Nombre",
        address: "Dirección",
        email: "Correo electrónico",
        form_title: "Envíame un mensaje",
        form_name: "Nombre",
        form_email: "Correo",
        form_subject: "Asunto",
        form_message: "Tu mensaje...",
        form_button: "Enviar mensaje",

        footer: "Creado Por <a href='#'>Cesar Cordon</a>"
    }
};

function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    // Text content
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Placeholder content
    document.querySelectorAll("[data-key-placeholder]").forEach(el => {
        const key = el.getAttribute("data-key-placeholder");
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

// Load saved language
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
});