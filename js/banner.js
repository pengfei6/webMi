
    var banner=document.getElementById("box");
    var bannerInner =document.getElementById("inner");
    var imgList=bannerInner.getElementsByTagName("img");
    var divList=bannerInner.getElementsByTagName("div");
    var bannerTip=document.getElementById("tips");
    var oLis=bannerTip.getElementsByTagName("li");
    var left=document.getElementById("prev");
    var right=document.getElementById("next");

    function imgLay(){
        for(var i=0;i<imgList.length;i++){
            !function(i){
                var curImg=imgList[i];
                    curImg.style.display="block";
                //    if(i===0){
                //        var curDiv=curImg.parentNode;
                //        curDiv.style.zIndex=1;
                //        zhufengAnimate(curDiv,{opacity:1},300);
                //}
            }(i);
        }
    }
    window.setTimeout(imgLay,0);

    var interval=3000,timer=null;
    var timer=window.setInterval(autoMove,interval);
    var step=0;
    function autoMove(){
        if(step=== divList.length-1){
            step=-1;
        }
        //console.log(step);
        step++;
        setBanner();
    }

    function setBanner(){
        //让step索引对应的那个div的zIndex=1,其余的为0
        for(var i=0;i<divList.length;i++){
            var curDivS=divList[i];
            if(i===step){
                //console.log(step,i);
                utils.css(curDivS,"zIndex",-1);
                zhufengAnimate(curDivS,{opacity:1},200,function(){
                    console.log('ook');
                    var curDivSib=utils.siblings(curDivS);
                    console.log(curDivSib);
                    for(var k=0;k<curDivSib.length;k++){
                        utils.setCss(curDivSib[k],"opacity",0);
                    }
                });
                continue;
            }
            utils.css(curDivS,"zIndex",-2);
        }

        //还要实现焦点对齐
        for(i=0;i<oLis.length;i++){
            var curLi =oLis[i];
            i===step?utils.addClass(curLi,"selected"):utils.removeClass(curLi,"selected");
        }
    }

//实现鼠标悬停 停止自动轮播和离开再开启轮播的效果

    banner.onmouseover=function(){
        clearInterval(timer);

    };

    banner.onmouseout=function(){
        timer=window.setInterval(autoMove,interval);
    };


    //实现焦点切换
    !function(){
        for (var i=0;i<oLis.length;i++){
            var curLi=oLis[i];
            curLi.i=i;
            curLi.onclick=function(){
                step=this.i;
                setBanner();
            }
        }
    }()


    //实现左右切换
    right.onclick=autoMove;
    left.onclick=function(){
        if(step===0){
            step=divList.length;
        }
        step--;
        setBanner();
    }





