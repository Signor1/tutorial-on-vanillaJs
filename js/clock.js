const DomContainer = {
  date: document.getElementsByClassName("date")[0],
  hour: document.getElementById("hour"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  session: document.getElementById("session"),
};

// new date
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const weekday = currentDate.getDay();

//for formatting the month
function formatMonth(monthNum) {
  let actualMonth;
  switch (monthNum) {
    case 0:
      actualMonth = "January";
      return actualMonth;
    case 1:
      actualMonth = "February";
      return actualMonth;
    case 2:
      actualMonth = "March";
      return actualMonth;
    case 3:
      actualMonth = "April";
      return actualMonth;
    case 4:
      actualMonth = "May";
      return actualMonth;
    case 5:
      actualMonth = "June";
      return actualMonth;
    case 6:
      actualMonth = "July";
      return actualMonth;
    case 7:
      actualMonth = "August";
      return actualMonth;
    case 8:
      actualMonth = "September";
      return actualMonth;
    case 9:
      actualMonth = "October";
      return actualMonth;
    case 10:
      actualMonth = "November";
      return actualMonth;
    case 11:
      actualMonth = "December";
      return actualMonth;
    default:
      actualMonth = "";
      return actualMonth;
      break;
  }
}

//for formatting the weekday
function formatWeekDay(weekDayNum) {
  let actualDay;
  switch (weekDayNum) {
    case 0:
      actualDay = "Sunday";
      return actualDay;
    case 1:
      actualDay = "Monday";
      return actualDay;
    case 2:
      actualDay = "Tuesday";
      return actualDay;
    case 3:
      actualDay = "Wednesday";
      return actualDay;
    case 4:
      actualDay = "Thursday";
      return actualDay;
    case 5:
      actualDay = "Friday";
      return actualDay;
    case 6:
      actualDay = "Saturday";
      return actualDay;
    default:
      actualDay = "";
      return actualDay;
      break;
  }
}

DomContainer.date.innerHTML = `${formatWeekDay(weekday)}, ${formatMonth(
  month
)} ${day}, ${year}`;

function tikTok() {
  let currentDate = new Date();
  let h = currentDate.getHours(); // 0 - 23
  let m = currentDate.getMinutes(); // 0 - 59
  let s = currentDate.getSeconds(); // 0 - 59
  let amOrpm = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    amOrpm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  DomContainer.hour.textContent = h;
  DomContainer.minutes.textContent = m;
  DomContainer.seconds.textContent = s;
  DomContainer.session.textContent = amOrpm;

  setTimeout(tikTok, 1000);
}

tikTok();
