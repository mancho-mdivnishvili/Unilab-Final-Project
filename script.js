$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".burger-icon").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".burger-icon").removeClass("active");
        }
    });
});