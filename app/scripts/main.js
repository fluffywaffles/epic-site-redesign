/* jshint devel:true */

var loaderImg = $('img#main-logo');
var video     = $('section#main video');
var underlay  = $('#loader-underlay');
var titles    = $('.title, .subtitle');

var loaderComponents = $('#loader-underlay, .curtain, #main-logo, .title, .subtitle');

loaderComponents.click(function() {
  loaderComponents.addClass('animate');

  video[0].play();

  setTimeout(function() {
    loaderComponents.addClass('loaded');
  }, 1800);
});
