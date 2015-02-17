/* jshint devel:true */

var video = $('section#main video');

var loaderComponents = $('#loader-underlay, .curtain, #main-logo, .title, .subtitle, header *');

$('body').on('reveal', function() {
  loaderComponents.addClass('animate load-animation');

  video[0].play();

  setTimeout(function() {
    loaderComponents.addClass('loaded');

    setInterval(function() {
      var current = $('.slogan.current');
      next = (current.removeClass('current')
                     .next().hasClass('slogan')
              ? current.next()
              : $('.slogan').first());
      next.addClass('current')
    }, 3500);
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

// TODO(jordan): loading simulation. Should replace with real load.
var simulateLoading = setInterval(function() {
  // 1/2 the time, load by between 1 and 8 %
  if(Math.random() > 0.5) {
    loaderOverlay.trigger('hike', (Math.random() + 1) * 4);
  }
  // NOTE(jordan): Chad likes 75ms best. I'll humor Chad, he's a good guy.
}, 75);

