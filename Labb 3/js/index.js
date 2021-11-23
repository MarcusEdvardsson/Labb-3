window.addEventListener('scroll', function(){

    var stars = document.getElementById('stars');
    var moon = document.getElementById('moon');
    var mountains_behind = document.getElementById('mountains_behind');
    var text = document.getElementById('text');
    var value = window.scrollY;
    var currentDistance = (document.documentElement.scrollHeight);

    text.style.right = 30 + value * 1.5 + '%';
    moon.style.top = value * 1.5 + 'px';
    moon.style.left = value * 2 + 'px';
    stars.style.left = value * 1.5 + 'px';

    if (currentDistance > "200px") {
        mountains_behind.style.top = value * .5 + 'px';
    }
});

/*

document.addEventListener("wheel", function(e) {

    const zoomElement = document.getElementById("mountains_front");
    let zoom = 1;
    const ZOOM_SPEED = 0.1;
    var mountains_front = document.getElementById('mountains_front');

    if(e.deltaY > 0){
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;
    } else{
        zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;
    }
});

*/

window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };
    
    buttonStop.onclick = function() {
        clearInterval(Interval);
    };
    
    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    };

    function startTimer () {
        tens++; 
      
        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
      
        if (tens > 9){
            appendTens.innerHTML = tens;
        } 
      
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
      
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}