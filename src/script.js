$(document).ready(() => {
    $(window).scroll(() => {
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // script para scroll-up
    $('.scroll-up-btn').click(() => {
        $('html').animate({scrollTop: 0});
    });


    // Script para alterar menu/navbar 
    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Script de animacao

    var typed = new Typed(".habilidades", {
        strings: ["Desenvolvedor FullStack", "Programador Python"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".habilidades-2", {
        strings: ["Desenvolvedor FullStack", "Programador Python"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 200,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    })
})