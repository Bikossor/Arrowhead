var JOSH = (function() {
  "use strict";
  
  var _target, _element, _document = document, _stylesheet = _document.createElement("style");

  var _append = function(css) {
    if (_target == "head") {
      _element = _document.head;
    }
    else if (_target == "body") {
      _element = _document.body;
    }
    else {
      throw new Error();
    }
    
    _stylesheet.innerHTML = css;
    _element.appendChild(_stylesheet);
  }

  return {
    parse: function(args, target = "head") {
      _target = target.toLowerCase();
      if (!args) throw new Error();

      var result = "";
      
      if (typeof args == "object" && args.length >= 1) {
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
        throw new Error()
      }
      return true;
    }
  };
})();
module.exports = JOSH;