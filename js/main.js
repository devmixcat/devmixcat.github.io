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

    $(".menu-main-trigger").click(function() {
        $("#menu-main").css({
            'z-index': 5555
        });
        //$("#menu-main").fadeToggle("slow");
        if ($("#menu-main").is(":visible")) {
            $("#menu-main").fadeOut("slow");
            $("#slides").fadeIn();
        } else {
            $("#slides").fadeOut("slow");
            $("#menu-main").fadeIn("slow");
        }
    });

    $("#menu-main").click(function(evt) {
        if ((!$(evt.target).hasClass('main-nav')) && ($(evt.target).attr('class') != undefined)) {

            //$("#menu-main").fadeToggle("slow");
            if ($("#menu-main").is(":visible")) {
                $("#menu-main").fadeOut("slow");
                $("#slides").fadeIn();
            } else {
                $("#slides").fadeOut("slow");
                $("#menu-main").fadeIn("slow");
            }
        }
    });

    function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    };
    
    $(window).load(function(){
        $("#div-loading").fadeOut("slow");
    });
    