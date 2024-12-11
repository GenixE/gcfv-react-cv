/* global WOW, bootstrap, jQuery */

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

        // Tooltip
        const tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    });
})(jQuery);