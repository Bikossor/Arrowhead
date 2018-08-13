/**
 * @author André Lichtenthäler
 * @license GPL-3.0
 * @name JOSH
 * @version 1.0.2
 */

var JOSH = (function () {
	"use strict";

	var styleElement = document.createElement("style"),
		validHTMLElements = ["head", "body"];
	
	var getObjectType = function(obj) {
		return Object.prototype.toString.call(obj);
	};

	var appendToHTMLElement = function(htmlElement) {
		if(validHTMLElements.includes(htmlElement)) {
			document[htmlElement].appendChild(styleElement);
		}
		else {
			throw new Error("HTMLElement '" + htmlElement + "' not valid!");
		}
	};

	return {
		/** Parses either a string or an object to css.
		 * @public
		 * @since 0.1.0
		 * @param {string|object} args
		 * @param {string} [target]
		 * @returns {!boolean}
		 */
		parse: function(args, target) {
			target = target || "head";
			appendToHTMLElement(target);

			if(getObjectType(args) === '[object Array]') {
				for(var key in args) {
					styleElement.sheet.insertRule(args[key]);
				}
			}
		}
	};
})();

if (typeof module !== "undefined" && module.exports) {
	module.exports = JOSH;
}