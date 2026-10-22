(function () {
  var v = document.getElementById('capaVideo');
  if (!v) return;
  v.muted = true;
  var tryPlay = function () { v.play().catch(function () {}); };
  tryPlay();
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) tryPlay();
  });
  ['touchstart', 'click'].forEach(function (evt) {
    document.addEventListener(evt, tryPlay, { once: true, passive: true });
  });
})();
