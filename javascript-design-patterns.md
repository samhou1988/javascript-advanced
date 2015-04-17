# Javascript Design Patterns

## The Constructor Pattern
### Object Creation
```
var newObject = {};
var newObject = new Object();
var newObject = Object.create(Object.prototype);
```
```
var defineProp = function (obj, key, value) {
	var config = {
		value: value,
		writable: true,
		enumerable: true,
		configurable: true
	};
	
	Object.defineProperty(obj, key, config);
};

var person = Object.create( Object.prototype );

// set person object property and method
defineProp(person, "car", "Deloren");

console.log(person.car);
```