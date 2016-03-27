/**
 * Created by tcstory on 3/27/16.
 */

function createProgressBar(opts) {
    "use strict";

    if (typeof opts.wrapper === 'undefined' || typeof opts.target === 'undefined') {
        throw new Error('缺少必填参数')
    } else {
        var wrapper = opts.wrapper;
        var target = opts.target;
        setDefaultValue(opts);
        var timestamp = Date.now();
        var progressBar = document.createElement('div');
        progressBar.className = 'progressBar__tc' + timestamp;
        wrapper.appendChild(progressBar);
        var slider = document.createElement('div');
        slider.className = 'slider__tc' + timestamp;
        progressBar.appendChild(slider);
        target.addEventListener('wheel', handleWheel);

        injectCSS(timestamp, opts);
    }


    function activateProgressBar() {
        clearTimeout(activateProgressBar.timeId);
        progressBar.classList.add('active');
        activateProgressBar.timeId = setTimeout(function () {
            progressBar.classList.remove('active');
        }, 50);
    }

    function handleWheel(ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        activateProgressBar();
        var distance = target.scrollHeight - target.clientHeight;
        var scrollTop = target.scrollTop;
        target.scrollTop = scrollTop + ev.deltaY;
        slider.style.height = Math.ceil((scrollTop / distance) * 100) + '%';
    }

    function setDefaultValue(opts) {
        opts.backgroundColor = opts.backgroundColor || '#E3E3E3';
        opts.opacity = opts.opacity || 0.6;
        opts.color = opts.color || '#EF6851';
        if (opts.showScrollbar !== false) {
            opts.showScrollbar = 'visible';
        } else {
            opts.showScrollbar = 'hidden';
        }
    }

    function injectCSS(timestamp, opts) {
        var sliderStyleText =
            '.progressBar__tc' + timestamp + ' {' +
            'background-color:' + opts.backgroundColor + ';' +
            'border-radius: .25rem;' +
            'opacity:' + opts.opacity + ';' +
            '-webkit-transition: opacity 300ms;' +
            'transition: opacity 300ms;' +
            'height: -webkit-calc(100% - .5rem);' +
            'height: calc(100% - .5rem);' +
            'width:.5rem;' +
            'position: absolute;' +
            'right: .25rem;' +
            'top: .25rem;' +
            'visibility:' + opts.showScrollbar +';'+
            '}' +
            '.progressBar__tc' + timestamp + '.active {' +
            'opacity: 1;' +
            '}' +
            '.progressBar__tc' + timestamp + ' .slider__tc' + timestamp + ' {' +
            'background-color:' + opts.color + ';' +
            'border-radius: .25rem;' +
            'cursor: pointer;' +
            '}';
        var sliderStyle = document.createElement('style');
        sliderStyle.type = 'text/css';
        sliderStyle.appendChild(document.createTextNode(sliderStyleText));
        document.head.appendChild(sliderStyle);
    }

}