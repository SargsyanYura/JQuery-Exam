$(document).ready(function(){
    $({counter: 0}).animate({counter: 231},{
        duration:2500,
        easing:"linear",
        step: function(){
            $(".span1").text(Math.ceil(this.counter))
        }
    })

    $({counter: 0}).animate({counter: 385},{
        duration:2000,
        easing:"linear",
        step: function(){
            $(".span2").text(Math.ceil(this.counter))
        }
    })

    $({counter: 0}).animate({counter: 159},{
        duration:1800,
        easing:"linear",
        step: function(){
            $(".span3").text(Math.ceil(this.counter))
        }
    })

    $({counter: 0}).animate({counter: 128},{
        duration:1500,
        easing:"linear",
        step: function(){
            $(".span4").text(Math.ceil(this.counter))
        }
    })


    $("#btn").on("click", window.onscroll = function(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            $("#btn").css("display", "block")
        }
        else(
            $("#btn").css("display", "none")
        )

    

    })
    $("#btn").on("click" ,function(){
        $(document.body.scrollTop = 0)
        $(document.documentElement.scrollTop = 0)

    })


    $("nav").on("scroll", window.onscroll = function(){
        if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
            $("nav").css("background-color", "#161223")
        }
        else(
            $("nav").css("background-color", "transparent")
        )
    })
    

  


    // var $mainImg = $(".mainDiv1");

    // $(".col-img").on("click", 'img',  function(){
    //     $('.overlay').toggleClass('active');
    //     var imageURL = $(this).attr('src');
    //     $mainImg.attr('src', imageURL);


    // })
    // $(".spanimg").on("click",function(){
    //     $(".overlay").css("display","none")
    // })



  });

  function myFunction(nkar) { 
    var x =  document.getElementById('mainImg');
    x.src = nkar.src;
    var overlay = document.getElementById('overlay');
    overlay.style.display = "block"

}

// function myFunction1(nkar) { 
//     var x =  document.getElementById('mainImg');
//     x.src = nkar.src;

//     var overlay = document.getElementById('overlay');
//     overlay.style.display = "block"

// }


