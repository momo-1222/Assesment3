const pages = Array.from(document.querySelectorAll('.page'));
activity = [];

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

function selfcareideas() {
    for(let i = 0; i < pages.length; i++) {
        if (pages[i] !== selfcareIdea) {
            pages[i].classList.add("hidden");
        }
    }
    selfcareIdea.classList.remove("hidden");
}

function settingsVisit() {
    for(let i = 0; i < pages.length; i++) {
        if (pages[i] !== settingsPage) {
            pages[i].classList.add("hidden");
        }
    }
    settingsPage.classList.remove("hidden");
}

function funcWalk() {
    exerciseFunctions(); 
    walking.classList.remove("hidden");
    activity.unshift("walking");
}

function funcJog() {
    exerciseFunctions(); 
    jogging.classList.remove("hidden");
    activity.unshift("jogging");
}

function selfcarebreat() {
    for(let i = 0; i < pages.length; i++) {
        if (pages[i] !== selfcareBreathe) {
            pages[i].classList.add("hidden");
        }
    }
    selfcareBreathe.classList.remove("hidden");
    alert("breathe in for 5 sec, Hold it for another 5 and breathe out for another 5 sec.")
}

function selfcarehelpline() {
    for(let i = 0; i < pages.length; i++) {
        if (pages[i] !== selfcareHelp) {
            pages[i].classList.add("hidden");
        }
    }
    selfcareHelp.classList.remove("hidden");
}

function menuToggle() {
    
    menuPage.classList.toggle("hidden");
}

function userNameupdate() {
    userName.textContent = nameInput.value + "!";
    userName1.textContent = nameInput.value+ "!";
    userName2.textContent = nameInput.value+ "!";
    userName3.textContent = nameInput.value+ "!";
    userName4.textContent = nameInput.value;
    homeVisit();
}

function edit() {
    for(let i = 0; i < pages.length; i++) {
        if (pages[i] !== nameUser) {
            pages[i].classList.add("hidden");
        }
    }
    nameUser.classList.remove("hidden");
}

function e(){
    if(checkboxT.checked) {
        terms.classList.add("hidden");
        pageTY.classList.remove("hidden");
    }
}

function timer() {
    let timeInput = document.getElementById("timeInput");
    let timeLeft = document.getElementById("timeLeft");

    let seconds = timeInput.value;
    let countdown = setInterval(function timeDisplay(){
        timeLeft.textContent = seconds;
        seconds = seconds - 1;
        if(seconds < 0) {
            clearInterval(countdown);
            timeLeft.textContent = "Well Done " + nameInput.value +"!"
            timerEnd.classList.remove("hidden");
        }
    }, 1000)
}

function timer1() {
    let seconds = timeInput1.value;
    let countdown = setInterval(function timeDisplay(){
        timeLeft1.textContent = seconds;
        seconds = seconds - 1;
        if(seconds < 0) {
            clearInterval(countdown);
            timeLeft1.textContent = "Well Done " + nameInput.value +"!"
            timerEnd1.classList.remove("hidden");
        }
    }, 1000)
}

function pastActivityupdates() {
    for(let i = 0; i < pages.length; i++) {
        if (pages[i] !== pastActivitySection) {
            pages[i].classList.add("hidden");
        }
    }
    pastActivitySection.classList.remove("hidden");
    one.textContent = "1. " + activity[0];
    two.textContent = "2. " + activity[1];
    three.textContent = "3. " + activity[2];
    four.textContent = "4. " + activity[3];
    five.textContent = "5. " + activity[4];
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
walkingButton.onclick = funcWalk;
joggingButton.onclick = funcJog;
swimmingButton.onclick = function funcSwim() {exerciseFunctions(); swimming.classList.remove("hidden"); activity.unshift("swimming");};
pushupsButton.onclick = function funcPushup() {exerciseFunctions(); pushups.classList.remove("hidden"); activity.unshift("pushups");};
dancingButton.onclick = function funcDance() {exerciseFunctions(); dancing.classList.remove("hidden"); activity.unshift("dancing");};
otherButton.onclick = function funcOther() {exerciseFunctions(); other.classList.remove("hidden"); activity.unshift("other-exercise");};
selfcareIdeas.onclick = selfcareideas;
backE.onclick = exercise1Visit;
walkingR.onclick = funcWalk;
joggingR.onclick = funcJog;
back.onclick = exerciseVisit;
back1.onclick = selfcareVisit;
back2.onclick = selfcareVisit;
back3.onclick = selfcareVisit;
breathing.onclick = selfcarebreat;
helpline.onclick = selfcarehelpline;
menu1.onclick = menuToggle;
menu2.onclick = menuToggle;
menu3.onclick = menuToggle;
menu4.onclick = menuToggle;
menuinmenu.onclick = menuToggle;
exerciseMenu.onclick = exerciseVisit;
dietMenu.onclick = dietVisit;
selfcareMenu.onclick = selfcareVisit;
tnc.onclick = function termsConditions() {terms.classList.remove("hidden");};
backTerms.onclick = function termsConditions() {terms.classList.add("hidden");};
start.onclick = function timerStart() {timerSetE.classList.remove("hidden");};
howtouse.onclick = function htuVisit() {htu.classList.remove("hidden");};
backHtu.onclick = function htuVisit() {htu.classList.add("hidden");};
timeInput.oninput = function time() {timeLength.textContent = timeInput.value;};
backTimer.onclick = function timerStart() {timerSetE.classList.add("hidden");};
button1.onclick = userNameupdate;
profile1.onclick = settingsVisit;
profile2.onclick = settingsVisit;
profile3.onclick = settingsVisit;
profile4.onclick = settingsVisit;
profile5.onclick = settingsVisit;
settings.onclick = settingsVisit;
backSettings.onclick = homeVisit;
editProfile.onclick = edit;
goHome.onclick = homeVisit;
goHome1.onclick = homeVisit;
checkboxT.onchange = function tyPage() {setTimeout(e, 500);};
startTimer.onclick = function exercisestart() {timer(); exerciseTimer.classList.remove("hidden"); timerEnd.classList.add("hidden");};
timerEnd.onclick = exercise1Visit;
timeInput1.oninput = function() {timeLength1.textContent = timeInput1.value;}
startTimer1.onclick = function brathestart() {timer1(); selfcareBreathe.classList.add("hidden"); selfcareTimer.classList.remove("hidden");};
timerEnd1.onclick = selfcareVisit;
pastActivity.onclick = pastActivityupdates;
backActivity.onclick = exerciseVisit;
