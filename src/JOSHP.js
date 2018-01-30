var JOSH = (function() {
  "use strict";
  
  return {
    parse: function(args) {
      if (typeof(args) != "object") return;
      
      var styleElement = document.createElement('style'), css = "", styleSheet, cssSelectors;

      cssSelectors = Object.keys(args);

      document.head.appendChild(styleElement);
      styleSheet = styleElement.sheet;      
      
      for(var i = 0; i < cssSelectors.length; i++) {
        styleSheet.insertRule(cssSelectors[i] + JSON.stringify(args[cssSelectors[i]]));
      }
      
      return css;
    }
  };
})();