var JOSH = (function() {
  "use strict";
  
  var _target, _element, _stylesheet, _document;
  _document = document;

  var _append = function(css) {
    if (_target == "head") {
      _element = _document.head;
    }
    else if (_target == "body") {
      _element = _document.body;
    }
    else {
      throw "[JOSH]: Unrecognized target!";
    }
    
    _stylesheet = _document.createElement("style");
    _stylesheet.innerHTML = css;
    _element.appendChild(_stylesheet);
  }

  return {
    parse: function(args, target = "head") {
      _target = target.toLowerCase();
      if (!args) throw "[JOSH]: No arguments!";

      var result = "";
      
      if (typeof args == "object") {
        for (var selector in args) {
          result += selector + "{";
  
          for (var attribute in args[selector]) {
            result += attribute + ":" + args[selector][attribute] + ";";
          }
  
          result += "}";
        }
        
        _append(result);
      }
      else if (typeof args == "string") {
        _append(args);
      }
      else {
        throw "[JOSH]: Invalid arguments!";
      }
    }
  };
})();