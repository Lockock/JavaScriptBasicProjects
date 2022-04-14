document.write("<h1>這是簡易計算機的呈現結果 可以看calculator.js 有夠煩 我先關掉</h1>");
// 製作基本計算機 
// 計算機可以讀取用戶輸入的兩個數字 再把兩個數字相加 並把結果顯示在螢幕畫面
//prompt 可以創造一個窗口讓用戶輸入資訊 然後我們在把這些資訊設成我們的變數
var br = "<br/>";

//var my_name = prompt("請輸入你的名字");

document.write("你好啊"+ my_name);
document.write(br);

//var number1 = prompt("請輸入數字1");
//var number2 = prompt("請輸入數字2");
document.write( number1 + number2);
//假設上面我輸入3跟5 看起來是要顯示8 但實際上會顯示35 因為上面的是3的字串+5的字串 所以我們要找方法把字串變成數字
document.write(br);

//字串轉換數字的方式有兩種 
//var number3 = prompt("請輸入數字3");
//var number4 = prompt("請輸入數字4");
// 第一種是 parseInt()在裡面輸入變數 但注意他只會把字串取整數部分 所以如果是3+3.5會等於6
// number3 = parseInt(number3);
// number4 = parseInt(number4);
// document.write( number3 + number4);
// document.write(br);

//var number5 = prompt("請輸入數字5");
//var number6 = prompt("請輸入數字6");
// 第二種就是用 parseFloat()在裡面輸入變數 可以有小數點
number5 = parseFloat(number5);
number6 = parseFloat(number6);
document.write( number5 + number6);
