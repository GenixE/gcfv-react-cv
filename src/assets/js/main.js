(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    // Smooth scrolling to section
    $(".btn-scroll").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: $(this.hash).offset().top,
                },
                1500,
                "easeInOutExpo"
            );
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 1500, "easeInOutExpo");
        return false;
    });

    // Portfolio details carousel
    $(document).ready(function () {

        // Initialize all collapse elements
        var collapseElementList = [].slice.call(
            document.querySelectorAll(".collapse")
        );
        var collapseList = collapseElementList.map(function (collapseEl) {
            return new bootstrap.Collapse(collapseEl, {
                toggle: false,
            });
        });

        // Handle collapsible sections
        const collapsibleSections = [
            "about",
            "skills",
            "contact",
            "services",
            "portfolio",
            "education",
            "languages"
        ];
        collapsibleSections.forEach((section) => {
            const content = document.getElementById(`${section}Content`);
            const button = document.querySelector(
                `[data-bs-target="#${section}Content"] i`
            );

            if (content && button) {
                content.addEventListener("show.bs.collapse", function () {
                    button.classList.remove("fa-plus");
                    button.classList.add("fa-minus");
                });

                content.addEventListener("hide.bs.collapse", function () {
                    button.classList.remove("fa-minus");
                    button.classList.add("fa-plus");
                });
            }
        });

        // Tooltip
        var tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        // Handle single section collapse
        const collapsibleSectionsSingle = document.querySelectorAll(
            ".collapsible-section"
        );
        collapsibleSectionsSingle.forEach((section) => {
            section.addEventListener("show.bs.collapse", function () {
                collapsibleSectionsSingle.forEach((otherSection) => {
                    if (otherSection !== section) {
                        const collapseInstance =
                            bootstrap.Collapse.getInstance(otherSection);
                        if (collapseInstance) {
                            collapseInstance.hide();
                        }
                    }
                });
            });
        });
    });
})(jQuery);