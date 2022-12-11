const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentTime = new Date();

let date = DAY[currentTime.getDay()] + ', ' + MONTH[currentTime.getMonth()] + ' ' +currentTime.getDate() + ', ' + currentTime.getFullYear();

let time = currentTime.getHours() + ':' + currentTime.getMinutes() + ' ' + amPm(currentTime.getHours());

function amPm(hour) {
  if (hour < 12) {
    return 'am';
  } else {
    return 'pm'
  }
}

let clock = document.querySelector('.clock');

clock.textContent = 'Today is ' + date + ' ' + time;