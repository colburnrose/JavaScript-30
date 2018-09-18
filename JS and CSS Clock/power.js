const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

// Set date function
function setDate() {
    const now = new Date();

    const hour = now.getHours();
    const hourDeg = hour / 60 * 360 + 90;
    hourHand.style.transform = `rotate(${hourDeg})`;

    const minutes = now.getMinutes();
    const minDeg = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;

    const seconds = now.getSeconds();
    const secDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDeg}deg)`;

    console.log(hour);
    
  }
  setInterval(setDate, 1000);