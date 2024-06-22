const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');
//
let corriendo = false;

function printTime() {
  // ... your code goes here
  printSeconds();
  printMinutes();
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  //const valMin = chronometer.getMinutes();//
  const fmto = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  if (fmto) {
    let u = fmto[1];
    let d = fmto[0];
    document.querySelector("#sphere #minDec").innerText = d;
    document.querySelector("#sphere #minUni").innerText = u;
  }
}

function printSeconds() {
  // ... your code goes here
  //const valSec = chronometer.getSeconds();//
  const fmto = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  if (fmto) {
    let u = fmto[1];
    let d = fmto[0];
    document.querySelector("#sphere #secDec").innerText = d;
    document.querySelector("#sphere #secUni").innerText = u;
  }
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes her
  const fmto = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  if (fmto) {
    let u = fmto[1];
    let d = fmto[0];
    if (document.querySelector("#sphere #milDec").innerText != d){
      document.querySelector("#sphere #milDec").innerText = d;
    }
    if (document.querySelector("#sphere #milUni").innerText  !=  u){
      document.querySelector("#sphere #milUni").innerText = u;
    }
  }
}

function printSplit() {
  // ... your code goes here

}

function clearSplits() {
  // ... your code goes here
  let s = document.querySelectorAll("#splits li");
  if (s){
    let count=s.length
    for (i=count-1;i>-1;i--){
      s[i].closest("#splits").removeChild(s[i]);
    }
  }
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerText = 'START';
  btnRightElement.className = 'btn reset';
  btnRightElement.innerText = 'RESET';
  chronometer.stop();
}

function setSplitBtn() {
  // ... your code goes here
  let spl = document.querySelector('#splits');
  if (spl) {
    let texto = chronometer.split();
    let lix = document.createElement('li');
    lix.innerText = texto;
    spl.appendChild(lix);
  }
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.className = "btn stop";
  btnLeftElement.innerText = "STOP";
  btnRightElement.className = "btn split";
  btnRightElement.innerText = "SPLIT";
  chronometer.start(printTime);
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  printTime();
  clearSplits();
}
function ctlBtnRight() {
  if (btnRightElement.className === "btn split") {
    setSplitBtn();
  } else if (btnRightElement.className === "btn reset") {
    setResetBtn();
  }
}
function ctlBtnLeft() {
  if (btnLeftElement.className === "btn stop") {
    setStopBtn();
  } else if (btnLeftElement.className === "btn start") {
    setStartBtn();
  }
}
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  return ctlBtnLeft();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  return ctlBtnRight();
});

window.addEventListener('load', () => {

});

