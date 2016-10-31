/* */
"use strict";
/**
 * @function isFunction
 * @param {all} f
 * @return {Boolean}
 * Attempts to determine if f parameter is a legit function
 */
function isFunction(f){
    if(f !== undefined){
        var cheese = function(f){};
        if(typeof f === "function" && typeof cheese === "function"){
            return true;
        } else if(f instanceof Function){ 
            return true;
        } else { return false; }
    } else { return false; }}
