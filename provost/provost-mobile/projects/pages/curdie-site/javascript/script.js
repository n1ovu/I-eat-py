
const myHeader = document.getElementsByTagName('h1')[0];
const subl = document.querySelector('.subl')

setInterval(function() {
    if (myHeader.style.color === "blue") {
        myHeader.style.color = "yellow";
    }else if (myHeader.style.color === "green") {
        myHeader.style.color = "red";
    }else if (myHeader.style.color === "yellow") {
        myHeader.style.color = "green";
    }else {
        myHeader.style.color = "blue";
    }
}, 1000);

const modal1 = document.querySelector('#modal1')
const modal2 = document.querySelector('#modal2')
const openBtn1 = document.querySelector('#open-modal1-btn')
const openBtn2 = document.querySelector('#open-modal2-btn')
const closeBtn1 = document.querySelector('#close-modal1-btn')
const closeBtn2 = document.querySelector('#close-modal2-btn')
const overlay = document.querySelector('#overlay')

openBtn1.addEventListener('click', () => {
    modal1.classList.add('open')
    overlay.classList.add('open')
})

closeBtn1.addEventListener('click', () => {
    modal1.classList.remove('open')
    overlay.classList.remove('open')
})

openBtn2.addEventListener('click', () => {
    modal2.classList.add('open')
    overlay.classList.add('open')
})

closeBtn2.addEventListener('click', () => {
    modal2.classList.remove('open')
    overlay.classList.remove('open')
})

// experimental subliminal messaging




setInterval(function() {
    subl.classList.toggle('open')
    setInterval(function() {
        if (subl.style.color === "blue") {
        subl.style.color = "orange";
        }else if (subl.style.color === "green") {
            subl.style.color = "red";
        }else if (subl.style.color === "orange") {
            subl.style.color = "green";
        }else {
            subl.style.color = "blue";
        }
    }, 1000)
    
}, 1000)