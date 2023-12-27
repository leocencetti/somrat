/*--------------------------------
    Start Preloader Animation
----------------------------------*/
window.onload = function() {
  fadeOutEle(document.querySelector('.preloader'));
  makeRecaptchaRequired()
};

function makeRecaptchaRequired() {
  var el = document.getElementById('g-recaptcha-response');
  if (el) {
    el.setAttribute('required', 'required');
  }
}

function fadeOutEle(el) {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.classList.add('done');
      el.style.opacity = null;
    } else {
      requestAnimationFrame(fade);
    }
  })();
};
/*--------------------------------
End Preloader Animation
----------------------------------*/
