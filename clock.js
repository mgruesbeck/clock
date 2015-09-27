function addZero(i) {
    if (i < 10) {
        i = "0" + i;    
    }
    return i;
}

function clock() {
    var d = new Date()
    var hrs = addZero(d.getHours());
    var mins = addZero(d.getMinutes());
    var secs = addZero(d.getSeconds());
    document.querySelector(".clock").innerHTML = hrs + ":" + mins + ":" + secs;
}

setInterval(clock, 1000);
