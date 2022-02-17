// 년도 list
let yearTarget = document.querySelector("#viewyear");
function yearList() {
  for (let i = 1900; i < 2022; i++) {
    if (i == 2021) {
      yearTarget.innerHTML += `<option value="${i}" selected>${i}</option>`;
    } else {
      yearTarget.innerHTML += `<option value="${i}">${i}</option>`;
    }
  }
}

yearList();

// 달력 보여주기
let date = new Date();

function renderCalender() {
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  document.querySelector(".viewmonth").textContent = `${currentYear}년 ${
    currentMonth + 1
  }월`;

  const prevLast = new Date(currentYear, currentMonth, 0);
  const currentLast = new Date(currentYear, currentMonth + 1, 0);

  const prevLastDate = prevLast.getDate();
  const prevLastDay = prevLast.getDay();

  const currentLastDate = currentLast.getDate();
  const currentLastDay = currentLast.getDay();

  const prevDates = [];
  const thisDates = [];
  const nextDates = [];

  if (prevLastDay !== 6) {
    for (let i = 0; i < prevLastDay + 1; i++) {
      prevDates.unshift(prevLastDate - i);
    }
  }

  for (let i = 1; i <= currentLastDate; i++) {
    thisDates.push(i);
  }

  if (currentLastDay !== 6) {
    for (let i = 1; i < 7 - currentLastDay; i++) {
      nextDates.push(i);
    }
  }

  const dates = prevDates.concat(thisDates, nextDates);

  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(currentLastDate);

  dates.forEach((date, i) => {
    const condition =
      i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";
    dates[
      i
    ] = `<div class="date"><span class=${condition}>${date}</span></div>`;
  });

  document.querySelector(".dates").innerHTML = dates.join(" ");

  const today = new Date();
  if (
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear()
  ) {
    for (let date of document.querySelectorAll(".this")) {
      if (+date.innerText === today.getDate()) {
        date.classList.add("today");
        break;
      }
    }
  }
}

renderCalender();

function goPrevMonth() {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
}

function goNextMonth() {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
}

function selectYearList(year) {
  const value = year.value;

  date.setFullYear(value);
  renderCalender();
}

function showToday() {
  const today = new Date();
  if (
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear()
  ) {
    for (let date of document.querySelectorAll(".this")) {
      if (date.innerText === today.getDate()) {
        date.classList.add("today");
        break;
      }
    }
  }
}

// // 값 조회 요청
// const getEvents = () => {
//   axios.get("/api/events", {params: {month: 4, day: 16}}).then((response) => console.log(response));
// };
// getEvents();

// 값 조회 요청 (전체)
const getEvents = () => {
  axios.get("/api/events").then((response) => console.log(response));
};
getEvents();