const hourElemnt = document.querySelector('#hours span');
const minutesElemnt = document.querySelector('#minutes span');
const secondsElemnt = document.querySelector('#seconds span');
const startButton = document.querySelector('.buttonsSt');
console.log(startButton);
const pauseButton = document.querySelector('.buttonsPause');
console.log(pauseButton);
const stopButton = document.querySelector('.buttonsStop');
const delButton = document.querySelector('.buttonsDel');
const addButton = document.querySelector('.buttonsAdd');
const addForm = document.querySelector('.wrap');

let minTime = 00,
    counter = 0,
    hourTime = 00,
    secTime = 00,
    interval;
addForm.addEventListener('submit', (event) => {
    event.preventDefault();

});

function timer() {
    document.querySelector('#seconds span').innerHTML = secTime;
    document.querySelector('#minutes span').innerHTML = minTime;
    document.querySelector('#hours span').innerHTML = hourTime;
    if (hourTime < 0) {
        hourTime = '00';
        minTime = '00';
        secTime ='00';
        counter = 0;
    }
}

function addTime() {
    addButton.addEventListener('click', () => {
        if (hourTime == 0) hourTime = '00';
        minTime += 15;
        if (minTime >= 60) {
            counter++;
            if (hourTime < 10) {
                hourTime = "0" + counter;
                console.log(hourTime);
            } else {
                hourTime = counter;
            }
            if(minTime == 0){
                minTime = '0' + minTime;
            }
            minTime = 0;

        }
        timer();
    });
    delButton.addEventListener('click', () => {
        if (minTime == 00 && hourTime == 00 && hourTime == 0) {
            return;
        }
        minTime -= 15;
        if (minTime <= -1) {
            counter--;
            if (hourTime < 10) {
                hourTime = "0" + counter;
                console.log(hourTime);
            } else {
                hourTime = counter;
            }
            if(minTime < 10){
                minTime = '0' + minTime;
            }
            if(secTime < 10){
                secTime = '0' + secTime;
            }
            if (minTime <= 0) {
                minTime = 45;

            }
        }

        timer();
    });
    console.log(counter);
}
function startTime(){
    if(minTime == 0 || minTime == 00){
    minTime = 60;
    hourTime--; 

}
    if(secTime >= 0){  
         if(secTime == 0 || secTime == 00){
        secTime = 60;
        minTime--;
    } 
    secTime--;
}
if(minTime == 60){
    minTime--;
    hourTime--;
}
timer();
    }

function once() {
    console.log(minTime);
    startButton.addEventListener('click', () => {
        if (secTime > 0 || minTime > 0 || hourTime > 0) {
            startButton.style.background = 'white';
            startButton.style.color = 'black';
            pauseButton.style.background = 'black';
            pauseButton.style.color = 'white';
            startButton.disabled = 'disabled';
            interval = setInterval(startTime, 1000);
        }
    });
    stopButton.addEventListener('click', ()=>{
        clearInterval(interval);
        clearFields();
});
}
pauseButton.addEventListener('click', () => {
    clearInterval(interval);
    startButton.disabled = !startButton.disabled;
    pauseButton.style.background = 'white';
    pauseButton.style.color = 'black';
    startButton.style.background = 'black';
    startButton.style.color = 'white';

});


//startButton.addEventListener('click', () => {
//    
//});
function clearFields(){
    minTime = 00;
    counter = 0;
    hourTime = 00;
    secTime = 00;
    document.querySelector('#seconds span').innerHTML = secTime;
    document.querySelector('#minutes span').innerHTML = minTime;
    document.querySelector('#hours span').innerHTML = hourTime;
}

once();
addTime();
