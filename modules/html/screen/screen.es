/**
 * @file screen js
 * @author yanhaijing.com
 */
import $ from 'zepto';
import Zepto from 'zepto/touch';
import {event as ec} from 'util/event/event';
import {template} from 'util/template/template';

var $screen = $('#screen');
var tpl = __inline('screen.tmpl');
var levelMap = [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9];
var level = 0;
var rank = 40;
var list;

function render() {
    var size = level >= levelMap.length ? levelMap[levelMap.length - 1] : levelMap[level];
    level = level + 1;
    var rd = Math.floor(Math.random() * size * size);
    list = new Array(size * size);
    list[rd] = 1;

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var color1 = r.toString(16) + g.toString(16) + b.toString(16);
    
    var color2 = ((r + rank > 255 ? r - rank : r + rank) % 255).toString(16) 
        + ((g + rank > 255 ? g - rank : g + rank) % 255).toString(16) 
        + ((b + rank > 255 ? b - rank : b + rank) % 255).toString(16);
    $screen.html(tpl({
        list, 
        width: 100 / size + '%',
        color1,
        color2
    }));
}
function init() {
    render();

    $('#screen').on('touchstart, click', '.block', function (e) {
        e.preventDefault();
        var index = $(this).data('index');
        // 点中了
        if (list[index]) {
            rank = rank < 10 ? 10: rank - 2;
            render();
            ec.emit('screen/click');
        }
    });

    ec.on('game/restart', function () {
        level = 0;
        rank = 40;
        render();
    });
}

export {init};
