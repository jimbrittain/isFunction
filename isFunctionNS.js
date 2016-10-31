"use strict";
/* global __imns */
var adr = __imns('util.validation');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('isFunction' in adr)){
    /**
     * @function isFunction
     * @param {all} f
     * @return {Boolean}
     * @description Attempts to determine if f parameter is a legit function
     */
    adr.isFunction = function(f){
        if(typeof f !== 'undefined'){
            var test = function(f){};
            if(typeof f === typeof test){
                return true;
            } else if(f instanceof Function){ 
                return true;
            } else { return false; }
        } else { return false; }};

}
