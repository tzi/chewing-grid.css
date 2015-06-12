(function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn, false);
  }
})(function init() {

  var startX, startWidth, resizable;

  function start() {
    var resizableList = document.querySelectorAll('.resizable');
    for (var i=0; i<resizableList.length; i++) {
      var resizable = resizableList[i];
      var resizer = document.createElement('div');
      resizer.className = 'resizer';
      resizable.appendChild(resizer);
      resizer.addEventListener('mousedown', initDrag, false);
    }
  }

  function initDrag(e) {
    var target = target = e.target || e.srcElement;
    resizable = target.parentNode;
    startX = e.clientX;
    startWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  }

  function doDrag(e) {
    resizable.style.width = (startWidth + e.clientX - startX) + 'px';
  }

  function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
  }

  start();
});

