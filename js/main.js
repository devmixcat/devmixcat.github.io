    $(document).ready(function(){

        $(".box-img").find("img").hide();
        $(".box").mouseover(function(){
            $(this).find("img").fadeIn("fast");
        });
        $(".box").mouseover(function(){
            $(this).find("h2").fadeOut("fast");
        });

        $(".box").mouseleave(function(){
            $(this).find("img").fadeOut("fast");
        });
         $(".box").mouseleave(function(){
            $(this).find("h2").fadeIn("fast");
        });

        $(".main-nav li a").mouseover(function(){
            $(this).css("background-color", "#ededed");
            $(this).find("span").animate({"margin-left":"20px"},"slow").css("color", "black");
        });

        $(".main-nav li a").mouseleave(function(){
            $(this).css("background-color", "transparent");
            $(this).find("span").animate({"margin-left":"0px"},"slow").css("color", "black");
        });

        $(".menu-inline li a").mouseover(function(){
            $(this).css("background-color", "#ededed");
            //$(this).find("span").animate({"margin-left":"0px"},"slow").css("color", "black");
        });

        $(".menu-inline li a").mouseleave(function(){
            $(this).css("background-color", "transparent");
            //$(this).find("span").animate({"margin-left":"0px"},"slow").css("color", "black");
        });

        $(".div-menu-logo").hover(
            function() {
                $(".div-menu-logo").css("background","#ccc");
                $(".div-menu-logo").fadeIn("slow");
            }
        );

        //偵測bitch按下
        var map = {66: false, 73: false, 84: false ,67: false,72: false};
        $(document).keydown(function(e) {
            if (e.keyCode in map) {
                map[e.keyCode] = true;
                if (map[66] && map[73] && map[84] && map[67] && map[72]) {
                    window.open("./bitch.html","BITCH");
                }
            }
        }).keyup(function(e) {
            if (e.keyCode in map) {
                map[e.keyCode] = false;
            }
        });

            /*
            $("#in-content-main-000").mouseover(function () {
                $("#in-content-main-000").removeClass("grayscale");
            });
            $("#in-content-main-000").mouseout(function () {
                $("#in-content-main-000").addClass("grayscale").fadeTo(400, 1);
            });

             $("#in-content-main-001").mouseover(function () {
                $("#in-content-main-001").removeClass("grayscale");
            });
            $("#in-content-main-001").mouseout(function () {
                $("#in-content-main-001").addClass("grayscale").fadeTo(400, 1);
            });

             $("#in-content-main-002").mouseover(function () {
                $("#in-content-main-002").removeClass("grayscale");
            });
            $("#in-content-main-002").mouseout(function () {
                $("#in-content-main-002").addClass("grayscale").fadeTo(400, 1);
            });

             $("#in-content-main-003").mouseover(function () {
                $("#in-content-main-003").removeClass("grayscale");
            });
            $("#in-content-main-003").mouseout(function () {
                $("#in-content-main-003").addClass("grayscale").fadeTo(400, 1);
            });
            */

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
        $("img.lazy").lazyload({effect : "fadeIn",placeholder : "../img/logo/load.gif"});
        //$("footer").hide();
        //gotop條件
        $("#gotop").click(function(){
            jQuery("html,body").animate({
                scrollTop:0
            },1000);
        });
        //console.log("##this.scrollTop():"+$(this).scrollTop());
        //$("footer").fadeIn("fast");

        $(window).scroll(function() {
            if ( $(this).scrollTop() > 300){
                $("#gotop").fadeIn("fast");
                if(!$("#menu-main").is(":visible")){
                    $("#header-top").fadeOut("fast");
                }
            } else {
                $('#gotop').stop().fadeOut("fast");
                $("#header-top").fadeIn("fast");
            }
            //console.log("##this.scrollTop():"+$(this).scrollTop());
            // var h = $(document).height() -( $(window).height()+$(document).scrollTop() );
            //console.log("##:"+h);
            // if( h < 100 )
            // {
            //     $("footer").fadeIn("fast");
            // }else{
            //     $("footer").fadeOut("fast");
            //}
           /*
           console.log("scrolltop:"+$(this).scrollTop());
           var getScrolltop = $(this).scrollTop();
           if(0 < getScrolltop < 450){
                $("#in-content-main-000").removeClass("grayscale");
                 $("#in-content-main-001").addClass("grayscale").fadeTo(400, 1);
                  $("#in-content-main-002").addClass("grayscale").fadeTo(400, 1);
                   $("#in-content-main-003").addClass("grayscale").fadeTo(400, 1);

           }
           if(450 < getScrolltop < 950){
                 $("#in-content-main-001").removeClass("grayscale");
                 $("#in-content-main-000").addClass("grayscale").fadeTo(400, 1);
                  $("#in-content-main-002").addClass("grayscale").fadeTo(400, 1);
                   $("#in-content-main-003").addClass("grayscale").fadeTo(400, 1);
            }
            if(950 < getScrolltop < 1450){
                 $("#in-content-main-002").removeClass("grayscale");
                 $("#in-content-main-000").addClass("grayscale").fadeTo(400, 1);
                  $("#in-content-main-001").addClass("grayscale").fadeTo(400, 1);
                   $("#in-content-main-003").addClass("grayscale").fadeTo(400, 1);
            } */
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
                $("#slides").fadeIn("slow");
            } else {
                x2menu();
                $("#slides").fadeOut("slow");
                $("#menu-main").fadeIn("slow");
            }

        }

    });

    function menu2x(){
        $(".b1").css({"transform":"translateY(0px) rotate(0deg)","width":"45px"});
        $(".b3").css({"transform":"translateY(0px) rotate(0deg)","width":"45px"});
        $(".b2").css({"transform":"translateY(0px)","left":"15px","width":"45px"});
        $(".b").css({"background":"transparent"});
    }

    function x2menu(){
        $(".b1").css({"transform":"translateY(15px) rotate(45deg)","width":"47px"});
        $(".b3").css({"transform":"translateY(-5px) rotate(-45deg)","width":"47px"});
        $(".b2").css({"transform":"translateY(4px)","left":"20px","width":"0px"});
        $(".b").css({"background":"transparent"});
    }

    //當網站load完成將loding的div隱藏
    $(window).load(function(){
        $("#div-loading").toggle("slow");
    });


    function randomColor(){
      var randomNum = randRange(0,1);
      return randomNum;
    }

    function randRange( minNum, maxNum) {
      return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }

    var blockSize = $(".block").length;

    function changeColor(){
      for(i=0; i<blockSize; i++){
        $(".random-color:eq("+i+")").css("background-color","rgb("+randomColor()+","+randomColor()+","+randomColor()+")");
      }
          setTimeout(function(){
        changeColor();
    },100);

    }
    //changeColor();
    setTimeout(function(){
        changeColor();
    },100);
