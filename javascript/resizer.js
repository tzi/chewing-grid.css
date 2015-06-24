(function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn, false);
  }
})(function init() {
  
  /* DOM class manipulation */
  function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }
  function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
  }
  function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      ele.className = ele.className.replace(reg, ' ');
    }
  }


  /* Initialization */
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


  /* Drag & drop events */
  function initDrag(e) {
    var target = target = e.target || e.srcElement;
    resizable = target.parentNode;
    addClass(resizable, 'drag');
    startX = e.clientX;
    startWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  }

  function doDrag(e) {
    resizable.style.width = (startWidth + e.clientX - startX) + 'px';
  }

  function stopDrag(e) {
    removeClass(resizable, 'drag');
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
  }

  start();
});

