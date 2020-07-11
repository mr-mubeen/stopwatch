var min = 0;
var sec = 0;
var msec = 0;
var mins = document.getElementById("min")
var secs = document.getElementById("sec")
var msecs = document.getElementById("msec")
var interval;

function intervals(){
    msec++;
    msecs.innerHTML = msec;
    if (msec >=100){
        sec++;
        secs.innerHTML =sec;
        msec=0;
    }
    else if(sec >=10){
        min++;
        mins.innerHTML =min;
        sec=0;
    }
    
}


function start() 
{
     interval = setInterval(intervals,10)
}


function stop(){
    clearInterval(interval)
}

function reset(){
    min = 0;
    sec =0;
    msec=0;
    mins.innerHTML = min;
    secs.innerHTML = sec;
    msecs.innerHTML =msec;
    clearInterval(interval)
}

