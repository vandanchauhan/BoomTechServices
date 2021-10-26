$(document).ready(function () {
  $('.icon1').hover(function (e) {
      e.preventDefault();
      $('.appDetails').addClass('show-content');
      $('.icon1').removeClass('floating2');
      $('.icon1').addClass('scaleDown');
      $('.icon1').addClass('iconwidth');
      setTimeout(function(){
      	    $('.appDetails').removeClass('show-content');
            $('.icon1').removeClass('iconwidth');
            setTimeout(function(){
              $('.icon1').removeClass('scaleDown');
              $('.icon1').addClass('floating2');
            }, 300)
      }, 8500);
  });

    $('.icon2').hover(function (e) {
      e.preventDefault();
      $('.webDetails').addClass('show-content');
      $('.icon2').removeClass('floating');
      $('.icon2').addClass('scaleDown');
      $('.icon2').addClass('iconwidth');
      setTimeout(function(){
            $('.webDetails').removeClass('show-content');
            $('.icon2').removeClass('iconwidth');
            setTimeout(function(){
              $('.icon2').removeClass('scaleDown');
              $('.icon2').addClass('floating');
            }, 300)            
      }, 8500);
  });

    $('.icon3').hover(function (e) {
      e.preventDefault();
      $('.smmDetails').addClass('show-content');
      $('.icon3').removeClass('floating2');
      $('.icon3').addClass('scaleDown');
      $('.icon3').addClass('iconwidth');
      setTimeout(function(){
            $('.smmDetails').removeClass('show-content');
            $('.icon3').removeClass('iconwidth');
            setTimeout(function(){
              $('.icon3').removeClass('scaleDown');
              $('.icon3').addClass('floating2');
            }, 300)            
      }, 8500);
  });

    $('.icon4').hover(function (e) {
      e.preventDefault();
      $('.designDetails').addClass('show-content');
      $('.icon4').removeClass('floating');
      $('.icon4').addClass('scaleDown');
      $('.icon4').addClass('iconwidth');
      setTimeout(function(){
            $('.designDetails').removeClass('show-content');
            $('.icon4').removeClass('iconwidth');
            setTimeout(function(){
              $('.icon4').removeClass('scaleDown');
              $('.icon4').addClass('floating');
            }, 300)            
      }, 8500);
  });

  //   $('.icon1').mouseout(function (e) {
  //     e.preventDefault();
  //     $('.appDetails').removeClass('show-content');
  //     $('.icon1').addClass('floating2');
  //     // Scale down animation of 1 sec
  //     $('.icon1').removeClass('scaleDown');
  //     setTimeout(function(){
  //         $('.icon1').removeClass('iconwidth');
  //     }, 1000);

  //     setTimeout(function(){
  //           $('.appDetails').addClass('show-content');
  //     }, 8500);
  // });

});