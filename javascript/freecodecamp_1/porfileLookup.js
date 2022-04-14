var contacts = [
    {
        "firstName": "Akira",
        "lastName" : "Laine",
        "number"   : "0543236543",
        "likes": [ "Pizza", "Coding", "Browne Points"]
    },
    {
        "firstName": "Harry",
        "lastName" : "Potter",
        "number" : "0994372684",
        "likes" : [ "Hogwarts","Magic","Hagrid"]
    },
    {
        "firstName" : "Sherlock",
        "lastName" : "Holmes",
        "number" : "0487345643",
        "likes" : ["Intriguing Cases", "Violin"]
    },
    {
        "firstName" : "Kristian",
        "lastName" : "Vos",
        "number" : "unknown",
        "likes" : ["JavaScript", "Gaming", "Foxes"]
    },
    {
        "firstName" : "Sherlock",
        "lastName" : "Holmes",
        "number" : "0487345643",
        "likes" : ["Intriguing Cases", "Violin"]
    }
]

function lookUpProfile(name, prop){
    for( var i=0; i < contacts.length; i++){
        if( name === contacts[i].firstName ){
            return contacts[i][prop] || "No such property";
        }
        else{
            return "no such contact";
        }
    }
}

var data = lookUpProfile("Akira","number");
console.log(data);

function randomNumber (){
    return Math.floor(Math.random()*10);
}
console.log(randomNumber());

function randomNumberRange ( max, min){
    return Math.floor( Math.random()*( max-min+1 )+ min );
}
console.log(randomNumberRange( 3, 50));

function convertToInteger(str){
    return parseInt(str);
}
convertToInteger("56");

function convertToInteger1(str){
    return parseInt(str,2);
}
console.log(convertToInteger1("10011")); //2進位置的轉換

function checkSign( num ){
    return num > 0 ? "positive" : num < 0 ? "negative": "is zero"; //有點像if 的用法 叫做 multiple ternary operators
}
console.log(checkSign(0));


var str = "tony";
const SENTENCE = str + " is cool";
// sentence = str + "is amazing";
console.log(SENTENCE); // const 不能改變 所以上面那句不行 會有error 然後用 const 會用大寫

//最好是主要用 let 跟 const  in own code

//雖然const不能改變 但可以換
const s =[5,7,2];
function editInPlace(){
    "use strict";
    //s = [2,5,7]; 直接這樣是不行的
    s[0] = 3;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);

//所以其實const還是可以換 那如果我不要讓她換 就要用 object.freeze();
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS ={
        PI:3.14
    };

    Object.freeze(MATH_CONSTANTS); //只要加這行就會freeze MATH_CONSTANTS 這樣pi就不會被換成99

    try{           //如果沒有100行 pi就會被試試看能不能換成99 再return出去
        MATH_CONSTANTS.PI = 99;
    } catch( ex ){
        console.log( ex );
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

//use arrow function to write concise anonymous functions
var magic = function(){
    return new Date();
}; //這叫做 anonymous functions 可以變成 arrow function 117行

const maigc = () => new Date();

var myConcat = function( arr1, arr2){
    return arr1.concat(arr2)
}
console.log(myConcat([1,2],[3,4,5]));

const myConcat1 = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat1([1,2],[3,4,5]));

//wrtie high arrow function 
//arrow function 再 high order function 很有用 像是 map filter reduce
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]; //底下示範 filter 過濾 map 匯入的數字對他做什麼處理
const squareList = ( arr ) =>{
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num >0).map(x => x*x);
    return squaredIntegers;
}
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//default變數 即使我們沒有輸入變數 還是有default
const increment =(function(){
    return function increment (number, value = 1){
        return number + value
    };
})();
console.log(increment(5,2));
console.log(increment(5));

function increment1(number, value =1){
    return number + value;
};
console.log(increment1(5));

//rest operator
const sum = (function(){
    return function sum(...args){ //...args就是rest operator
        return args.reduce((a,b) => a + b,0);
    };
})();
console.log(sum(1,2,3,4));

//spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
    arr2 = [...arr1]; //spread operator跟 rest operator 有點像 差別在於spread operator用於真實存在的array 
    //spread operator有點像是複製上面那個array 所以我們下面改了arr1 arr2卻沒有變
    arr1[0] = 'potato';
})();
console.log(arr2);

//use destructuring assignment to assign variable from objects

var voxel = {x:3.6, y:7.4, z:6.54};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
//上面是我們使用舊的變數定義方式 下面可以用destructuring直接assign variable
const { x:a4, y:b4, z:c4 } = voxel;

