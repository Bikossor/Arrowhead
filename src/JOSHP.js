var JOSH = (function() {
  "use strict";
  
  return {
    parse: function(args) {
      if (args && typeof(args) != "object") return;
      
      var styleElement = document.createElement("style");
      
      document.head.appendChild(styleElement);
      var styleSheet = styleElement.sheet;
      
      for (var selector in args) {
        for (var attribute in args[selector]) {
          var rule = selector + "{" + attribute + ":" + args[selector][attribute] + "}";
          styleSheet.insertRule(rule);
        }
      }
    }
  };
})();