jQuery(document).ready(function(){
    jQuery('.owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
    });
});