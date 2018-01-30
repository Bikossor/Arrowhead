var JOSH = (function() {
  "use strict";
  
  return {
    parse: function(args) {
      if (typeof(args) != "object") return;
      
      var styleElement = document.createElement('style'), css = "", styleSheet;

      document.head.appendChild(styleElement);
      styleSheet = styleElement.sheet;      
      styleSheet.insertRule("* { background: red }");
      
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