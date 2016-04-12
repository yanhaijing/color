/**
 * @file index.html js
 * @author yanhaijing.com
 * @require end.scss
 */
import $ from 'zepto';
import {event as ec} from 'util/event/event';
import {template} from 'util/template/template';
import {Timer} from 'timer';

var endTpl = __inline('end.tmpl');

var score;
var time;
var timer;

function restart() {
    score = 0;
    time = 30;
    ec.emit('time/update', {time});
    ec.emit('score/update', {score});
    ec.emit('game/restart');
    timer.restart();
}
function init() {
    // 定时器
    timer = new Timer();
    
    timer.on('tick', function (e, data) {
        // 判断是否结束游戏
        if (data.time >= 31 * 1000) {
            timer.stop();
            $('body').append(endTpl({score}));
            return 1;
        }
        ec.emit('time/update', {time: time - parseInt(data.time / 1000, 10)});
    });

    ec.on('screen/click', function () {
        score = score + 1;

        ec.emit('score/update', {score});
    });

    // 再玩一次
    $('body').on('click', '#try-again', function (e) {
        restart();
        $('.wgt-end').remove();
    });

    restart();
}

export {init};
