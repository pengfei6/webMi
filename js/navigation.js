//var tab = document.getElementById("tab"),
//    lis = tab.getElementsByTagName("li"),
//    divs = tab.getElementsByTagName("div");
//console.log(divs);
//for (var i = 0; i < lis.length; i++) {
//    lis[i].scn = i;
//    lis[i].onmouseover = function () {
//        for (var j = 0; j < lis.length; j++) {
//            lis[j].style.display="none";
//            divs[j].style.display="none";
//        }
//        this.style.display="block";
//        divs[this.scn].style.display="block";
//    }
//}
var tab = document.getElementById("tab"),
    lis = tab.getElementsByTagName("li");
for(var i= 0,len=lis.length;i<len;i++){

    !function(i){
        var cur = lis[i];
        cur.addEventListener('mouseover',function(e){
            e = e || window.event;
            var tar = e.target || e.srcElement;
            var reg =/^(LI|DIV|A|SPAN|IMG)$/;
            //console.log(reg.test(tar.tagName));
            if(reg.test(tar.tagName)){
                var oDiv = cur.getElementsByTagName("div")[0];
                oDiv.style.display ="block";
            }
        })
        cur.addEventListener('mouseout',function(e){
            e = e || window.event;
            var tar = e.target || e.srcElement;
            var reg =/^(LI)$/;
            if(reg.test(tar.tagName)){
                var oDiv = cur.getElementsByTagName("div")[0];
                oDiv.style.display ="none";
            }
        })


    }(i);


}

