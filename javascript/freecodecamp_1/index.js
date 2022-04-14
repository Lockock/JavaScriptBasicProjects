// Comment use tow // build inline comment 
/* 
 this is a muti-line 
 comment
*/

// data type 7 types 
/* 

undefined, something undefine
null, nothing
boolean, true or false
string, text
symbol, 
number, number
and object can store a lot of different key value pairs 物件 鍵 值

*/
// variable is a box u can fill with data
//變數三種宣告方式 var let const  var是全域 let是你宣告的那個範圍 const never change
var myName = "Tony";
let ourName = "freecodecamp";
const pi= 3.14;

var a;
var b = 2;
console.log(a);
a = 7;
b = a;

console.log(a);

//在js的變數裡面 是要注意大小寫的 如果 我今天寫 num1 = 3; NUM2 = 4
//                                num3 = num1 + num2 因為  NUM2 跟 num2 是不一樣的 所以不會是7
// 這點在function 函式中也是一樣 
// 通常寫法 第一個字母小寫 換單字的第一個字大寫 freeCodeCamp 這樣會比較好

// increment 中文 增量 意思是 +1
var myVar = 87;
myVar = myVar +1;
myVar++; //也是
//這就是 increment 反之 decrement 就是減量
myVar = myVar - 1;
myVar--;

// remainder 餘數 8%5 = 3 餘數常用於決定是不是奇偶數 除2餘0 偶數 除2餘1 奇數

var a =3;
//下面兩行意思一樣
a = a + 12;
a += 12;
var b = 12;
//下面兩行意思一樣
b = b -3;
b -= 3;
var c = 12;
//下面兩行意思一樣
c = c * 3;
c *= 3;
var d = 12;
//下面兩行意思一樣
d = d / 3;
d /= 3;

//string 中用雙引號 \"
var string = " 我要用\"雙引號\" ";
console.log(string);
// 但如果要用雙引號 通常不用上面那個方法 通常用下面
var string = ' 我要用"雙引號" ';
// 如果 單雙引號都要用 
var string = ` 我要用'單引號' 也要用 "雙引號" `;
//第一個用法的變化
/* 
\' 單引號
\" 雙引號
\\ 後斜線
\n 新行 直接下一航
\r carriage return
\t tab
\b backspace
\f form feed
*/
var myName = "Tony";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);
// 找字串長度
myNameLength = myName.length;

//找字串中的某一個字 下面是找第一個字
firstLetterOfmyName = myName[0];
console.log(firstLetterOfmyName);
//如果要找字串最後一個字 用長度找
LastLetterOfmyName = myName[ myName.length - 1];
console.log(LastLetterOfmyName);

//文字不可以被取代 
var myStr = "Jello World!";
myStr[0] = "H"; //這樣沒辦法讓上面變成Hello World! 但可以直接改就好

myArray = [ "Tony", 2, true, ];
var myData = myArray[0];

myArray = [
    ["p", 2],
    [ 3, false],
    ["12",12]
]
var myData = myArray[0][0]; 

//陣列可以被取代
myArray = [ "Tony", 2, true, ];
myArray[0] = "Ben";  //這樣陣列就變了 二階應該也是可以被取代
myArray.push(["45",3]); //如果要在陣列中加入新資料可以這樣做 向我現在就是在陣列中在加陣列
var myRemoveData = myArray.pop(); //移除陣列中的資料可以用 pop 但他會移除最後一個資料 
console.log(myRemoveData);// 剛剛上面加了["45",3] 現在被移除了 myArray 又變回 [ "Ben", 2, true, ]
//如果是要移除第一個資料 就用 myArray.shift();
//如果是要加入第一個資料 就用 myArray.unshift( "dog" );

var d1 = 10;

function ourFunction(a,b){
    console.log("hello world!");
    console.log(a - b);
    var c1 = 6; //如果這邊有用 var 宣告變數 那就不是全域變數了 我們先較地域變數好了
    d1 = 5; //雖然宣告在function裡面 但因為沒有用 var 宣告 所以自動變成全域變數
    console.log(c1);
    return d1;
}
ourFunction(12,5);
//console.log(c1); //雖然跟124行一樣 但因為c1不是全域變數 所以這邊會是undefined
console.log(d1); //地域變數會領先全域變數 我在上面宣告 全域變數d1是 10 function裡面說 d1是5 最後印會是5 

//我們做一個funuctoin是可以往矩陣加東西 最後會把矩陣的第一個東西移出
function addArrayInLine(arr,item){
    arr.push(item);
    return arr.shift();
}

var testArray =[1,2,3,4,5]
console.log("Before : " + JSON.stringify(testArray)); // JSON.stringify(testArray)) 是可以把矩陣變成字串
console.log(addArrayInLine(testArray,6));
console.log("After : " + JSON.stringify(testArray));

function trueOrFalse( tom ){
    if( tom ){
        return "tom is true";
    }
    return "tom is false";
}
console.log(trueOrFalse(false));

function testEquel( val ){
    if( val === 12 ){
        return "val is right";
    }
    return "val is wrong";
}
console.log(testEquel("12"));

/* 
 === 三個等號會檢查屬性type
3 === 3; ture
3 === "3" ; false

3 == 3 ; true
3 == "3"; true

3 !== 3 ;false
3 !== "3"; true
*/

function testEquel1( val1 ){
    if( val1 != 12 ){
        return "val1 is wrong";
    }
    return "val1 is right";
}
console.log(testEquel1("10"));