const AVG_TEMPERTURES = {
    today:77.5,
    tommorrow : 79,
}
function getTommorrowTemperture(avgTempertures){
    const{ tommorrow : tommorrowTemp} = avgTempertures;
    return tommorrowTemp;
}
console.log(getTommorrowTemperture(AVG_TEMPERTURES));

//use destructuring assignment to assign variable from nest-objects 

const LOCAL_FORECAST = {
    today:{min:72, max:83},
    tommorrow:{min:73.3, max:84.6}
};

function getMaxOfTmrw(forcast){
    const { tommorrow: {max : maxOfTmrw}} = forcast;
    return maxOfTmrw;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

//use destructuring assignment to assign variable from array 
const [ z1, x1, , y1] = [1, 2, 3, 4, 5, 6]; //如果我們想跳過第三個 可以直接跳過
console.log(z1,x1, y1);
//或是我們可以用destructuring assignment ?? 有看沒有懂
let a2 = 8, b2 = 6;
(() => {
    "use strict";
    [a2,b2] = [b2,a2]

})()
console.log(a2);
console.log(b2);

//use destructuring assignment with the rest operator 
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTow(list){

    const [ , ,...arr] = list; 
    //如果想要移除前面兩個 就跳過前面兩個 然後...arr 代表陣列剩餘的數
    return arr;
}
const arr3 = removeFirstTow(source);
console.log(arr3);
console.log(source);

//use destructuring assignment to pass an object as a function's parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min:-0.75,
    average:35.85
};
const half =(function(){
    return function half( {max, min} ){ 
        //當我們是輸入整個物件時 我們可以只選擇自己想要使用的物件資訊  
        return max+min/2;
    };
})();
console.log(stats);
console.log(half(stats)); //像stats雖然有很多資訊 但是我們只需要用 max, min 所以上面就只輸入{ max, min} 就好了 
//上面這個方法很常用在 api call 當我們拿到 api request 裡面會有很多資訊 但我們只想選擇自己想要的資訊而已

//create strings using template literals
const person ={
    name:"Tony",
    age:56
};

const greeting = `hello, my name is ${person.name}!
i am ${person.age} years old.`

console.log(greeting);

const result = {
    success:["max-length","no-amd","prefer-arrow-functions"],
    failure:["no-var","var-on-top","linebreak"],
    skipped:["id-blacklist","no-dup-keys"]
};
function makeList(arr){
    const resultDisplayArray = [];
    for(let i = 0; i < arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}
/* 
    *makeList(result.failure) should return:
    *[  `<li class="text-warning">no-var</li>`,
        `<li class="text-warning">var-on-top</li>`,
        `<li class="text-warning">linebreak</li>`
    ]

*/
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

//write concise object literal declarations using simple fields
const createPerson = (name , age, gender) => {
    return {
        name:name,
        age:age,
        gender:gender
    };
};
console.log(createPerson("tony",23, "male"));

const createPerson1 = (name , age, gender) => ({ name, age , gender});
console.log(createPerson1("tony",24, "male"));
//如果 key 跟 value都一樣 可以用上面那個方法紀錄資訊 比較簡單

//write concise declarative functions 物件可以包含函數 object can contain a function
const bicycle = {
    gear:2,
    setGear : function(newGear){
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
//上下幾乎一樣 下面比較簡單
const bicycle1 = {
    gear:2,
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
};

bicycle1.setGear(3);
console.log(bicycle1.gear);

//use class syntax to define a constructor function 製作物件模板
class SpaceShuttle{
    constructor( targetPlanet ){
        this.targetPlanet = targetPlanet;
    }
};

var zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

//use getters and setters to control access to an object
//用物件模板 我們常需要從物件中獲得資訊(數值value) 以及 設定物件的屬性資訊
//所以 獲得資訊getter 增加屬性資訊 就叫setter 
class Book{
    constructor(author){
        this._author = author;
    }
    //getter
    get writer(){
        return this._author;
    }
    //setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

//我們自己做一個thermostat
function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 *(temp - 32);
        }
    get temperature(){
        return this._temp;
    }
    set temperature(updateTemp){
        this._temp = updateTemp;
    }

    }
    return Thermostat; 
}
const Thermostat = makeClass();
const thermos = new Thermostat(40);
console.log(thermos);

let temp = thermos.temperature; //getter
console.log(temp);

thermos.temperature = 26;//setter
temp = thermos.temperature;
console.log(temp);

import { capitalizeString } from ".index";
const cap = capitalizeString("hello");
console.log(cap);

import * as somthing from "filename";
//上面是可以引入任何東西

export default function subtract(x,y){return x-y;}//輸出預設函式

import subtract from "math_functions";//輸入其他檔案的預設函式
subtract(7,4);
