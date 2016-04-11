/**
 * @file screen js
 * @author yanhaijing.com
 */
import $ from 'zepto';
import {event as ec} from 'util/event/event';
import {template} from 'util/template/template';

var list;
var $screen = $('#screen');
var tpl = __inline('screen.tmpl');

function render(size) {
    var rd = Math.floor(Math.random() * size * size);
    list = new Array(size * size);
    list[rd] = 1;

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var color1 = r.toString(16) + g.toString(16) + b.toString(16);
    
    var color2 = ((r + 10 > 255 ? r - 10 : r + 10) % 255).toString(16) 
        + ((g + 10 > 255 ? g - 10 : g + 10) % 255).toString(16) 
        + ((b + 10 > 255 ? b - 10 : b + 10) % 255).toString(16);
    $screen.html(tpl({
        list, 
        width: 100 / size + '%',
        color1,
        color2
    }));

    console.log(color1, color2);
}
function init() {
    render(9);
}

export {init};
