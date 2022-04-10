let minutes = 24;
let seconds = 59;
let sessions = 0;
let startInterval;
let breakInterval;

function process() {
    var button = new Audio("audio/button-sound.mp3");
    button.play();
  let text = document.getElementById("process");
  if (text.innerText == "Start") {
    text.innerText = "Stop";
    startTimer();
    function startTimer(id) {
    
      if (id) {
        clearInterval(id);
        minutes = 24;
        seconds = 60;
      }
      startInterval = setInterval(() => {
        let min = "" + minutes;
        let sec = "" + seconds;
        if(seconds<10){
          document.getElementById("seconds").innerText ="0"+sec;
  
          }else{

            document.getElementById("seconds").innerText = sec;
          }
        document.getElementById("minutes").innerText = min;
        if (minutes == 0 && seconds == 2) {
          var audio = new Audio("audio/break.mp3");
          audio.play();
        }
        if (minutes == 0 && seconds == 0) {
          sessions++;
          document.getElementById("sessions").innerText = "" + sessions;
          startBreak(startInterval);
        }
        
        if (seconds == 0) {
          seconds = 60;
          minutes--;
        }

        seconds--;
      }, 1000);
    }
    function startBreak(id) {
      clearInterval(id);
      text.style.display="none";
      minutes = 5;
      seconds = 0;
      breakInterval = setInterval(() => {
        let min = "" + minutes;
        let sec = "" + seconds;
        if(seconds<10){
          document.getElementById("seconds").innerText ="0"+sec;
  
          }else{

            document.getElementById("seconds").innerText = sec;
          }
        document.getElementById("minutes").innerText = min;
        if (minutes == 0 && seconds == 2) {
          var audio = new Audio("audio/backtowork.mp3");
          audio.play();
        }
        
        if (minutes == 0 && seconds == 0) {
          click = 1;
      text.style.display="inline";

          startTimer(breakInterval);
        }
        if (seconds == 0) {
          seconds = 60;
          minutes--;
        }
        seconds--;
      }, 1000);
    }
  } else {
    text.innerText="Start";
    pauseTimer();
    function pauseTimer() {
      var button = new Audio("audio/button-sound.mp3");
      button.play();
      if (startInterval) {
        clearInterval(startInterval);
      }
    }
  }
}

function resetTimer() {
    
  location.reload();
}
