var toggleFullview = document.getElementsByClassName('js-full-view');
for (var i=0; i < toggleFullview.length; i++) {
  toggleFullview[i].onclick = function() {
    var fullViewOverlay = document.getElementById(this.getAttribute('data-number'));
    var lazyLoadImg = fullViewOverlay.querySelector('.js-lazy-load');
    var fullViewBackButton = fullViewOverlay.querySelector('.js-back');
    fullViewOverlay.classList.add('active');
    document.querySelector('.body').classList.add('overlay-active');
    lazyLoadImg.style.backgroundImage = "url('" + lazyLoadImg.getAttribute('data-src') + "')";
    fullViewBackButton.onclick = function() {
      fullViewOverlay.classList.remove('active');
      document.querySelector('.body').classList.remove('overlay-active');
    }
  };
};
