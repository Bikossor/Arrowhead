var JOSH = (function() {
  "use strict";
  
  return {
    parse: function(args) {
      if (!args) throw "[JOSH]: No arguments!";

      var result = "";
      
      switch (typeof(args)) {
        case "object":
        
          for (var selector in args) {
            result += selector + "{";
    
            for (var attribute in args[selector]) {
              result += attribute + ":" + args[selector][attribute] + ";";
            }
    
            result += "}";
          }
          
          return result;  
        break;
        case "string":

        break;
        default:
          throw "[JOSH]: Invalid arguments!";
        break;
      }
    }
  };
})();