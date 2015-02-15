/* jshint devel:true */

var loaderImg = $('img#main-logo');
var video     = $('section#main video');
var underlay  = $('#page-loader');
var titles    = $('.title, .subtitle');

var loaderComponents = $('#page-loader, img#main-logo, .title, .subtitle');

loaderComponents.click(function() {
  loaderComponents.addClass('animate');

  video[0].play();

  setTimeout(function() {
    loaderComponents.addClass('loaded');
  }, 1800);
});
