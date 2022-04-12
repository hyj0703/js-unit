var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    // username:string
    // password:string
    function User(username, password) {
        this.username = username;
        this.password = password;
        console.log('这是构造函数');
        // this.username = username
        // this.password = password
    }
    User.prototype.postArticle = function (title, content) {
        console.log("".concat(this.username, "\u53D1\u8868\u4E86").concat(title, "\u6587\u7AE0"));
    };
    return User;
}());
var VIP = /** @class */ (function (_super) {
    __extends(VIP, _super);
    function VIP(username, password, score) {
        var _this = _super.call(this, username, password) || this;
        _this.score = score;
        return _this;
    }
    VIP.prototype.postArticle = function (title, content, file) {
        _super.prototype.postArticle.call(this, title, content);
        if (file) {
            this.postAttachment(file);
        }
    };
    VIP.prototype.postAttachment = function (file) {
        console.log("".concat(this.username, "\u4E0A\u4F20\u4E86\u4E00\u4E2A\u9644\u4EF6\uFF1A").concat(file));
    };
    return VIP;
}(User));
var vip1 = new VIP('mt', '1', 0);
vip1.postArticle('标题', '内容', '1.png');
