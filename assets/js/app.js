$(function () {
// search side bar start
    $('#search1').on('click', ()=>{
      $('#search').addClass('show');
    })
    $('#search_close_btn').on('click', ()=>{
        $('#search').removeClass('show');
      })
      
// search side bar end
// Hero Slider Activation Js Start 
 $(".hero_slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    speed: 600,
    dots: true,
    dotsClass: "hero_slider_dots",
});
// Hero Slider Activation Js End 

//New Product Slider Activation Js Start

     $('.new_product_slider').slick({
        slidesToShow:4,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots:true,
        dotsClass:'product_slider_dots',
        responsive:[
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow:3,
                }
            }
        ]
        
        
    });
//New Product Slider Activation Js End 

$("#deals_timer").countdown("2023/12/12", function (event) {
    var $this = $(this).html(
        event.strftime(
            "" +
                "<div><h4>%D</h4> <p>Days</p></div> " +
                "<span>:</span>"+
                "<div><h4>%H</h4> <p>Hour</p></div> " +
                "<span>:</span>"+
                "<div><h4>%M</h4> <p>Minute</p></div> " +
                "<span>:</span>"+
                "<div><h4>%S</h4> <p>sec</p></div>"
        )
    );
});


    
});
// Deals Section Starts
$(".deals_slider").slick({
    slidesToShow: 2,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    dotsClass: "deals_slider_dots",
});

// Deals Section Ends


const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//New Product Slider Activation Js Start

$('.new_product_box').slick({
    slidesToShow:3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots:true,
    dotsClass:'latest_slider_dots'
    
});
//New Product Slider Activation Js End 

// cart section start

$('.shopping_cart').on('click', function () {
    $('#shopping_cart').addClass('show')
  })
  
  $('.btn_close').on('click', function () {
    $('#shopping_cart').removeClass('show')
  })
  
// cart section end

