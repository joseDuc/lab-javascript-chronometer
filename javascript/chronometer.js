class Chronometer {
  constructor() {
    // ... your code goes here
    this.tiempoActual = 0;
    this.idIntervalo = null;
    //this.modoMilliseconds = false;

  }

  start(callback) {
    // ... your code goes here
    if (!this.idIntervalo) {
      console.log("start")
      //this.tiempoActual = 0;
      this.intervalo = 10;
      this.idIntervalo = setInterval(() => {
        {
          this.tiempoActual += this.intervalo;
        }
        if (callback) callback();
      }, this.intervalo);
    }
  }

  getMinutes() {
    // ... your code goes here
    let m = 0;
    m = Math.floor((this.tiempoActual / 1000) / 60);
    if (m > 59) m = 0;
    return m;
  }

  getSeconds() {
    // ... your code goes here
    let s = 0;
    s = Math.floor((this.tiempoActual / 1000) % 60);
    if (s > 59) s = 0;
    return s;
  }

  getMilliseconds() {
    // ... your code goes here
    let ms = 0;
    let sec = this.getSeconds();
    let min = this.getMinutes();
    ms = Math.floor(this.tiempoActual - (((min * 60) * 1000) + (sec * 1000)));
    return ms;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let digit = "00";
    if (value) {
      let s= value.toString();
      if (s.length < 2) {
        digit = "0" +s;
      } else if (s.length === 2) {
        digit = s;
      } else if (s.length > 2) {
        digit = s[0] + s[1];
      }
    }
    return digit;
  }

  stop() {
    // ... your code goes here
    if (this.idIntervalo) {
      clearInterval(this.idIntervalo);
      this.idIntervalo = null;
    };
  }

  reset() {
    // ... your code goes here
    this.tiempoActual = 0;
    if (this.idIntervalo) this.idIntervalo = null;
    this.tiempoActual = 0;
  }

  split() {
    // ... your code goes here
    let ms = this.getMilliseconds();
    let s = this.getSeconds();
    let m = this.getMinutes();
    let instante = this.computeTwoDigitNumber(m);
    instante += ":" + this.computeTwoDigitNumber(s);
    instante += ":" + this.computeTwoDigitNumber(ms);
    return instante
  }

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
