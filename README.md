# Javascript isFunction function
isFunction attempts to determine if a supplied variable is a function, uses a comparison rather than instance method due to browser vagaries.
## Usage
```
    var o = new Object();
    isFunction(o) === false;
    o = function(){ return true; };
    isFunction(o) === true;
    o = new Function('return true;');
    isFunction(o) === true;
```

## Methods

1. `typeof *afunction* === typeof *f*`
2. `*f* instanceof Function`

## Issues

* Error prone? False positives.
* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing
