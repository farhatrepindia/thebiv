$('#homePageCarousel .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
      autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    // animateOut: "slideOutDown",
    // animateIn: "slideInDown",
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('#archiveslider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
      autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:6
        }
    }
});

$(".navToggle").click (function(){
  $(this).toggleClass("open");
  $("nav").toggleClass("open");
});



         // header
         
         window.onscroll = function() {myFunction()};
         
         var header = document.getElementById("myHeader");
         var sticky = header.offsetTop;
         
         function myFunction() {
          if (window.pageYOffset > 55) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
          if (window.pageYOffset > 100) {
            header.classList.add("sticky-fixed");
          } else {
            header.classList.remove("sticky-fixed");
          }
         }
         

              $(function(){
      $(".tabs li").on("click" , function(){
         $(this).addClass("active").siblings().removeClass("active");
         var data = $(this).data("rel");
         $(".tabcontent_container").find(data).fadeIn().siblings().hide();
         $("html , body").animate({
            scrollTop: $(".tabcontent_container").offset().top - 85
         });
      });
      $(".tabbed_content h3").on("click" , function(){
         if($(window).width() < 767){
            $(this).addClass("active").parents(".tabbed_content").siblings().children("h3").removeClass("active");
            $(this).next(".tab-detail").slideDown().parents(".tabbed_content").siblings().children(".tab-detail").slideUp();
            $(".tabbed_content").removeClass("active");
            setTimeout(function(){
               $("html , body").animate({
                  scrollTop: $(".tabbed_content h3.active").offset().top - 85
               });
            }, 400);
            // $("html , body").animate({
            //       scrollTop: $(this).offset().top -0
            //    }, 500);
         }
      });
      });


  $(function() {
           $(".filter-menu .select-brand").on("click", function() {
               if ($(window).width() < 980) {
                  $(this).toggleClass("angle-icon");
                   $(this).next("ul").slideToggle();
               }
           });
           $(".nav-tabs li").on("click", function() {
               if ($(window).width() < 980) {
                   var liText = $(this).children("a").text();
                   $(".select-brand").removeClass("angle-icon");
                   $(".filter-menu .select-brand").text(liText);
                   $(this).parents("ul").slideUp();
               }
           });
         
         });