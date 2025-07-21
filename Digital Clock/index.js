function clock(){

    today = new Date();

    var h = today.getHours();
    var m = today.getMinutes();
    var s= today.getSeconds();
    var day = h>12? "AM" : "PM";
    
     h = h<10? "0"+h : h;
     m = m<10? "0"+m : m;
     s = s<10? "0"+s : s;

    document.getElementById("hour").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    // document.getElementById("day").innerHTML = day
    
    
}
var inter = setInterval(clock, 400);





