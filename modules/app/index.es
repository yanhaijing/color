/**
 * @file index.html js
 * @author yanhaijing.com
 * @require end.scss
 * @require share.scss
 * @require weixin.scss
 */
import $ from 'zepto';
import {event as ec} from 'util/event/event';
import {template} from 'util/template/template';
import {Timer} from 'timer';

var endTpl = __inline('end.tmpl');
var shareTpl = __inline('share.tmpl');
var weixinTpl = __inline('weixin.tmpl');

var score;
var time;
var timer;
var weibo = {
    url: 'http://yanhaijing.com/color/',
    title: '看你有多色@颜海镜',
    pic: 'http://yanhaijing.com/inverter/media/5.png'
};
var qzone = {
    url: 'http://yanhaijing.com/color/',
    title: '看你有多色',
    summary: '看你有多色',
    desc: '看你有多色',
    pic: 'http://yanhaijing.com/inverter/media/5.png'
};

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
        if (data.time >= 1 * 1000) {
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

    // 分享
    $('body').on('click', '.js-share', function (e) {
        $('body').append(shareTpl({
            weibo: $.param(weibo),
            qzone: $.param(qzone)
        }));
    });

    // pop 
    $(document).on('click', '.pop', function (e) {
        e.preventDefault();
        $(this).remove();
    });
    $('body').on('click', '.js-close-pop', function (e) {
        e.preventDefault();
        $(this).closest('.pop').remove();
    });
    $('body').on('click', '.js-pop-content', function (e) {
        e.stopPropagation();
    });

    // 分享
    $('body').on('click', '#share-weixin', function (e) {
        $('body').append(weixinTpl({}));
    });
    $('body').on('click', '#wgt-weixin', function (e) {
        $(this).remove();
    });

    $('#start').on('click', function (e) {
        $('.wgt-home').hide();
        restart();
    });
}

export {init};
