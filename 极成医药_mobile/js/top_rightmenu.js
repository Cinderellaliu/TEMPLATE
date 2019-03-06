$(function(){
    $(".top-rightmenu-btn").on("click", function(e){
        $(this).next(".top-rightmenu-content").toggle();

        $(document).one("click", function(){
            $(".top-rightmenu-content").hide();
        });
        e.stopPropagation();
    });
    $(".top-rightmenu-content").on("click", function(e){
        e.stopPropagation();
    });


});
