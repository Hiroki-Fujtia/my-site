//　テキストのカウントアップの仕方
var bar = new ProgressBar.Line(splash_text, { 
  easing: 'easeInOut',
  duration: 1000,
  strokeWidth: 0.2,
  color: '#555',
  trailWidth: 0.2,
  trailColor: '#bbb',
  text: {
      style: {
          position: 'absolute',
          left: '50%',
          top: '50%',
          padding: '0',
          margin: '-30px 0 0 0',
          transform: 'translate(-50%,-50%)',
          'font-size':'1.5rem',
          color: '#fff',
      },
      autoStyleContainer: false
  },
  step: function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

//アニメーションスタート
bar.animate(1.0, function() {
  $("#splash").delay(500).fadeOut(800);
});


// メニューバー
$('#toggle').click(function() {
   $(this).toggleClass("active");
   $('#overlay').toggleClass("open");
   if ($("html div").not("#overlay").hasClass("blur")){
      $("html div").not("#overlay").not(".button_container").removeClass("blur")
   }else{
      $("html div").not("#overlay").not(".button_container").addClass("blur")
   }
});

// 特定の位置までスクロール
$('.menu_aboutme').click(function() {
  $("html,body").animate({scrollTop:$(".profile_title").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_service').click(function() {
  $("html,body").animate({scrollTop:$(".service_section").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_works').click(function() {
  $("html,body").animate({scrollTop:$(".portfolio_section").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_contact').click(function() {
  $("html,body").animate({scrollTop:$(".contact_title").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

// Animate.cssのfadeInUpエフェクトを適用
$(".fadein").waypoint(function(direction) {
  if (direction === "down") {
    $(this.element).addClass("fadeInUp");
    this.destroy();
  }
}, { offset: "100%" });
