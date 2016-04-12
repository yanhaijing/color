/**
 * @file 时间计时器
 * @author yanhaijing.com
 */
import {EventEmitter} from 'util/event/event';

function loop () {
    var that = this;
    that.tid = setTimeout(function () {
        loop.call(that); // 优先触发定时器
        var now = Date.now();
        that.time += now - that.now;
        that.now = now;
        that.emit('tick', {time: that.get()});
    }, that.duration);
}
class Timer extends EventEmitter {
    constructor(duration = 1000) {
        super();
        this.duration = duration;
        this.reset();
    }
    start() {
        this.stop();
        this.now = Date.now();
        loop.call(this);
    }
    stop() {
        clearTimeout(this.tid);
    }
    restart() {
        this.reset();
        this.start();
    }
    reset() {
        this.stop();
        this.time = 0;
        this.tid = null;
        this.now = 0;
    }
    get() {
        return this.time;
    }
}

export {Timer};
