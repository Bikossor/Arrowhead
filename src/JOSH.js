var JOSH = (function() {
  "use strict";
  
  var _target, _element, _stylesheet;
  var _append = function(x) {
    switch (_target) {
      case "head":
        _element = document.head;
      break;
      case "body":
        _element = document.body;
      break;
      default:
        throw "[JOSH]: Unrecognized target!"
      break;
    }
    
    _stylesheet = document.createElement("style");
    _stylesheet.innerHTML = x;
    _element.appendChild(_stylesheet);
  }

  return {
    parse: function(args, target = "head") {
      _target = target.toLowerCase();
      if (!args) throw "[JOSH]: No arguments!";

      var result = "";
      
      switch (typeof args) {
        case "object":
        
          for (var selector in args) {
            result += selector + "{";
    
            for (var attribute in args[selector]) {
              result += attribute + ":" + args[selector][attribute] + ";";
            }
    
            result += "}";
          }
          
          _append(result);
        break;
        case "string":
          _append(args);
        break;
        default:
          throw "[JOSH]: Invalid arguments!";
        break;
      }
    }
  };
})();