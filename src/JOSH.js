var JOSH = (function() {
  "use strict";
  
  return {
    parse: function(args) {
      if (args && typeof(args) != "object") return;
      
      var css = "";
      
      for (var selector in args) {
        css += selector + "{";

        for (var attribute in args[selector]) {
          css += attribute + ":" + args[selector][attribute] + ";";
        }

        css += "}";
      }
      
      return css;
    }
  };
})();