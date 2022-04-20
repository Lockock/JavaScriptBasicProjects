const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];



//select 3 things deadline giveaway all h4
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const allh4 = document.querySelectorAll('.deadline-format h4');
//console.log(allh4);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
let tempMin = tempDate.getMinutes();

/* set specific date */
// let futureDate = new Date(2022,3,25,22,30,0);

const futureDate = new Date(tempYear,tempMonth,tempDay + 10, 11, 30 , 0);

console.log(futureDate);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
// console.log(weekday);

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

/* future day - today = rest time
 1.改成ms 2.相減 3.換回 dd-hh-mm-ss */
const futureTime = futureDate.getTime();


function getRemainTime(){
    let today = new Date();
    const todayTime = today.getTime();
    const t = futureTime - todayTime;
    // console.log(t);
    // 1s = 1000ms 1min = 60s 1hr = 60mins 1d = 24hrs

    // values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    let d = Math.floor(t/oneDay);
    let h = Math.floor((t % oneDay) / oneHour);
    let m = Math.floor((t % oneHour) / oneMinute);
    let s = Math.floor((t % oneMinute) / 1000);

    //set values array
    const values = [d,h,m,s];
    
    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item
    }

    allh4.forEach(function(h4,index){
        h4.innerHTML = format(values[index]);
    });

    /* date expired */
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
    }

};

// countdown
let countdown = setInterval(function(){getRemainTime();},1000);


getRemainTime();

