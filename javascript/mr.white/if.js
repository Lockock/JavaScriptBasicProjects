document.write("<h1>這是if的使用方式練習 可以去看if.js</h1>");

function br(){
    document.write("<br/>");
}

// if判斷 可以讓我們在不同的情況下運行不同的程式碼 我們今天可能在狀況a想執行a程式碼 狀況b想執行b程式碼。
/* 翻譯成js語言
    1.
    如果 肚子餓
        我就去吃飯
*/
var hungry = true;
if(hungry){
    document.write("我就去吃飯");
}
br();
/* 
    2.
    如果 今天下雨
        我就開車去上班
    否則
        我就走路去上班
*/
var rainy = false;
if(rainy){
    document.write("我就開車去上班");
}
else{
    document.write("我就走路去上班");
}
br();

/* 
    3.
    如果 你考100分
        我給你1000元
    或是如果 你考80分以上
        我給你500元
    或是如果 你考60分以上
        我給你100元
    否則
        你給我300元
*/
var score = 65;
// == 的意思是判斷兩邊的數值是否相等
if( score == 100){
    document.write("我給你1000元");
}
else if(score >= 80){
    document.write("我給你500元");
}
else if(score >= 60){
    document.write("我給你100元");
}
else{
    document.write("你給我300元")
}
//這邊要注意的是 if 只要最前面的成立 就會直接顯示結果
//所以如果我今天85分 第二個條件是 >=60 第三個條件是 >=80 這樣第二個條件成立 會直接跑第二個的程式碼
br();

/* 
    4.
    如果 你考100分 且 今天下雨
        我給你1000元
    否則
        你給我100元
*/
var rainy = true;
var score = 100;
// 且 &&
if( score == 100 && rainy){
    document.write("我給你1000元");
}
else{
    document.write("你給我100元")
}
br();

/* 
    5.
    如果 你考100分 或 今天下雨
        我給你1000元
    否則
        你給我100元
*/
var rainy = true;
var score = 100;
//或 shift + \  ||
if( score == 100 || rainy){
    document.write("我給你1000元");
}
else{
    document.write("你給我100元")
}
br();

/* 
    如果 你考100分 或 今天沒有下雨
        我給你1000元
    否則
        你給我100元
*/

var rainy = true;
var score = 90;
//或 shift + \  ||
// 如果是要判斷沒有下雨 就在前面加! !代表反面的意思 本來是true會變false 本來false會變true
if( score == 100 || !rainy){
    document.write("我給你1000元");
}
else{
    document.write("你給我100元")
}
br();

//測驗 假設今天做一個函式 叫做max_num 這個函式需要我們傳入3個數 傳入之後這個函式會回傳給我們最大的數

function max_num( num1, num2, num3){
        if( num1 >= num2 && num1 >= num3){
            return num1;
        }
        else if( num2 >= num1 && num2 >= num3 ){
            return num2;
        }
        else{
            return num3;
        }
}
document.write( max_num(6,5,7));
br();