jQuery(document).ready(function ($) {
    $("input[type='tel']").each(function () {
        $(this).mask("+799999999999999999", {
            placeholder: "",
            autoclear: false
        });
    });

    $('.form input').on('change', function () {
        if ($(this).val() != '') {
            $(this).parent().find('.form__input__text').addClass('focus');
        } else {
            $(this).parent().find('.form__input__text').removeClass('focus')
        }
    });

    if ($(window).width() > 1025) {
        $('.sendorder').prev('section').css('paddingBottom', '150px');
    }

    $('.collapse-text').readmore({
        speed: 200,
        collapsedHeight: 300,
        moreLink: '<span class="biglink">Развернуть текст</span>',
        lessLink: '<span class="biglink">Свернуть текст</span>',
    });

    var taskWrapSwiper = new Swiper('.task__wrapslider', {
        speed: 600,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 4000
        }
    });

    $('.task__slider').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 5,
        slideMargin: 15,
        enableDrag: false,
        enableTouch: false,
        currentPagerPosition: 'middle',
        controls: false,
        thumbMargin: 15,
        galleryMargin: 15,
        responsive: [{
            breakpoint: 720,
            settings: {
                slideMargin: 10,
                thumbItem: 3,
            }
        },
        ]
    });

    $(".jp-jplayer").each(function (index, el) {
        $(this).parent().find('.jp-audio').addClass('jp_container_' + (index + 1));
        $(this).jPlayer({
            ready: function (event) {
                $(this).jPlayer("setMedia", {
                    mp3: $(this).data('file')
                });
            },
            supplied: "mp3, m4a, oga",
            wmode: "window",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: false,
            toggleDuration: true,
            cssSelectorAncestor: ".jp_container_" + (index + 1)
        });
    });

    $('.play-video').on('click', function (event) {
        $(this).addClass('visible').find('iframe')[0].src += "&autoplay=1";
    });

    $(".light-gallery").lightGallery({
        download: false,
        share: false,
        thumbnail: false,
        selector: '.light-gallery__item'
    });

    var blankReviewswiper = new Swiper('.blankreview__slider', {
        slidesPerView: 6,
        spaceBetween: 25,
        pagination: {
            el: '.blankreview .swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '.blankreview .swiper-button-prev',
            nextEl: '.blankreview .swiper-button-next'
        },
        breakpoints: {
            998: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            720: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        },
        autoplay: {
            delay: 4000
        }
    });

    var mediareviewVideoSwiper = new Swiper('.mediareview--video .mediareview__slider', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
            el: '.mediareview--video .swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '.mediareview--video .swiper-button-prev',
            nextEl: '.mediareview--video .swiper-button-next'
        },
        breakpoints: {
            998: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
            },
            720: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
            }
        },
        autoplay: {
            delay: 4000
        }
    });

    var mediareviewAudioSwiper = new Swiper('.mediareview--audio .mediareview__slider', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
            el: '.mediareview--audio .swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '.mediareview--audio .swiper-button-prev',
            nextEl: '.mediareview--audio .swiper-button-next'
        },
        breakpoints: {
            998: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
            },
            720: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
            }
        },
        autoplay: {
            delay: 4000
        }
    });

    $('.aside__toggle').on('click', function (event) {
        $(this).toggleClass('active').next('.aside__wrap').toggleClass('visible');
    });

    var wow = new WOW({
        offset: 300,
        mobile: false,
    });
    wow.init();

    if ($('.map_canvas').length) {
        mapInitialize();
    }
});

function mapInitialize() {

    $('.map_canvas').each(function (index, el) {
        elem = "map_canvas_" + (index + 1);
        coord = [];
        center = [];
        brooklyn = [];
        $(this).find('.coord').each(function (index, el) {
            coord[index] = $(this).attr('data-coord').split(',');
            brooklyn[index] = {
                lat: Number(coord[index][0]),
                lng: Number(coord[index][1]),
            };
        });
        for (var i = 0; i < brooklyn.length; i++) {
            center[i] = {
                lat: brooklyn[i].lat,
                lng: brooklyn[i].lng
            }
        }
        var mapOptions = {
            zoom: 16,
            center: center[0],
            mapTypeControl: false,
            scrollwheel: false,
            navigationControl: false,
            scaleControl: false,
            draggable: true,
            streetViewControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            }
        };

        if ($(window).width() <= 1180) {
            mapOptions.draggable = false;
        }

        map = new google.maps.Map(document.getElementById(elem), mapOptions);

        marker = new google.maps.Marker({
            map: map,
            position: brooklyn[0],
        });
    });


}