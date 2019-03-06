$(function(){
   $(".top-menu-list>ul>li").click(function(){
       $(this).children("a").addClass("active");
       $(this).siblings().children("a").removeClass("active");
       $(this).find("ul").show();
       $(this).siblings().find("ul").hide();
   });
});