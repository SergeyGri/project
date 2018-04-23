jQuery(document).ready(function(){
    jQuery('.owl-carousel-1').owlCarousel({
        items: 1,
        dots: true
    });
    jQuery('.owl-carousel-3').owlCarousel({
        items: 3,
    });
    var dialog = jQuery( "#dialog" ).dialog({
        autoOpen: false
    });
    jQuery(".forgot-password").on( "click", function(e) {
        e.preventDefault();
        dialog.dialog( "open" );
    });
    jQuery( function() {
        function runEffect() {
            var selectedEffect = jQuery( "#effectTypes" ).val();
            var options = {};
            if ( selectedEffect === "slide" ) {
                options = { percent: 50 };
            } else if ( selectedEffect === "size" ) {
                options = { to: { width: 200, height: 60 } };
            }
            jQuery( ".toggler" ).toggle( selectedEffect, options, 500 );
        }
        jQuery( ".spoiler-button" ).on( "click", function() {
            runEffect();
        });
    } );

    // jQuery(".spoiler-button").click(function(){
    //     jQuery(".toggler").slideToggle("slow");
    //     jQuery(this).toggleClass("active"); return false;
    // });
});


