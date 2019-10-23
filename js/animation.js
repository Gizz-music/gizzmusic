window.onload = function(){

    var style = document.createElement('style');
    style.type = 'text/css';

    var h = '#release:hover{transform: translateX(-1em)}';
    var hover = document.createTextNode(h);
    var head = document.getElementsByTagName('head')[0];

    style.appendChild(hover);
    head.appendChild(style);
}