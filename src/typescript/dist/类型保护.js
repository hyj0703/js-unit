function fn(a) {
    // a.substring(1)
    // (<string>a).substring(1)
    if (typeof a === 'string') {
        a.substring(1);
    }
    else {
        a.toFixed(2);
    }
}
function canEach(data) {
    return data.forEach !== undefined;
}
function fn1(elements) {
    if (canEach(elements)) {
        elements.forEach(function (e) { });
    }
    else {
        elements.attributes;
        elements.classList.add('box');
    }
}
