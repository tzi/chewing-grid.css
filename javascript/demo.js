/* Initialization */
var demoResizer;
ready(function init() {
  demoResizer = resizer.init('.resizable');
});


/* Setting management */
function initAllSetting(demoNode) {
  var options = [
    ['column-max', 4, function (a) {
      return (100 / a) + '%'
    }],
    ['gutter-size', '1em', function (a, b) {
      return (a / 2) + b
    }],
    ['card-min', '200px'],
    ['card-max', '400px']
  ];
  for (var i = 0; i < options.length; i++) {
    initOneSetting(options[i][0], options[i][1], options[i][2]);
  }

  function initOneSetting(settingName, value, calc) {
    var styleNode = demoNode.contentWindow.document.getElementById('style-' + settingName);
    var template = styleNode.innerHTML;
    var input = document.forms.controls[settingName];
    input.value = value;
    input.addEventListener('input', function () {
      applySetting();
      demoResizer.update();
    });
    applySetting();

    function applySetting() {
      var value = input.value;
      if (typeof calc !== "undefined") {
        value = calc(getNumeric(value), getUnit(value))
      }
      var generated = template.replace('/***/', value);
      styleNode.innerHTML = generated;
    }

    function getNumeric(value) {
      return value.match(/\d+/);
    }

    function getUnit(value) {
      return value.match(/\D+$/);
    }
  }
}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading') fn();
    });
  }
}