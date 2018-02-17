/**
 * @author André Lichtenthäler
 * @license GPL-3.0
 * @name JOSH
 * @version 1.0.0
 */

var JOSH = (function() {
  "use strict";
  
  var _target, _element, _document = document, _stylesheet = _document.createElement("style");

  /**
   * Appends a css-string to either the head or the body.
   * @private
   * @param {string} css 
   */
  var _append = function(css) {
    if (_target === "head") {
      _element = _document.head;
    }
    else if (_target === "body") {
      _element = _document.body;
    }
    else {
      throw new Error();
    }
    
    _stylesheet.textContent = css;
    _element.appendChild(_stylesheet);
  };

  return {
    /** Parses either a string or an object to css.
     * @public
     * @since 0.1.0
     * @param {string|object} args
     * @param {string} [target]
     * @returns {!boolean}
     */
    parse(args, target = "head") {
      _target = target.toLowerCase();

      if (!args) {
        throw new Error();
      }
      
      var result = "";
      
      if (typeof args === "object" && args.length >= 1) {
        for (var selector in args) {
          result += selector + "{";
  
          for (var attribute in args[selector]) {
            result += attribute + ":" + args[selector][attribute] + ";";
          }
  
          result += "}";
        }
        
        _append(result);
      }
      else if (typeof args === "string") {
        _append(args);
      }
      else {
        throw new Error();
      }
      return true;
    }
  };
})();
module.exports = JOSH;