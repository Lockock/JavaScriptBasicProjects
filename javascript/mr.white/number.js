document.write("<h1>這是數字的使用方法練習 可以去看 number.js</h1>");
var br="<br/>";
var space=" ";
// 如何使用數字、數字的用法
document.write(6);
document.write(br);

document.write(-6.2);
document.write(br);

//加減乘除就很簡單 直接打就好 以下都用6 2 示範 在js也有先乘除後加減的規則 也可以用括號
document.write("6跟2的加減乘除");
document.write(6+2 + space);
document.write(6-2 + space);
document.write(6*2 + space);
document.write(6/2 + space);
document.write(br);

//用變數的運算 一樣用 6跟2
document.write("6跟2的加減乘除 使用變數");
var number1=6;
var number2=2;
document.write(number1 + number2 + space);
document.write(number1 - number2 + space);
document.write(number1 * number2 + space);
document.write(number1 / number2 + space);
document.write(br);

//找餘數 用 8除3 舉例 8除3會餘2 用%這個符號 
document.write( "8除3的餘數:" + 8%3 );
document.write(br);

//如果要取絕對值 用Math.abs() 中間填數字 
document.write( "6的絕對值:" + Math.abs(6));
document.write(br);
document.write( "-6的絕對值:" + Math.abs(-6));
document.write(br);

//如果想在一堆數字中找最大最小值 可以用Math.max() 最小值用 Math.min() 中間要放多少數字都可以
document.write( "一大堆數字中的最大值:" + Math.max(number1,2,3,55,88,92,4,56,67,102,45));
document.write(br);
document.write( "一大堆數字中的最小值:" + Math.min(number1,2,3,55,88,92,4,56,67,102,45));
document.write(br);

// 如果想要做4捨5入 可以用 Math.round() 中間輸入一個數字 
// 如果想要做平方 可以用 Math.pow() 輸入兩個數字 如果輸入 Math.pow(2,3) 就是指 2的3次方
// 如果想作開根號 可以用 Math.sqrt() 中間輸入一個數字
var number3 =12.6;
document.write("12.6 4捨5入:" + Math.round(number3) );
document.write(br);
document.write("12.6 平方:" + Math.pow(number3,2) );
document.write(br);
document.write("12.6 根號:" + Math.sqrt(number3) );
document.write(br);

// 如果想要生產隨機數字 可以使用Math.random()會產生0-1的隨機數字
document.write("0-1隨機數字:" + Math.random() );
document.write(br);
// 但如果想要是0-10的話 就要先*10
document.write("0-10隨機數字:" + Math.random() * 10 );
document.write(br);
// 但如果想要是0-10是整數的話的話 就要先*10 再取4捨5入
document.write("0-10隨機數字(整數):" + Math.round(Math.random() * 100) );
document.write(br);
