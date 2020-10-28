var time = 0;
var running = 0;
function startPause(){
    if(running == 0){
        running =1;
        increment();
        document.getElementById('start').innerHTML = "Pause";
    }
    else{
        running = 0;
        document.getElementById('start').innerHTML = "Resume";
    }
}

function reset(){
    running = 0;
    document.getElementById('start').innerHTML = "Start";
    document.getElementById("output").innerHTML = "0:00:00"
}
function increment(){
    if(running == 1){
        setTimeout(function(){
    time++;
    var mins = Math.floor(time/10/60);
    var secs = Math.floor(time/10%60);
    var hours = Math.floor(time/10/60/60);
    if (mins < 10){
        mins = "0" + mins;
    }
    if (secs < 10){
        secs = "0" + secs;
    }
    document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs;
    increment();
},100)
}
}



const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Вдих!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Затримка';

    setTimeout(() => {
      text.innerText = 'Видих!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);