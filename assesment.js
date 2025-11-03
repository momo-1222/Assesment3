const pages = Array.from(document.querySelectorAll('.page'));

function dietVisit() {
    for(let i = 0; i < pages.length; i++) {
        if (pages[i] !== diet) {
            pages[i].classList.add("hidden");
        }
    }
    diet.classList.remove("hidden");
}

function exerciseVisit() {
    for(let i = 0; i < pages.length; i++) {
        if (pages[i] !== exercise) {
            pages[i].classList.add("hidden");
        }
    }
    exercise.classList.remove("hidden");
}

function selfcareVisit() {
    for(let i = 0; i < pages.length; i++) {
        if (pages[i] !== selfcare) {
            pages[i].classList.add("hidden");
        }
    }
    selfcare.classList.remove("hidden");
}

function homeVisit() {
    for(let i = 0; i < pages.length; i++) {
        if (pages[i] !== home) {
            pages[i].classList.add("hidden");
        }
    }
    home.classList.remove("hidden");
}

function exercise1Visit() {
    for(let i = 0; i < pages.length; i++) {
        if (pages[i] !== exercise1) {
            pages[i].classList.add("hidden");
        }
    }
    exercise1.classList.remove("hidden");
}

function exerciseFunctions() {
    for(let i = 0; i < pages.length; i++) {
        if (pages[i] !== exercises) {
            pages[i].classList.add("hidden");
        }
    }
    exercises.classList.remove("hidden");
}

dietSec.onclick = dietVisit;
dietSec1.onclick = dietVisit;
dietSec2.onclick = dietVisit;
dietSec3.onclick = dietVisit;
exerciseSec.onclick = exerciseVisit;
exerciseSec1.onclick = exerciseVisit;
exerciseSec2.onclick = exerciseVisit;
selfcareSec.onclick = selfcareVisit;
selfcareSec1.onclick = selfcareVisit;
selfcareSec2.onclick = selfcareVisit;
selfcareSec3.onclick = selfcareVisit;
homeSec.onclick = homeVisit;
homeSec1.onclick = homeVisit;
homeSec2.onclick = homeVisit;
homeSec3.onclick = homeVisit;
exerciseNow.onclick = exercise1Visit;
walkingButton.onclick = exerciseFunctions;
joggingButton.onclick = exerciseFunctions;
swimmingButton.onclick = exerciseFunctions;
pushupsButton.onclick = exerciseFunctions;
dancingButton.onclick = exerciseFunctions;
otherButton.onclick = exerciseFunctions;

