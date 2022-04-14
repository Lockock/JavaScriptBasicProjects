document.write("js練習用引入");
/*123*/

// 基本資料型態&變數
//string 字串 純文字 使用方式就是 "" 裡面放文字 

//數字 數字我猜可以直接相加 而字串不行

//布林值 true false

//變數 可以想像是存放各種資料的容器 變數可以讓我們更方便去管理資料
//下面的變數是指 我們創造一個 叫做 my_name 的變數 然後把資料 小白 放到變數裡面
//變數的取名規則 只能是英文大小寫 或是 數字 或是 $ 或是 _ 的組合
//開頭不能是數字
var my_name = "小黑";
var my_age = 87;
var is_male = true;
// 變數怎麼好管理資料 假設今天 小白 要改名成 小黑 如果沒用變數 我們就要一個一個改 如果有用 可以直接改變數

//變數也可以隨時隨地去改變它的資料 像我在27行將 my_name 改成小白 所以28行印出小白 我又在31行 my_name 改成100 後面出現的變數都是100
//變數可以改成 字串 數字 布林值

document.write("<h1>這是基本資料型態&變數的練習</h1>");
//所以我們就可以用上面的變數 像下面這個例子
document.write(my_name);
document.write("<br/>");

my_name = "小白";
document.write(my_name);
document.write("<br/>");

my_name = 100;
document.write(my_name);
document.write("<br/>");

document.write(my_age);
document.write("<br/>");
document.write(is_male);
document.write("<br/>");
document.write("有一個人叫" + my_name);
document.write("<br/>");
document.write(my_name + "今年87歲");
document.write("<br/>");
document.write(my_name + "身高187公分");
document.write("<br/>");
document.write(my_name + "討厭自己87歲");