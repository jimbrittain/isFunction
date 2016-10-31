"use strict";
describe("isFunction Test Suite", function(){
    var __imns = function(){ return window; }
    adr = __imns();
    var obj = {}, arr = [], fun = function(){};
    it("isFunction is a function", function(){ expect(typeof adr.isFunction === 'function').toBe(true); });
    it("isFunction: {Function} = true", function(){ expect(adr.isFunction(fun)).toBe(true); });
    it("isFunction: {String} = false", function(){ expect(adr.isFunction('function')).toBe(false); });
    it("isFunction: {Number} = false", function(){ expect(adr.isFunction(1234)).toBe(false); });
    it("isFunction: {Object} = false", function(){ expect(adr.isFunction(obj)).toBe(false); });
    it("isFunction: {Array} = false", function(){ expect(adr.isFunction(arr)).toBe(false); });
    it("isFunction: undefined = false", function(){ expect(adr.isFunction(undefined)).toBe(false); });
    it("isFunction: {Function} (anonymous) = true", function(){ expect(adr.isFunction(function(){})).toBe(true); });
    it("isFunction: {Function} (inbuilt) = true", function(){ expect(adr.isFunction(Object.prototype.toString)).toBe(true); });
});
