function merge(target) {
    var other = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other[_i - 1] = arguments[_i];
    }
    return other.reduce(function (prev, current) {
        prev = Object.assign(prev, current);
        return prev;
    }, target);
}
var mg = merge({ a: 1 }, { b: 2 }, { c: 3 });
console.log(mg);
