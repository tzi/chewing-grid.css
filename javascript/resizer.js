(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.resizer = factory(root.b);
  }
}(this, function () {
  'use strict';

  /* Initialization */
  function init(selector) {
    return initElementList(document.querySelectorAll(selector));
  }
  
  function initElementList(elementList) {
    var updaterList = [];
    for (var i=0; i<elementList.length; i++) {
      updaterList.push(initElement(elementList[i]));
    }
    
    function update() {
      for (var i=0; i<updaterList.length; i++) {
        updaterList[i].update();
      }
    }

    return {
      update: update
    }
  }

  function initElement(element) {
    // Add resizer
    var resizer = document.createElement('div');
    resizer.className = 'resizer';
    element.appendChild(resizer);
    
    // Start drag listener
    var startDrag = dragConstructor(element);
    resizer.addEventListener('mousedown', startDrag, false);
    
    // Init iframe children
    var iframeList = element.querySelectorAll('iframe');
    for (var j=0; j<iframeList.length; j++) {
      initIframe(iframeList[j]);
    }
    
    function update() {
      for (var i=0; i<iframeList.length; i++) {
        resizeIframe(iframeList[i]);
      }
    }
    
    return {
      update: update
    }
  }


  /* Drag & drop events */
  function dragConstructor(resizable) {
    var startX, startWidth;
    
    function start(e) {
      addClass(resizable, 'drag');
      startX = e.clientX;
      startWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10);
      document.documentElement.addEventListener('mousemove', update, false);
      document.documentElement.addEventListener('mouseup', stop, false);
    }

    function update(e) {
      resizable.style.width = (startWidth + e.clientX - startX) + 'px';
    }

    function stop(e) {
      removeClass(resizable, 'drag');
      document.documentElement.removeEventListener('mousemove', update, false);
      document.documentElement.removeEventListener('mouseup', stop, false);
    }
    
    return start;
  }

  
  /* Iframe events */  
  function initIframe(iframe) {
    onIframeUpdate(iframe, debounce(function() {
      resizeIframe(iframe);
    }, 150));
  }
  
  function resizeIframe(iframe) {
    var body = iframe.contentWindow.document.body;
    body.style.overflow = 'hidden';
    var height = body.offsetHeight + 10;
    iframe.style.height = height + 'px';
  }
  
  function onIframeUpdate(iframe, fn) {
    var w = iframe.contentWindow;
    var doc = w.document;
    
    // Onload
    if (doc.readyState != 'loading'){
      fn();
    } else if (doc.addEventListener) {
      doc.addEventListener('DOMContentLoaded', fn);
    } else {
      doc.attachEvent('onreadystatechange', function() {
        if (doc.readyState != 'loading') fn();
      });
    }
    
    // Onresize
    if (w.addEventListener) {
      w.addEventListener('resize', fn);
    } else {
      w.attachEvent('onresize', fn);
    }
  }
  

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

  /* Debounce */
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
  return {
    init: init,
    initElementList: initElementList,
    initElement: initElement
  };
}));

