var mainBox=document.getElementById('login-main'),
    erCodeArea=document.getElementById("login-qrcode"),
    qrCode=document.getElementById("qrcode-trigger"),
    close=document.getElementById("qrcode-close");

qrCode.onclick=function(){
    mainBox.style.display="none";
    erCodeArea.style.display="block";
};
close.onclick=function(){
    mainBox.style.display="block";
    erCodeArea.style.display="none";
};