/* 
 a && b a且b 
 a || b a或b
 else 2選1的情況
 else if 有很多條件的情況 a > 50 a > 25 a > 5 
*/

/* 
num < 5 return "tiny"
num < 10 return "small"
num < 15 return "medium"
num < 20 return "large"
num >= 20 return huge
*/
function numSizeTest(num){
    if(num < 5){
        return "tiny";
    }
    else if(num < 10){
        return "small"
    }
    else if(num < 15){
        return "medium";
    }
    else if(num < 20){
        return "large";
    }
    else{
        return "huge";
    }
};

console.log(numSizeTest(12));

function golfScore(par, strokes){
    if( strokes == 1){
        return "Hole-in-one";
    }
    else if( strokes <= par - 2){
        return "eagle"
    }
    else if(strokes == par - 1){
        return "birdle"
    }
    else if( strokes == par ){
        return "par";
    }
    else if( strokes == par + 1){
        return "bogey";
    }
    else if( strokes == par + 2){
        return "double bogey";
    }
    else{
        return "go home";
    }
};
console.log(golfScore(4,6));

//switch的用法 跟if有點像
function caseInSwitch( val ){
    var answer = ""; 
    switch( val ){ //如果 val 是 數字1 就會是 case1 
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;    
        default: //如果輸入的是上面4個以外的東西 就會return下面那個答案 有點像是else一樣
            answer = "else";
            break;
    }
    return answer
}
console.log(caseInSwitch(1));

function caseInSwitch1( val ){
    var answer = ""; 
    switch( val ){ //如果 想要輸入123 都得到下面的答案 請參考下面
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "medium";
            break;    
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;    
        default: //如果輸入的是上面4個以外的東西 就會return下面那個答案 有點像是else一樣
            answer = "else";
            break;
    }
    return answer
}
console.log(caseInSwitch1(7));

function isLess( a2 , b2 ){
    return a2 < b2;
}
console.log(isLess(10,5));

function abTest( a3, b3 ){
    if( a < 0 || b < 0 ){
        return "undefine"
    }
    else{
        return Math.round(Math.pow(Math.sqrt(a3) + Math.sqrt(b3),2));
    }
}
console.log(abTest(2,2));

//blackjack card count function 
//看到點數低的卡片 count goes up 看到點數高的卡片 count goes down 中間點書 count stay same
//count > 0 bet high ; count =0 or < 0 bet low 
var count = 0;

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count = count + 0;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if(count > 0 ){
        return count + " bet high";
    }
    else{
        return count + "hold";
    }
}
console.log(cc(10));

//object
var myDog = {
//   "屬性":"資訊"
    "name":"white",
    "legs":4,
    "tails":1,
    "freinds":["ming","tang","yellow"],
}
var dogFreinds = myDog.freinds[1];
var doglegs = myDog.legs;

var dogName = "name";
var myDogName = myDog[dogName]; //中括號通常用在中間有空白的字 但不要有空白就好
console.log(myDogName);

myDog.name = "Happy white"; // 改變物件資訊
console.log(myDog.name);

myDog.age = 10; //增加物件屬性
myDog["type"] = "big";
console.log(myDog.type);

delete myDog.type; //刪除物件屬性
console.log(myDog.type);

// 可以用物件 取代 switch 像是字典一樣
// 查詢object是否有這個屬性用 hasOwnProperty 會回傳 true 或 false 可以知道是否有這個屬性
function checkObj(checkProp){
    if(myDog.hasOwnProperty(checkProp)){
        return myDog[checkProp];
    }
    else{
        return "not found";
    }
}
console.log(checkObj("type"));

//物件裡放物件
var myStore = {
    "car":{
        "year":2008,
        "price":2000,
        "inside":{
            "car box":"big",
            "car seat":"safe"
        }
    },
    "TV":{
        "year":2019,
        "price":1000,
    }
}
console.log(myStore.car.inside["car box"]);

var myCollection = {
    "2548":{
        "album":"Slippery When Wet",
        "artist":"Bon Jovi",
        "tracks":[
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468":{
        "album":"1999",
        "artist":"Prince",
        "tracks":[
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245":{
        "artist": "Robert Palmer",
        "tracks":[]
    },
    "5439":{
        "album":"ABBA Gold"
    }
};
//keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(myCollection));

function updateRecords( id, prop, value){
    if( value === ""){
        delete myCollection.id.prop;
    }
    else if ( prop === "tracks" ){
        myCollection[id][prop] = myCollection[id][prop] || [];
        myCollection[id][prop].push(value);
    }
    else{
        myCollection[id][prop] = value ;
    }
    return myCollection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA" )); //在自己試寫一次

var myArray1 = [];
var i = 0;
while( i < 5 ){
    myArray1.push(i);
    i++;
}
console.log(JSON.stringify(myArray1));

var myArray1 = [];
for(var i = 0; i < 5; i++ ){
    myArray1.push(i);
}
console.log(JSON.stringify(myArray1));

var myArray2 =[5,7,9,12,6];
var mySum = 0 ;
for( var i=0 ; i < myArray2.length; i++ ){
    mySum += myArray2[i];
}
console.log(mySum);


function mutiplyAll ( arr ){
    var product = 1;
    for( var i =0; i < arr.length; i++ ){
        for(var j =0; j < arr[i].length ; j++ ){
            product *= arr[i][j];
        }
    }
    return product;
}

var product1 = mutiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product1);

export const capitalizeString = str => str.toUpperCase()

