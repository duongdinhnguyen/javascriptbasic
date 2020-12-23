var mi=0;
var se=0;
var minute= document.getElementById("item-minute");
var seconds=document.getElementById("item-seconds");
var start=document.getElementById("item-button001");
var stop=document.getElementById("item-button002");
var reset=document.getElementById("item-button003");
var Interval ;

start.onclick=function(){
    Interval = setInterval(startTime, 10);// setInterval(function,milliseconds) : thuc thi function mỗi 10miliseconds liên tục
}
stop.onclick=function(){
    clearInterval(Interval);// Dừng việc thực hiện của hàm setInterval().

}

reset.onclick=function(){
    clearInterval(Interval);

    mi=se=0;
    seconds.innerHTML= "00";
    minute.innerHTML="00";
}
function startTime(){
    se++;
    if(se<=9){
        seconds.innerHTML="0"+se;
    }
    else if(se>9){
        seconds.innerHTML=se;
    }
    if(se>99){
        mi++;
        se=0;
        seconds.innerHTML="0"+se;
      minute.innerHTML="0"+mi;
        
        
    }
    if(mi>9){
        minute.innerHTML=mi;
    }
    
}



