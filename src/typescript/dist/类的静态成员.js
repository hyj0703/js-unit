var User = /** @class */ (function () {
    function User(id, username, _allowFileTypeList) {
        this.id = id;
        this.username = username;
        this._allowFileTypeList = _allowFileTypeList;
    }
    User.info = function () {
        console.log(User.ALLOW_FILE_TYPE_LIST);
    };
    User.ALLOW_FILE_TYPE_LIST = ['png', 'gif', 'jpg', 'jpeg', 'webp'];
    return User;
}());
User.info();
