let timerThing = document.querySelector('#counter')
let seconds = 0
let isPaused = false
const minusBtn = document.getElementById('-')
const addBtn = document.getElementById('+')
const likeBtn = document.getElementById('<3')
const pauseBtn = document.querySelector('#pause')
const likesList = document.querySelector('#likes')
const commentForm = document.querySelector('#comment-form')
const commentList = document.querySelector('#comment-list')

let likeArr = []
let uniqArr = []
likeBtn.addEventListener('click',e=>{
  likeArr.push(`${seconds} has been liked`)
  if (!uniqArr.includes(`${seconds} has been liked`)) {
    uniqArr.push(`${seconds} has been liked`)
  }
  uniqArr.sort((a,b)=>{return a-b})
  likesList.innerHTML = ``
  for (var u=0; u < uniqArr.length; u++) {
    likesList.innerHTML += `
      <li>${uniqArr[u]} ${likeArr.filter(l => l == uniqArr[u]).length}
    `
  }
})

var timer = setInterval(()=>{
  timerThing.innerText = `${++seconds}`
}, 1000)

function subSec() {
  timerThing.innerText = `${--seconds}`
}

function addSec() {
  timerThing.innerText = `${++seconds}`
}

commentForm.addEventListener('submit', e=>{
  e.preventDefault()
  const commentInput = document.querySelector('#comment-input')
  commentList.innerHTML += `
    <li>${commentInput.value}</li>
    `
  commentForm.reset()
})

pauseBtn.addEventListener('click',e=>{
  isPaused = !isPaused
  if (!isPaused) {
    pauseBtn.innerText = 'pause'
    minusBtn.disabled = false
    addBtn.disabled = false
    likeBtn.disabled = false
    startTimer()
  } else {
    pauseBtn.innerText = 'resume'
    minusBtn.disabled = true
    addBtn.disabled = true
    likeBtn.disabled = true
    stopTimer()
  }
})

function startTimer() {
  timer = setInterval(()=>{
    timerThing.innerText = `${++seconds}`
  }, 1000)
}

function stopTimer() {
  clearInterval(timer)
}
