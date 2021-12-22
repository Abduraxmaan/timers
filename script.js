const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');

// let date = new Date();

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());



function clock() {

    let time = new Date(),
        hours = time.getHours() * 30,
        minutes = time.getMinutes() * 6,
        seconds = time.getSeconds() * 6;


    hour.style = `transform: rotate(${hours}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    sec.style = `transform: rotate(${seconds}deg)`;

    hoursNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

    setTimeout(() => clock(), 1000); /* Рекурсия - это когда функция внутри себя вызывает саму себя */
}


clock()


// setTimeout(() => {
//     console.log('asdasd');
// }, 5000)


// setInterval(() => {
//     console.log('asdasd');
// }, 1000);

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContent = document.querySelectorAll('.tabsContentItem');

// console.log(tabsItem.length);
// console.log(tabsContent.length);
// console.log(tabsItem);


// console.log(tabsContent[0]);



tabsItem.forEach((item, i) => {
    item.addEventListener('click', function () {
        removeActiveClass();
        this.classList.add('active');
        tabsContent[i].classList.add('active');
    })
})


function removeActiveClass() {
    tabsItem.forEach((item, i) => {
        item.classList.remove('active');
        tabsContent[i].classList.remove('active');
    })
}
 







// Timer field


const timerHour = querySelector('.stopwatch__hours'),
    timerMin = querySelector('.stopwatch__minutes'),
    timerSec = querySelector('.stopwatch__seconds'),
    timerButton = querySelector('.stopwatch__btn') 
    
let hours = 00,
    minutes = 00,
    seconds = 00
    
    
timerButton.addEventListener('click', () =>{ 
    setInterval(() => myTimer(), 1000);  
}) 

timerButton.addEventListener('click', () => {
    timerButton.innerHTML = 'STOP'
    
})
     
     
function myTimer() { 
    seconds++
    // Seconds
    
    if (seconds < 9) {
        timerSec.innerHTML = '0' + seconds;
    }
    
    if (seconds > 9) {
        timerSec.innerHTML = timerSec
    }
    
    if (seconds > 60) {
        minutes++
        timerMin.innerHTML = '0' + minutes
        seconds = 0
        timerSec.innerHTML = '0' + seconds
    }
    
    // Minutes
    
    if (minutes < 9) {
        timerMin.innerHTML = '0' + minutes
    }
    
    if (minutes > 9) {
        timerMin.innerHTML = timerMin
    }
    
    if (minutes > 60) {
        hours++
        timerHour.innerHTML = '0' + hours
        minutes = 0
        timerMin.innerHTML = '0' + minutes  
    }
        
    
    // Hours
    
    if (hours < 9) {
        timerHour.innerHTML = '0' + hours
    }
    
    if (hours > 9) {
        timerHour.innerHTML = timerHour
    }
    
 }    
        
        

