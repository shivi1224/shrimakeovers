/* =========================================
   ELEMENTS
========================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.getElementById("navbar");

const mobileLinks = document.querySelectorAll(".mobile-link");
const mobileWhatsapp = document.querySelector(".mobile-whatsapp");


/* =========================================
   OPEN / CLOSE MOBILE MENU
========================================= */

function openMenu() {

    mobileMenu.classList.add("active");

    menuButton.classList.add("active");

    menuButton.setAttribute("aria-expanded", "true");

    menuButton.setAttribute(
        "aria-label",
        "Close navigation menu"
    );

    document.body.classList.add("menu-open");
}


function closeMenu() {

    mobileMenu.classList.remove("active");

    menuButton.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    document.body.classList.remove("menu-open");
}


function toggleMenu() {

    if (mobileMenu.classList.contains("active")) {

        closeMenu();

    } else {

        openMenu();

    }

}


/* =========================================
   HAMBURGER BUTTON
========================================= */

menuButton.addEventListener("click", toggleMenu);


/* =========================================
   CLOSE WHEN NAV LINK IS CLICKED
========================================= */

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});


/* =========================================
   CLOSE WHATSAPP BUTTON
========================================= */

if (mobileWhatsapp) {

    mobileWhatsapp.addEventListener("click", () => {

        closeMenu();

    });

}


/* =========================================
   CLOSE WITH ESC KEY
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeMenu();

    }

});


/* =========================================
   CLOSE WHEN CLICKING OUTSIDE
========================================= */

mobileMenu.addEventListener("click", event => {

    if (event.target === mobileMenu) {

        closeMenu();

    }

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   HANDLE WINDOW RESIZE
========================================= */

window.addEventListener("resize", () => {

    /*
        If the user opens the mobile menu and then
        increases the screen width to desktop,
        automatically close the mobile menu.
    */

    if (window.innerWidth > 850) {

        closeMenu();

    }

});

/* =========================================
   SHRI MAKEOVERS HERO INTERACTION
========================================= */

const heroSection =
    document.querySelector(".hero-section");

const mainImage =
    document.querySelector(".main-hero-image");

const smallCard =
    document.querySelector(".small-image-card");

const visual =
    document.querySelector(".hero-visual");


/* =========================================
   MOUSE PARALLAX
========================================= */

if (heroSection && visual) {

    heroSection.addEventListener(
        "mousemove",
        function(event) {

            /*
                Disable on mobile.
            */

            if (window.innerWidth <= 850) {
                return;
            }


            const rect =
                heroSection.getBoundingClientRect();


            const mouseX =
                event.clientX - rect.left;


            const mouseY =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const moveX =
                (mouseX - centerX) / centerX;


            const moveY =
                (mouseY - centerY) / centerY;


            /*
                Main image moves very subtly.
            */

            if (mainImage) {

                mainImage.style.transform =
                    `
                    scale(1.02)
                    translate(
                        ${moveX * -5}px,
                        ${moveY * -5}px
                    )
                    `;

            }


            /*
                Small image moves in opposite
                direction.
            */

            if (smallCard) {

                smallCard.style.transform =
                    `
                    translate(
                        ${moveX * 10}px,
                        ${moveY * 10}px
                    )
                    `;

            }

        }
    );


    /* Reset when mouse leaves */

    heroSection.addEventListener(
        "mouseleave",
        function() {

            if (mainImage) {

                mainImage.style.transform =
                    "scale(1)";

            }


            if (smallCard) {

                smallCard.style.transform =
                    "translate(0, 0)";

            }

        }
    );

}

/* =================================
   LUXURY SERVICES JAVASCRIPT
================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================
           SMOOTH NAVIGATION
        ================================== */

        const navLinks =
            document.querySelectorAll(
                ".luxury-nav a"
            );


        navLinks.forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    (event) => {

                        const targetId =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !targetId ||
                            !targetId.startsWith("#")
                        ) {
                            return;
                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (!target) {
                            return;
                        }


                        event.preventDefault();


                        const nav =
                            document.querySelector(
                                ".luxury-nav"
                            );


                        const navHeight =
                            nav
                                ? nav.offsetHeight
                                : 0;


                        const targetPosition =
                            target.getBoundingClientRect()
                                .top
                            +
                            window.scrollY
                            -
                            navHeight
                            -
                            25;


                        window.scrollTo({

                            top:
                                targetPosition,

                            behavior:
                                "smooth"

                        });

                    }
                );

            }
        );



        /* =================================
           SCROLL REVEAL
        ================================== */

        const serviceCards =
            document.querySelectorAll(
                ".service-card"
            );


        const revealObserver =
            new IntersectionObserver(
                (
                    entries,
                    observer
                ) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            entry.target
                                .classList
                                .add(
                                    "is-visible"
                                );


                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -60px 0px"
                }
            );


        serviceCards.forEach(
            (card, index) => {

                /*
                   Slight stagger
                */

                card.style.transitionDelay =
                    `${index * 80}ms`;


                revealObserver.observe(
                    card
                );

            }
        );



        /* =================================
           VIDEO PLAY / PAUSE
        ================================== */

        const videos =
            document.querySelectorAll(
                ".service-media video"
            );


        const videoObserver =
            new IntersectionObserver(
                (
                    entries
                ) => {

                    entries.forEach(
                        (entry) => {

                            const video =
                                entry.target;


                            if (
                                entry.isIntersecting
                            ) {

                                /*
                                   Start video
                                   when visible
                                */

                                video
                                    .play()
                                    .catch(
                                        () => {}
                                    );

                            } else {

                                /*
                                   Pause video
                                   when far outside
                                   viewport
                                */

                                video.pause();

                            }

                        }
                    );

                },
                {
                    threshold: 0.05,

                    rootMargin:
                        "200px 0px 200px 0px"
                }
            );


        videos.forEach(
            (video) => {

                videoObserver.observe(
                    video
                );

            }
        );



        /* =================================
           ACTIVE NAVIGATION
        ================================== */

        const sections =
            document.querySelectorAll(
                ".service-card"
            );


        const navigationLinks =
            document.querySelectorAll(
                ".luxury-nav a"
            );


        const activeObserver =
            new IntersectionObserver(
                (
                    entries
                ) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            const id =
                                entry.target.id;


                            navigationLinks.forEach(
                                (link) => {

                                    link.classList.remove(
                                        "active"
                                    );


                                    if (
                                        link.getAttribute(
                                            "href"
                                        ) ===
                                        `#${id}`
                                    ) {

                                        link.classList.add(
                                            "active"
                                        );

                                    }

                                }
                            );

                        }
                    );

                },
                {
                    threshold: 0.45
                }
            );


        sections.forEach(
            (section) => {

                activeObserver.observe(
                    section
                );

            }
        );

    }
);
