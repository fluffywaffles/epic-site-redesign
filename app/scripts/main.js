/* jshint devel:true */

var loaderImg = $('img#main-logo');

$('#page-loader').click(function() {
  var overlay = $(this);
  overlay.addClass('animate');
  loaderImg.addClass('animate');

  setTimeout(function() {
    overlay.addClass('loaded');
  }, 2000);
});
