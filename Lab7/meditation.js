class Meditation {
  constructor(time) {
    this.time = time;
  }
  start() {
    let timerId = setInterval(() => console.log(this.time--), 2000);
    setTimeout(() => {
      clearInterval(timerId);
      console.log("Jay Guru Dev ");
    }, 13000);
  }
}

const morning_meditation = new Meditation(6);
morning_meditation.start();
console.log(`Start meditation`);
