jQuery(document).ready(function($) {

    /************** Gallery Hover Effect *********************/
    $(".overlay").hide();

    $('.item').hover(
        function() {
            $(this).find('.overlay').addClass('animated fadeIn').show();
        },
        function() {
            $(this).find('.overlay').removeClass('animated fadeIn').hide();
        }
    );


    /************** LightBox *********************/
    $(function() {
        $('[data-rel="lightbox"]').lightbox();
    });

});