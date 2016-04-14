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
    title: '看你有多色是一款休闲小游戏，适合所有人群，找出所有色块里颜色不同的一个，快来比比你的眼力吧@颜海镜',
    pic: __uri('/media/6.png')
};
var qzone = {
    url: 'http://yanhaijing.com/color/',
    title: '看你有多色',
    summary: '看你有多色是一款休闲小游戏',
    desc: '看你有多色是一款休闲益智小游戏，适合所有人群，找出所有色块里颜色不同的一个，快来比比你的眼力吧',
    pic: __uri('/media/6.png')
};

function getlevel(score) {
    if (score < 5) {
        return '没有眼睛';
    } 
    if (score < 10) {
        return '瞎子';
    } 
    if (score < 15) {
        return '色弱';
    } 
    if (score < 20) {
        return '色狼';
    } 
    return '超级大色狼';
}
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
            $('.container').append(endTpl({score, level: getlevel(score)}));
            document.title = '看你有多色，我竟然是' + getlevel(score) + '，我得了' + score + '分，快来挑战我吧！！！'
            return 1;
        }
        ec.emit('time/update', {time: time - parseInt(data.time / 1000, 10)});
    });

    ec.on('screen/click', function () {
        score = score + 1;

        ec.emit('score/update', {score});
    });

    // 再玩一次
    $('.container').on('click', '#try-again', function (e) {
        restart();
        $('.wgt-end').remove();
    });

    // 分享
    $('.container').on('click', '.js-share', function (e) {
        weibo.title = qzone.desc = '看你有多色，我竟然是' + getlevel(score) + '，我得了' + score + '分，快来挑战我吧！！！@颜海镜';
        $('.container').append(shareTpl({
            weibo: $.param(weibo),
            qzone: $.param(qzone)
        }));
    });

    // pop 
    $(document).on('click', '.pop', function (e) {
        e.preventDefault();
        $(this).remove();
    });
    $('.container').on('click', '.js-close-pop', function (e) {
        e.preventDefault();
        $(this).closest('.pop').remove();
    });
    $('.container').on('click', '.js-pop-content', function (e) {
        e.stopPropagation();
    });

    // 分享
    $('.container').on('click', '#share-weixin', function (e) {
        $('.container').append(weixinTpl({}));
    });
    $('.container').on('click', '#wgt-weixin', function (e) {
        $(this).remove();
    });

    $('#start').on('click', function (e) {
        $('.wgt-home').hide();
        restart();
    });
}

export {init};
