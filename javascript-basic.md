## basic data type
```
null, '', undefined, 0, false, NaN
```

### string reversed
```
String.prototype.reversed = function () {
	var r = "";
	for (var len = this.length - 1; i >= 0; i--) {
		r += this[i];
	}
	
	return r;
}

var str = "Hello World";

// dlroW olleH
var rStr = str.reversed();
```

### Closure
```
function makeAdder(x) {
	return function (y) {
		return y + x;
	}
}

var x = makeAdder(1);

// 3
var result = x(2);
```

### Promise
```
function imageLoad(url) {
	return new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest();
		
		request.open('GET', url);
		request.responseType = 'blob';
		
		request.onload = function () {
			if (request.status == 200) {
				resolve(request.response);	
			} else {
				reject(Error("Image don't load successfully; error code: " + request.statusText));
			}
		};
		
		request.onerror = function () {
			reject(Error("There is a network error"));
		};
		
		// Send the request
		request.send();
	});
}

var body = document.querySelector('body');
var image = new Image();
var url = '';

imageLoad(url).then(function (response) {
	var imageUrl = window.URL.createObjectURL(response);
	image.src = imageUrl;
	body.appendChild(image);
}, function (Error) {
	console.log(Error);
});
```

### Another Promise
```
function $http(url) {
	var core = {
		ajax: function(method, url, args) {
			var promise = new Promise(function (resolve, reject) {
				var client = new XMLHttpRequest();
				var uri = url;
				
				if (args && (method == 'POST' || method == 'PUT')) {
					uri += '?';
					var argCount = 0;
					for (var key in args) {
						if (args.hasOwnProperty(key)) {
							if (argCount++) {
								uri += '&';
							}
							
							uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
						}
					}
				} 
				
				client.open(method, uri);
				client.send();
				
				client.onload = function () {
					if (client.status == 200) {
						reslove(client.response);
					} else {
						reject(client.statusText);
					}
				};
				
				client.onerror = function () {
					reject(client.statusText);
				};
			});
			
			return promise;
		}
	};
	
	return {
		get: function (args) {
			core.ajax('GET', url, args);
		},
		post: function (args) {
			core.ajax('POST', url, args);
		},
		put: function (args) {
			core.ajax('PUT', url, args);
		} 
	};
}
```

### Ajax implementation
```
function makeAjax(method, url, args) {
	var xhr = new XMLHttpRequest();
	uri = url;
	method = method.toUpperCase();
	xhr.onreadystatechange = function() {
		if (xhr.readystate == 4) {
			if ((xhr.status >= 200 && xhr.status < 300) || (xhr.status === 304) {
				var data = xhr.responseText;
				var ret = JSON.parse(data);
				console.log(ret);
			} else {
				console.log(Error("request error"));
			}
		}
	};
	
	if (args && (method == 'POST' || method == 'PUT')) {
		uri += '?';
		var argCount = 0;
		for (var key in args) {
			if (args.hasOwnProperty(key)) {
				if (argCount++) {
					uri += '&';
				}
							
				uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
			}
		}
	}
	xhr.open(method, uri);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.responseType = 'JSON';
	xhr.send();
}
```

### Function Bind Method
```
Function.prototype.bind = function () {
	var fn = this,
		args = Array.prototype.slice.call(arguments),
		obj = args.shift();
		
	return function () {
		return fn.apply(obj, Array.prototype.slice.call(arguments).concat(args);
	};
}
```

### isPrime
```
function isPrime(num) {
	if (isPrime.cache[num] != null) {
		return isPrime.cache[num];
	}
	var prime = num != 1;
	for (var i = 2; i < num; i++) {
		if (num % i == 0) {
			prime = false;
			break;
		}
	}
	
	isPrime.cache[num] = prime;
	
	return isPrime.cache[num];
}
```

### make new operator always used by generic

在ECMAScript 5.0中禁止使用arguments.callee

```
function User(firstName, secondName) {
	if (!(this instanceof arguments.callee)) {
		return new User(firstName, secondName);
	}
	
	this.name = firstName + ' ' + secondName;
}
```

### Merge Object
```
function merge(root) {
	for (var i = 0, len = arguments.length; i < len; i++) {
		for (var key in arugments[i]) {
			root[key] = arguments[i][key];
		}
	}
	
	return root;
}
```

### Max/Min value
```
function maxValue(arr) { 'use strict';
	return Math.max.apply(Math, arr);
}

function highest() {
	var args = Array.prototype.slice.call(arguments);
	
	return args.sort(function (a, b) {
		return b - a;
	});
}

function minValue(arr) {
	return Math.min.apply(Math, arr);
}
```

### Ojbect DefineProp
```
function defineProp(obj, key, value) {
	var config = {
		value: value,
		writable: true,
		enumerable: true,
		configurable: true
	};
	
	Object.defineProperty(obj, key, config);
}
```