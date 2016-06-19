!function () {


    var zhufengEffect = {
        Linear: function (t, b, c, d) {
            return c * t / d + b;
        }
    };

    function move(curEle, target, duration) {
        var interval = 15;
        var time = null;
        var begin = {};
        var change = {};
        for (var key in target) {
            if (target.hasOwnProperty(key)) {
                begin[key] = utils.css(curEle, key);
                change[key] = target[key] - begin[key];
            }
        }
        window.clearInterval(curEle.timer);
        curEle.timer = window.setInterval(function () {
            time += interval;
            if(time>=duration){
                window.clearInterval(curEle.timer);
                utils.css(curEle,target);
                return;
            }
            for(var k in target){
                if(target.hasOwnProperty(k)){
                    var curPosi =zhufengEffect.Linear(time,begin[k],change[k],duration);
                    utils.css(curEle,k,curPosi);
                }
            }
        }, interval)
    }
    window.zhufengAnimate = move;
}();
