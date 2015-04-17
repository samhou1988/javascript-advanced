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