function addZero(i) {
    if (i < 10) {
        i = "0" + i;    
    }
    return i;
}

function clock() {
    //create date object
    var d = new Date()

    //get units from date object
    var hrs = addZero(d.getHours());
    var mins = addZero(d.getMinutes());
    var secs = addZero(d.getSeconds());

    //append units to dom
    document.querySelector(".clock").innerHTML = hrs + ":" + mins + ":" + secs;

    //check if hrs are less || greater than 12
    var text = checkHrs(hrs);

    //ah, replace this shit with some web crawler to fetch cool things 
    function checkHrs() {
        switch (hrs) {
            case 0:
                return "0";
                break;
            case 1:
                return "1";
                break;
            case 2:
                return "2";
                break;
            case 3:
                return "3";
                break;
            case 4:
                return "4";
                break;
            case 5:
                return "5";
                break;
            case 6:
                return "6";
                break;
            case 7:
                return "7";
                break;
            case 8:
                return "8";
                break;
            case 9:
                return "9";
                break;
            case 10:
                return "10";
                break;
            case 11:
                return "11";
                break;
            case 12:
                return "12";
                break;
            case 13:
                return "13";
                break;
            case 14:
                return "14";
                break;
            case 15:
                return "15";
                break;
            case 16:
                return "16";
                break;
            case 17:
                return "17";
                break;
            case 18:
                return "18";
                break;
            case 19:
                return "19";
                break;
            case 20:
                return "20";
                break;
            case 21:
                return "21";
                break;
            case 22:
                return "22";
                break;
            case 23:
                return "23";
                break;
            case 24:
                return "24";
                break;
           default: 
                return "WTF?!"; 
        }
    };

    //append units to dom
    document.querySelector(".text").innerHTML = text;
}

setInterval(clock, 1000);
