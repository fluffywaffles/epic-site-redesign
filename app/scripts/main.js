/* jshint devel:true */

var loaderImg = $('img#main-logo');
var video     = $('section#main video');

$('#page-loader').click(function() {
  var overlay = $(this);
  overlay.addClass('animate');
  loaderImg.addClass('animate');

  video[0].play();

  setTimeout(function() {
    overlay.addClass('loaded');
  }, 2000);
});
