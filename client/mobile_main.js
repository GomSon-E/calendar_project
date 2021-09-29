// 달력 보여주기
let date = new Date()

function renderCalender() {
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()


    document.querySelector('.viewmonth').textContent = `${currentMonth + 1}, ${currentYear} `

    const prevLast = new Date(currentYear, currentMonth, 0)
    const currentLast = new Date(currentYear, currentMonth + 1, 0)

    const prevLastDate = prevLast.getDate()
    const prevLastDay = prevLast.getDay()

    const currentLastDate = currentLast.getDate()
    const currentLastDay = currentLast.getDay()

    const prevDates = []
    const thisDates = []
    const nextDates = []

    if (prevLastDay !== 6) {
        for(let i=0; i < prevLastDay + 1 ; i++) {
            prevDates.unshift(prevLastDate - i)
        }
    }

    for (let i=1; i<=currentLastDate; i++) {
        thisDates.push(i)
    }

    if (currentLastDay !== 6) {
        for (let i=1; i<7-currentLastDay; i++) {
            nextDates.push(i)
        }
    }

    const dates = prevDates.concat(thisDates, nextDates)

    const firstDateIndex = dates.indexOf(1)
    const lastDateIndex = dates.lastIndexOf(currentLastDate)

    dates.forEach((date,i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1  ?   'this' : 'other'
        dates[i] = `<div class="date"><span class=${condition}>${date}</span></div>`
    })

    document.querySelector('.dates').innerHTML = dates.join(' ')

    const today = new Date()
    if(currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
            if (+date.innerText === today.getDate()) {
              date.classList.add('today');
              break;
            }
          }
    }
}

renderCalender()


function goPrevMonth() {
    date.setMonth(date.getMonth() - 1)
    renderCalender()
}

function goNextMonth() {
    date.setMonth(date.getMonth() + 1)
    renderCalender()
}

function showToday() {
    const today = new Date()
    if(currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
            if (date.innerText === today.getDate()) {
              date.classList.add('today');
              break;
            }
          }
    }
}