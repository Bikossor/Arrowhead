function JOSH(args) {
    "use strict";
    
    if (typeof(args) != 'object') return;

    var result = "";
    var tmp = "";

    for (var s in args) {
        tmp += s;

        if(args.hasOwnProperty(s)) {
            var a = JSON.stringify(args[s]).replace(/\"/g, "").replace(/\,/g, ";");
            tmp += a;
        }
    }
    
    result = tmp;
    tmp = "";
    return result;
}