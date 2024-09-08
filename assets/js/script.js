/*  ------------------
    Remove Preloader
    ------------------  */

$(window).on('load', function () {
    $('#preloader').delay(350).fadeOut('slow', function () {
        $('.profile-page, .portfolio-page, .service-page, .contact-page').hide();
    });
});

$(document).ready(function () {

    'use strict';

    /*  ---------------------
         Homepage Responsive
        ---------------------  */

    function homepageResponsive() {

        // Homepage Main Portions Responsive

        var windowsWidth = $(window).width(),
            windowsHeight = $(window).height();

        if (windowsWidth > 767) {

            $('.introduction , .menu').css({
                width: '50%',
                height: '100%'
            });

        } else {

            $('.introduction , .menu').css({
                width: '100%',
                height: '50%'
            });

        }

        // Homepage Profile Image Responsive

        var introWidth = $('.introduction').width(),
            introHeight = $('.introduction').height(),
            bgImage = $('.introduction').find('img'),
            menuBgImages = $('.menu > div img');

        if (introWidth > introHeight) {

            bgImage.css({
                width: '100%',
                height: 'auto'
            });
            menuBgImages.css({
                width: '100%',
                height: 'auto'
            });

        } else {

            bgImage.css({
                width: 'auto',
                height: '100%'
            });
            menuBgImages.css({
                width: 'auto',
                height: '100%'
            });

        }

    }

    $(window).on('load resize', homepageResponsive);

    /*  --------------
         Menu Settings
        --------------  */

    // Hide Menu

    $('.menu > div').on('click', function () {

        var introWidth = $('.introduction').width(),
            menuWidth = $('.menu').width();

        $('.introduction').animate({
            left: '-' + introWidth
        }, 1000, 'easeOutQuart');
        $('.menu').animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $('.home-page').css({
                visibility: 'hidden'
            });
        });

    });

    // Show Relative Page Onclick

    $('.menu div.profile-btn').on('click', function () {
        $('.profile-page').fadeIn(1200);
        setTimeout(function () {
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 7500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }, 100);
    });

    $('.menu div.portfolio-btn').on('click', function () {
        $('.portfolio-page').fadeIn(1200);
        setTimeout(function () {
            $('#projects').mixItUp();
        }, 100);
    });

    $('.menu div.service-btn').on('click', function () {
        $('.service-page').fadeIn(1200);
    });

    $('.menu div.contact-btn').on('click', function () {
        $('.contact-page').fadeIn(1200);
        setTimeout(function () {
            // Trigger a resize event on the map
            var map = document.querySelector('#map-canvas');
            if (map) {
                map.dispatchEvent(new Event('resize'));
            }
        }, 100);
    });

    // Close Button, Hide Menu

    $('.close-btn').on('click', function () {
        $('.home-page').css({
            visibility: 'visible'
        });
        $('.introduction, .menu').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.profile-page, .portfolio-page, .service-page, .contact-page').fadeOut(800);
    });

    /*  ----------------------------------------
         Tooltip Starter for Social Media Icons
        ----------------------------------------  */

    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();



    /*----------------------script for owl carousel sponsors---------------------*/

    $("#sponsor-list").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        stopOnHover: true,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [767, 2],
        itemsTabletSmall: [625, 2],
        itemsMobile: [479, 1]
    });



    /*  -------------------------------
         PopUp ( for portfolio page )
        -------------------------------  */

    $(function () {
        $('.show-popup').popup({
            keepInlineChanges: true,
            speed: 500
        });
    });

});

// Code pour Leaflet
document.addEventListener("DOMContentLoaded", function () {
    // Assure-toi que le conteneur de la carte existe
    var mapElement = document.getElementById('map-canvas');
    if (mapElement) {
        // Initialiser la carte
        var map = L.map('map-canvas').setView([-18.8792, 47.5079], 13); // Coordonnées d'Antananarivo

        // Ajouter une couche de carte
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Ajouter un marqueur à Antananarivo
        L.marker([-18.8792, 47.5079]).addTo(map)
            .bindPopup('Antananarivo, Madagascar')
            .openPopup();
    } else {
        console.error('Map container with ID "map-canvas" not found.');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Vérifie si Typed est défini avant de l'utiliser
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-element', {
            strings: ['Designer', 'Developer'],
            typeSpeed: 50, // Vitesse de frappe
            backSpeed: 30, // Vitesse de suppression
            loop: true,    // Pour boucler l'animation
            backDelay: 2000, // Temps d'attente avant suppression
            showCursor: false, // Désactive le curseur clignotant
        });
    } else {
        console.error('Typed.js library is not loaded.');
    }
});
