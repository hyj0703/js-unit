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
var component = /** @class */ (function () {
    function component(props) {
        this.props = props;
    }
    return component;
}());
var MyComponent = /** @class */ (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            x: 1
        };
        return _this;
    }
    MyComponent.prototype.getInfo = function () {
        return '';
    };
    MyComponent.prototype.save = function (data) { };
    MyComponent.prototype.render = function () {
        this.props.val;
        this.state.x;
        return '<mycomponent />';
    };
    return MyComponent;
}(component));
var mycomponent = new MyComponent({ val: 1 });
mycomponent.render();
