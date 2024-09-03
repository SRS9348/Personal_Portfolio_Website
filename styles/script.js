// JavaScript code to enhance transitions and effects

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav__link");
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.querySelector(".nav__toggle");
    const heroSection = document.querySelector(".hero");
    const sections = document.querySelectorAll(".section");
    const contactButton = document.querySelector(".contact__button");

    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust offset for fixed header
                behavior: "smooth"
            });
        });
    });

    // Toggle mobile menu
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove("show");
        }
    });

    // Add a scroll effect to animate sections
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (scrollTop > sectionTop && scrollTop < sectionTop + sectionHeight) {
                section.classList.add("fade-in");
            } else {
                section.classList.remove("fade-in");
            }
        });

        // Parallax effect for hero section
        heroSection.style.backgroundPositionY = `${scrollTop * 0.5}px`;
    });

    // Animate contact button on hover
    contactButton.addEventListener("mouseover", () => {
        contactButton.style.transform = "scale(1.05)";
        contactButton.style.boxShadow = "0px 10px 36px rgba(0, 0, 0, 0.15)";
    });

    contactButton.addEventListener("mouseout", () => {
        contactButton.style.transform = "scale(1)";
        contactButton.style.boxShadow = "none";
    });

    // Add an effect to the images in the hero section
    const heroImages = document.querySelectorAll(".images img");
    heroImages.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});
