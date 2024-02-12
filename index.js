const docHour = document.getElementById('hour')
const docMinutes = document.getElementById('minutes')
const docSeconds = document.getElementById('seconds')

const HourIn = document.getElementById('hourIn')
const MinutesIn = document.getElementById('minutesIn')
const SecondsIn = document.getElementById('secondsIn')

const setBtn = document.getElementById('setH')
const pomodoroBtn = document.getElementById('pomodoro')

const control = document.getElementById('control')

const end = () => null
let activity = true

const startStop = () => {
  const text = control.textContent
  if (text == 'STOP') {
    control.innerText = 'START'
    control.style = 'background: #4d6160'
    activity = !activity
  } else {
    control.innerText = 'STOP'
    control.style = 'background: #7d1a0c'
    activity = !activity
  }
}

const setTime = () => {
  control.attributes.removeNamedItem('hidden')
  pomodoroBtn.classList.add('disabled')
  docHour.innerText = HourIn.value || '0'
  docMinutes.innerText = MinutesIn.value || '0'
  docSeconds.innerText = SecondsIn.value || '0'
  const initHour = HourIn.value
  const initMinutes = MinutesIn.value
  const initSeconds = SecondsIn.value
  HourIn.value = ''
  MinutesIn.value = ''
  SecondsIn.value = ''

  countdown(initHour, initMinutes, initSeconds)
}

const pomodoro = () => {
  control.attributes.removeNamedItem('hidden')
  setBtn.classList.add('disabled')
  docHour.innerText = 0
  docMinutes.innerText = 25
  docSeconds.innerText = 0
  const initHour = 0
  const initMinutes = 25
  const initSeconds = 0
  HourIn.value = ''
  MinutesIn.value = ''
  SecondsIn.value = ''

  countdownPomodoro(initHour, initMinutes, initSeconds)
}

const countdown = (h, m, s) => {
  setInterval(() => {
    if (activity) {
      if (h == 0 && m == 0 && s == 0) {
        docSeconds.innerText = s
        docMinutes.innerText = m
        docHour.innerText = h
        h = 0
        m = 0
        s = 0
        location.reload()
      } else {
        if (m == 0 && s == 0) {
          m = 59
          h > 0 ? (h = h - 1) : (h = 0)

          docMinutes.innerText = m
          docHour.innerText = h
          console.log('mama')
        }

        if (s == 0) {
          console.log(s, m)
          s = 59
          m == 59 ? (m = m) : (m = m - 1)

          docSeconds.innerText = s
          docMinutes.innerText = m
        } else {
          s = s - 1

          docSeconds.innerText = s

          console.log('fuera')
        }
      }
    }
  }, 1000)
}

const countdownPomodoro = (h, m, s) => {
  let state = 0
  setInterval(() => {
    if (activity) {
      if (h == 0 && m == 0 && s == 0 && state == 0) {
        docSeconds.innerText = 0
        docMinutes.innerText = 25
        docHour.innerText = 0
        h = 0
        m = 25
        s = 0
        state = 1
      } else if (h == 0 && m == 0 && s == 0 && state == 1) {
        docSeconds.innerText = 0
        docMinutes.innerText = 5
        docHour.innerText = 0
        h = 0
        m = 5
        s = 0
        state = 1
      }
      if (m == 0 && s == 0) {
        m = 59
        h > 0 ? (h = h - 1) : (h = 0)

        docMinutes.innerText = m
        docHour.innerText = h
        console.log('mama')
      }

      if (s == 0) {
        console.log(s, m)
        s = 59
        m == 59 ? (m = m) : (m = m - 1)

        docSeconds.innerText = s
        docMinutes.innerText = m
      } else {
        s = s - 1

        docSeconds.innerText = s

        console.log('fuera')
      }
    }
  }, 1000)
}
