jQuery(document).ready(function(){
    jQuery('.owl-carousel-1').owlCarousel({
        items: 1,
        dots: true
    });
    jQuery('.owl-carousel-3').owlCarousel({
        items: 3
    });
    var dialog = jQuery( "#dialog" ).dialog({
        autoOpen: false
    });
    jQuery(".forgot-password").on( "click", function(e) {
        e.preventDefault();
        dialog.dialog( "open" );
    });
    jQuery("#spoiler-button").on( "click", function(){
        jQuery("#spoiler").toggleClass("active");
        return false;
    });
});


