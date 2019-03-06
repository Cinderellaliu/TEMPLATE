$(function () {
        var Index1 = 190;
        $(window).scroll(function (event) {
            if ($(".index-title").first().offset().top - $(window).scrollTop() <= Index1) {
                $("#myScrollspy ul.nav-pills").css("top", "60px");
            }
            else {

                $("#myScrollspy ul.nav-pills").css("top", "600px");
            }
        });
    //var Index2 = 60;
    //$(window).scroll(function (event) {
    //    if ($(".index-title").last().offset().top - $(window).scrollTop() <= Index2) {
    //        $("#myScrollspy ul.nav-pills").css("position", "absolute");
    //    }
    //});
    });

//鼠标滚动事件