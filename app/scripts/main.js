/* jshint devel:true */

var video     = $('section#main video');

var loaderComponents = $('#loader-underlay, .curtain, #main-logo, .title, .subtitle');

$('body').on('reveal', function() {
  loaderComponents.addClass('animate');

  video[0].play();

  setTimeout(function() {
    loaderComponents.addClass('loaded');
  }, 1800);
});

var loaderOverlay = $('#loader-overlay');

loaderOverlay.on('hike', function(e, hikeAmount) {
  loaderOverlay.newMaxHeight = (loaderOverlay.newMaxHeight || 100) - hikeAmount;
  if (loaderOverlay.newMaxHeight < 0) {
    loaderOverlay.newMaxHeight = 0;
    clearInterval(simulateLoading);
    $('body').trigger('reveal');
  }
  loaderOverlay.css({ maxHeight: loaderOverlay.newMaxHeight + '%' });
});

var simulateLoading = setInterval(function() {
  if(Math.random() > 0.5) {
    loaderOverlay.trigger('hike', Math.random() * 10);
  }
}, 100);
