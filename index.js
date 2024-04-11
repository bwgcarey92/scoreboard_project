let score1 = document.getElementById('score-el1')
let score2 = document.getElementById('score-el2')

let count1 = 0
let count2 = 0

score1.textContent = count1
score2.textContent = count2

function add1Home() {
    count1 += 1
    score1.textContent = count1
}

function add2Home() {
    count1 += 2
    score1.textContent = count1
}

function add3Home() {
    count1 += 3
    score1.textContent = count1
}

function add1Guest() {
    count2 += 1
    score2.textContent = count2
}

function add2Guest() {
    count2 += 2
    score2.textContent = count2
}

function add3Guest() {
    count2 += 3
    score2.textContent = count2
}