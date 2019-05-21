let seconds = 0 // Counts Up
let isPaused = false // Pause Switch
let likeArr = [] // All Likes Stored
let uniqArr = [] // Unique Likes Stored
const timerThing = document.querySelector('#counter')
const minusBtn = document.getElementById('-')
const addBtn = document.getElementById('+')
const likeBtn = document.getElementById('<3')
const pauseBtn = document.querySelector('#pause')
const likesList = document.querySelector('#likes')
const commentForm = document.querySelector('#comment-form')
const commentList = document.querySelector('#comment-list')

// Adds Likes to DOM
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

// Runs Timer When Page Opens
var timer = setInterval(()=>{
  timerThing.innerText = `${++seconds}`
}, 1000)

// Subtracts 1 Second
function subSec() {
  timerThing.innerText = `${--seconds}`
}

// Adds 1 second
function addSec() {
  timerThing.innerText = `${++seconds}`
}

// Add Comments to DOM
commentForm.addEventListener('submit', e=>{
  e.preventDefault()
  const commentInput = document.querySelector('#comment-input')
  commentList.innerHTML += `
    <li>${commentInput.value}</li>
    `
  commentForm.reset()
})

// Pauses Timer & Disables Buttons
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

// Function to Restart Time After Pause
function startTimer() {
  timer = setInterval(()=>{
    timerThing.innerText = `${++seconds}`
  }, 1000)
}

// Functions to Pause Timer
function stopTimer() {
  clearInterval(timer)
}
