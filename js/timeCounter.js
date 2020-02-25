class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timeDisplay = document.querySelector(selector);
    this.days = this.timeDisplay.querySelector('span[data-value="days"]');
    this.hours = this.timeDisplay.querySelector('span[data-value="hours"]');
    this.minutes = this.timeDisplay.querySelector('span[data-value="mins"]');
    this.seconds = this.timeDisplay.querySelector('span[data-value="secs"]');
    this.time = null;
    this.setInterval();
  };

  setInterval() {
    const timerCount = setInterval(() => {
      this.time = this.targetDate - new Date();
      this.result(timerCount);
    }, 1000);

    this.result(timerCount);
    };

  result(timerCount) {    
    if (!this.time) return;
    if (this.time <= 0) {
      clearInterval(timerCount);
    }
    this.days.innerHTML = this.pad(Math.floor(this.time / (1000 * 60 * 60 * 24)));
    this.hours.innerHTML = this.pad(Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.minutes.innerHTML = this.pad(Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60)));
    this.seconds.innerHTML = this.pad(Math.floor((this.time % (1000 * 60)) / 1000));
    
  };

  pad(value) {
    return String(value).padStart(2, "0");
  }
};

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("june 1, 2020")
});