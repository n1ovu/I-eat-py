
const myHeader = document.getElementsByTagName('h1')[0];
const subl = document.querySelector('.subl-flower')

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