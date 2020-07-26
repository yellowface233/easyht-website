//EasyHT JavaScript
//Version.3.0
//官网：https://easyht.js.org/

//控制台日志_加载中与信息、作者
console.log('EasyHT-JS 正在加载中')
console.log('本页部分美化效果来自EasyHT！')
console.log('EasyHT https://easyht.js.org/')
console.log('Powered by YellowFace 2018')

//代码框收缩 
function easyht0001(){
document.getElementById('easyhtcode').style.display='none'
}
function easyht0002(){
document.getElementById('easyhtcode').style.display='block'
}

//弹窗
function easyhtShowMsg(){
document.getElementById('messageForg').style.display='block'
}
function easyhtMsgClose(){
document.getElementById('messageForg').style.display='none'
}
document.getElementById("MsgOKB").innerHTML="确定";

//加载完毕
console.log('EasyHT JS加载完毕，感谢使用！')
