# sort implementation by javascript

## bubble sort
```
function swap(items, firstIndex, secondIndex) {
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
}

function bubbleSort(items) {
	var len = items.length,
		i = 0,
		j = 0,
		stop;
		
	for (i; i < len; i++) {
		for (j, stop = len - i; j < stop; j++) {
			if (items[j] > items[j+1]) {
				swap(items, j, j+1);
			}
		}
	}
	
	return items;
}

function bubbleSort2(items) {
	var len = items.length,
		i,
		j;
		
	for (i = len - 1; i >= 0; i--) {
		for (j = len - 1; j >= 0; j--) {
			if (items[j] < items[j-1]) {
				swap(items, j, j-1);
			}
		}
	}
}
```

## inherit
```
function inherit(P) {
	var F = function () {};
	F.prototype = P.prototype;
	
	return new F();
}

function People(firstName) {
	this.firstName = firstName;
}

People.prototype.walk = function () {
	console.log("I'm walking!");
}

function Person(firstName, secondName) {
	People.call(this, firstName);
	
	this.secondName = secondName;
}

Person.prototype = inherit(People);
Person.prototype.constructor = Person;

Person.prototype.sayName = function () {
	console.log(this.firstName, this.secondName);
}

var person = new Person('zhang', 'san');
person.sayName();
person.walk();
```