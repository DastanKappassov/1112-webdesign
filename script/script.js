$(function(){
    // NAV

    $(".nav>ul>li").mouseenter(function(){
        $(this).children(".subnav").stop().slideDown(200);
    });
    $(".nav>ul>li").mouseleave(function(){
        $(this).children(".subnav").stop().slideUp(200);
    });

    // SLIDE
    setInterval(function(){
        $(".slides").animate({"margin-left":"-100%"}, function(){
            $(".slide:first").appendTo(".slides");
            $(".slides").css({"margin-left":"0%"});   
        });
    }, 3000);

    // POPUP
    $(".notice>ul>li:first-child").click(function(){
        $("#popup").stop().fadeIn(200);
    });
    $(".btn").click(function(){
        $("#popup").stop().fadeOut(200);
    });
});