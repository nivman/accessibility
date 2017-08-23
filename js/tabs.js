jQuery(document).ready(function ($) {
    $("ul").focusin(function () {
        $(this).find("sub-menu").css({"visibility": "visible","opacity":"1"});
    });
    
});