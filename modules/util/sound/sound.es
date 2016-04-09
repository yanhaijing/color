/**
 * @file 声音文件
 * @author yanhaijing.com
 */

class Sound {
    constructor(src) {
        this.audio = document.createElement('audio');
        this.audio.setAttribute('src', src);
        this.audio.setAttribute('preload', true);
    }
    play(src) {
        if (typeof src !== 'undefined') {
            this.audio.src = src;
        }
        this.audio.play();
    }
}

export {Sound};
