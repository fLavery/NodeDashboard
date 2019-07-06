(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });
  
  //change image source on hover
    $('#btn1').hover(function(){
        $('#nodeIcon1').attr('src','img/CLLOG.png');
    
    });
    
    $('#btn1').mouseleave(function(){
        $('#nodeIcon1').attr('src','img/nodegrey.png');
    
    });
    
    $('#btn2').hover(function(){
        $('#nodeIcon2').attr('src','img/nodegreen.png');
    
    });
    
    $('#btn2').mouseleave(function(){
        $('#nodeIcon2').attr('src','img/nodegrey.png');
    
    });
    
    $('#btn3').hover(function(){
        $('#nodeIcon3').attr('src','img/nodeteal.png');
    
    });
    
    $('#btn3').mouseleave(function(){
        $('#nodeIcon3').attr('src','img/nodegrey.png');
    
    });
    
    $('#btn4').hover(function(){
        $('#nodeIcon4').attr('src','img/nodegold.png');
    
    });
    
    $('#btn4').mouseleave(function(){
        $('#nodeIcon4').attr('src','img/nodegrey.png');
    
    });
  
  //Chart Selection script. source: https://stackoverflow.com/questions/37995581/how-to-replace-div-content-for-button-click-on-same-page-in-bootstrap
  $(document).ready(function() {
    $("#btn1").click(function() {
        $("#node1").css("display", "block");
        $("#node2").css("display", "none");
        $("#node3").css("display", "none");
        $("#node4").css("display", "none");
    });

    $("#btn2").click(function() {
        $("#node1").css("display", "none");
        $("#node2").css("display", "block");
        $("#node3").css("display", "none");
        $("#node4").css("display", "none");
    });

    $("#btn3").click(function() {
        $("#node1").css("display", "none");
        $("#node2").css("display", "none");
        $("#node3").css("display", "block");
        $("#node4").css("display", "none");
    });

    $("#btn4").click(function() {
        $("#node1").css("display", "none");
        $("#node2").css("display", "none");
        $("#node3").css("display", "none");
        $("#node4").css("display", "block");
    });
});



})(jQuery); // End of use strict
