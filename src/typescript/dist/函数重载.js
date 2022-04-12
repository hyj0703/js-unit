function css(div, attr, value) { }
var div = document.getElementById('div');
if (div) {
    css(div, 'width', '10px');
    css(div, { 'width': '10px' });
    // css(div,"width")
}
