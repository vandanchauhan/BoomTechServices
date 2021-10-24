$(document).ready(function () {
  $('.icon1').hover(function (e) {
      e.preventDefault();
      console.log('Image clicked!');
      $('.appDetails').addClass('show-content');
      setTimeout(function(){
      	    $('.appDetails').removeClass('show-content');
      }, 5000);
  });

  	  $('.icon2').hover(function (e) {
      e.preventDefault();
      console.log('Image clicked!');
      $('.webDetails').addClass('show-content');
      setTimeout(function(){
      	    $('.webDetails').removeClass('show-content');
      }, 5000);
  });


  $('.icon3').hover(function (e) {
      e.preventDefault();
      console.log('Image clicked!');
      $('.smmDetails').addClass('show-content');
      setTimeout(function(){
      	    $('.smmDetails').removeClass('show-content');
      }, 5000);
  });

  $('.icon4').hover(function (e) {
      e.preventDefault();
      console.log('Image clicked!');
      $('.designDetails').addClass('show-content');
      setTimeout(function(){
      	    $('.designDetails').removeClass('show-content');
      }, 5000);
  });

});