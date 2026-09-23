let homeCount = 0
let guestCount = 0
let homeScore = document.getElementById("home-points-text")
let guestScore = document.getElementById("guest-points-text")
let entryHome = document.getElementById("save-el-home")
let entryGuest = document.getElementById("save-el-guest")

// +1 Home Function
function one () {
  homeCount += 1
  homeScore.textContent = homeCount
}

// +2 Home Function
function two () {
  homeCount += 2
  homeScore.textContent = homeCount
}

// +3 Home Function
function three () {
  homeCount += 3
  homeScore.textContent = homeCount
}

// Save Home Function
function saveHome(){
 let count = homeCount + " - "
 entryHome.innerText += count
  
}

// Revert Home Function
function revert () {
  homeCount = 0
  homeScore.textContent = homeCount
}

// +1 Guest Function
function oneGuest(){
  guestCount += 1
  guestScore.textContent = guestCount
  
}

// +2 Guest Function
function twoGuest(){
  guestCount += 2
  guestScore.textContent = guestCount
  
}

// +3 Guest Function
function threeGuest(){
  guestCount += 3
  guestScore.textContent = guestCount
}

// Save Guest
function saveGuest (){
  let countGuest = guestCount + " - "
  entryGuest.textContent += countGuest
  
}
// Revert Guest Function
function revertGuest (){
  guestCount = 0
  guestScore.textContent = guestCount
}
