var name = 'The Window';
var object = {
    name: 'My Object',
    getName: function() {
        return this.name;
    }
};

console.log(object.getName());
console.log((object.getName)());
console.log((object.getName = object.getName)());

/**
 * bind
 */
if (!Function.prototype.bind) {
    Function.prototype.bind = function (o) {
        var self = this,
            bindArgs = arguments.slice(1);

        return function () {
            return self.apply(o, bindArgs.concat(arguments.slice(0)));
        };
    }
}

var sum = function (x, y) {
    return x + y;
};

var succ = sum.bind(null, 1);
console.log(succ(2));           // 3

function f(y, z) {
    return this.x + y + z;
}

var succ = f.bind({x: 2}, 3);
console.log(succ(4));           // 9


/**
 * map function
 */
var map = function () {};
if (Array.prototype.map) {
    map = function (a, f) {
        a.map(f);
    };
} else {
    map = function (a, f) {
        var results = [];
        for (var i=0,len=a.length; i < len; i++) {
            if (i in a) {
                results[i] = f.call(null, a[i], i, a);
            }
        }

        return results;
    }
}

/**
 * 带记忆功能的函数
 */
function memory(f) {
    var cache = {};

    return function () {
        var key = arguments.length + Array.prototype.join.call(arguments, ',');
        if (!cache[key]) {
            console.log('first generate');
            cache[key] = f.apply(this, arguments);
        }

        return cache[key];
    }
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n-1);
}

var fact = memory(factorial);
console.log(fact(5));
console.log(fact(4));
console.log(fact(6));
console.log(fact(7));
console.log(fact(8));
console.log(fact(8));
console.log(fact(8));
console.log(fact(8));