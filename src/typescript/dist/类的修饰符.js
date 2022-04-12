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
    function User(
    // 只读，自身，子级，外部都能访问
    id, 
    //受保护，自身，子级能访问
    username, 
    //私有，自身能访问
    _password) {
        this.id = id;
        this.username = username;
        this._password = _password;
    }
    User.prototype.action1 = function () {
        this.id;
        this.username;
        this._password;
    };
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return '***';
        },
        // setPassword(password:string){
        //   if(password.length>=6){
        //     this._password = password
        //   }
        // }
        set: function (password) {
            if (password.length >= 6) {
                this._password = password;
            }
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var VIP = /** @class */ (function (_super) {
    __extends(VIP, _super);
    function VIP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VIP.prototype.action2 = function () {
        this.id;
        this.username;
        // this.password
    };
    return VIP;
}(User));
var vip1 = new VIP(1, 'mt', '123');
vip1.id;
vip1.password = '123';
// vip1.username
// vip1.password
