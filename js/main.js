'use strict'

// HOME section
// aside


let menuWidth = $('.menu').outerWidth()
$('.option').click(function () {
    if ($('aside').css('left') == '0px')
        $('aside').animate({ left: `-${menuWidth}` })
    else
        $('aside').animate({ left: `0px` })
});


$('.closebtn').click(function () {
    $('aside').animate({ left: `-${menuWidth}` })
})
$('.option').click()

// singers section
let accordionContainer = document.getElementById("singers");
let btns = accordionContainer.getElementsByClassName("accordion");

showActivePanel();

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {

        if (this.classList.contains("active"))
            this.classList.toggle("active");
        else {
            removeAllActives();
            this.classList.toggle("active");
        }
        showActivePanel();
    });
}

function removeAllActives() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
}
function showActivePanel() {

    for (let i = 0; i < btns.length; i++) {
        let arrow = btns[i].children[0].children[0];
        let panel = btns[i].nextElementSibling;

        if (btns[i].classList.contains("active")) {
            panel.style.maxHeight = panel.scrollHeight + "px";
            arrow.classList.replace("fa-angle-down", "fa-angle-up");
        }
        else {
            panel.style.maxHeight = 0;
            arrow.classList.replace("fa-angle-up", "fa-angle-down");
        }
    }
}


//countdown section

let date = new Date("March 1, 2024").getTime();
let x = setInterval(function () {

    let now = new Date().getTime();
    let remainingTime = date - now;

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("daysCounter").innerHTML = days;
    document.getElementById("hoursCounter").innerHTML = hours;
    document.getElementById("minutesCounter").innerHTML = minutes;
    document.getElementById("secondsCounter").innerHTML = seconds;


    if (ETA < 0) {
        clearInterval(x);
        document.getElementById("counterID").innerHTML = "Event has EXPIRED";
    }
}, 1000);




//contact section

let contactDIV = document.getElementById("contact");
let txt = document.getElementsByTagName("textarea")[0];

txt.addEventListener("keyup", function () {
    let msg = 100 - txt.textLength;
    txt.nextElementSibling.children[0].innerHTML = 100 - txt.textLength;
});

