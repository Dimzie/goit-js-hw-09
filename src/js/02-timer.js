import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const mainObject = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

const startButton = document.querySelector('[data-start]');
startButton.disabled = true;

let isActive = false;
let newTime = null;
let id = null;

const realTime = Date.now();

flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    const date = new Date(selectedDates[0]);
    newTime = date.getTime();

    if (realTime >= newTime) {
      Notify.failure('Вы указали не точную дату!');
      startButton.disabled = true;
      clearInterval(id);
    } else {
      startButton.disabled = false;
    }
  },
});

startButton.addEventListener('click', onCounter);

function onCounter() {
  id = setInterval(() => {
    const realTime = Date.now();
    const timeLeft = newTime - realTime;
    const timeComp = convertMs(timeLeft);
    const { days, hours, minutes, seconds } = timeComp;
    function updateClockFace({ days, hours, minutes, seconds }) {
      mainObject.days.textContent = `${days}`;
      mainObject.hours.textContent = `${hours}`;
      mainObject.minutes.textContent = `${minutes}`;
      mainObject.seconds.textContent = `${seconds}`;
    }
    updateClockFace({ days, hours, minutes, seconds });

    if (timeLeft < 1000) {
      clearInterval(id);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

Notify.init({
    width: '300px',
    position: 'center-center',
    fontSize: '18px',
});