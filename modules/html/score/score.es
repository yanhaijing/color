/**
 * @file 分数，倒计时
 * @author yanhaijing.com
 */
import $ from 'zepto';
import {event as ec} from 'util/event/event';

var score = 0;

function init() {
    // 分数增加
    ec.on('score/update', function (e, data) {
        $('#score').html(data.score);
    });

    ec.on('time/update', function (e, data) {
        $('#timer').html(data.time);
    });
}

export {init};
