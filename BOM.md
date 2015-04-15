### 窗口位置
```
var leftPos = window.screenLeft || window.screenX,
	topPos = window.screenTop || window.screenY;
```

### 窗口大小
```
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

if (typeof pageWidth != 'number') {
	if (document.compateMode == 'CSS1Compat') {
		pageWidth = document.documentElement.clientWidth;
		pageHeight = document.documentElement.clientHeight;
	} else {
		pageWidth = document.body.clientWidth;
		pageHeight = document.body.clientHeight;
	}
}
```

### setTimeout & setInterval
```
var timeoutId = setTimeout(function () {
	console.log('Hello World!');
}, 1000);

// 销毁定时器
clearTimeout(timeoutId);

var intervalId = setInterval(function () {
	
	// do something
}, 500);

clearInterval(intervalId);
```


## location对象

### 查询字符串参数
```
function getQueryStringArgs() {
	var qs = location.search.length > 0
				? location.search.substring(1)
				: "",
		args = {},
		items  = qs.length ? qs.split('&') : [],
		item =[],
		name = null,
		value = null,
		i = 0,
		len = items.length;
		
	for (i = 0; i < len; i++) {
		item = items[i].split('=');
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		
		if (name.length) {
			args[name] = value;
		}
	}
	
	return args;
}
```

## navigator对象
### 检测插件
```
function hasPlugin(name) {
	var i = 0,
		len = navigator.plugins.length;
		
	name = name.toLowerCase();
	
	for (i = 0;  i < len; i++) {
		if (navigator.plugins[i].name.toLowerCase().indexOf(name) != -1) {
			return true;
		}
	}
	
	return false;
}
```

## history对象
```
go(-1);
go(2);

// go(-1)
back();

// go(1)
forward()
```