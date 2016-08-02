    $(document).ready(function(){
            $(".main-nav li a").mouseover(function(){
                $(this).css("background-color", "#ededed");
                $(this).find("span").animate({"margin-left":"20px"},"slow").css("color", "black");
            });

            $(".main-nav li a").mouseleave(function(){
                $(this).css("background-color", "transparent");
                $(this).find("span").animate({"margin-left":"0px"},"slow").css("color", "black");
            });

            $(".div-menu-logo").hover(
                function() {
                    $(".div-menu-logo").css("background","#ccc");
                    $(".div-menu-logo").fadeIn("slow");
                }
            );
           
            $(".div-menu-logo").mouseleave(function(){
                $(this).css("background","none");
            });
            //showloading();
            $('#slides').superslides({
              animation: 'fade',
              hashchange: true,
              play: 6000
            });
            
    });

    $(function(){
        //gotop條件
        $("#gotop").click(function(){
            jQuery("html,body").animate({
                scrollTop:0
            },1000);
        });

        $(window).scroll(function() {
            if ( $(this).scrollTop() > 300){
                $("#gotop").fadeIn("fast");
            } else {
                $('#gotop').stop().fadeOut("fast");
            }
        });

    });

    //點選選單觸發事件
    $(".menu-main-trigger").click(function() {
        $("#menu-main").css({
            'z-index': 5555
        });
        //$("#menu-main").fadeToggle("slow");
        if ($("#menu-main").is(":visible")) {
    $(".b").css({"background":"#f9f9f9"});
            menu2x();
            $("#menu-main").fadeOut("slow");
            $("#slides").fadeIn();
        } else {
            x2menu();
            $("#slides").fadeOut("slow");
            $("#menu-main").fadeIn("slow");
        }
    });

    $("#menu-main").click(function(evt) {
        if ((!$(evt.target).hasClass('main-nav')) && ($(evt.target).attr('class') != undefined)) {
            //$("#menu-main").fadeToggle("slow");
            if ($("#menu-main").is(":visible")) {
                menu2x();
                $("#menu-main").fadeOut("slow");
                $("#slides").fadeIn();
            } else {
                x2menu();
                $("#slides").fadeOut("slow");
                $("#menu-main").fadeIn("slow");
            }
           
        }

    });

    function menu2x(){
        $(".b1").css({"transform":"translateY(0px) rotate(0deg)","width":"15px"});
        $(".b3").css({"transform":"translateY(0px) rotate(0deg)","width":"15px"});
        $(".b2").css({"left":"13px","width":"15px"});
        $(".b").css({"background":"transparent"});
    }

    function x2menu(){
        $(".b1").css({"transform":"translateY(5px) rotate(45deg)","width":"18px"});
        $(".b3").css({"transform":"translateY(-5px) rotate(-45deg)","width":"18px"});
        $(".b2").css({"left":"15px","width":"0px"});
        $(".b").css({"background":"transparent"});
    }
    
    //當網站load完成將loding的div隱藏
    $(window).load(function(){
        $("#div-loading").fadeOut("slow");
    });
    