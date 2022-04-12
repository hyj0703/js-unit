var helleworld = "你好！";
var a = {
    a: 1,
    b: 2,
    c: 3
};
var p = new Promise(function (resolve, reject) {
    resolve('11');
}).then(function (res) {
    console.log(res);
});
