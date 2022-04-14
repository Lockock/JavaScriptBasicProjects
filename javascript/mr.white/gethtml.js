window.document.write("<h1>這是取得html元素的使用方式練習 可以去看gethtml.js</h1>");
function br(){
    document.write("<br/>");
}

//如何取得html元素 

//  我們從一開始就一直用 document.write(); 我們會說 document 是一個物件 document.write() 就是用 document 這個物件底下的 write() 函式
// 那到底 document 是什麼東西 那我們就要先介紹 window

//window 是一個全域的物件 它代表的是我們整個瀏覽器 也就是說 document 也是 一個 window 底下的屬性

// 所以正確寫法是
window.document.write("哈哈");

//window.prompt("哈哈");  //prompt()也是window底下的函式

var a = 123;
window.document.write(window.a);
//因為window是全域的物件 所以通常會省略 如果想知道更多window底下的屬性 可以去 w3c js browser BOM 找

// document 就是 window 底下的物件 負責處理跟操作html檔案裡面的東西 document.write() 就是在html檔案裡面寫東西

// 所以如果要取的html的元素 我們就要使用不同的函式 getElementById()
var h1 = document.getElementById("header");
console.log(h1); //console.log是一個非常好用除錯跟測試的指令 他可以幫我們想要印出來的東西顯示在console裡面 瀏覽器按f12 element旁邊就是console
// 取得h1標籤就可以對他做其他事
h1.innerText = "我已經改變取得的元素了"; //改變內容用 innerText
h1.style.backgroundColor = "red"; // 可以改字的背景顏色 語法差不多
h1.style.color = "blue"; // 改字的顏色

var a = document.getElementById("link");
console.log(a);
a.href = "https://amazon.com";
a.style.backgroundColor = "yellow";

//要注意引入標籤的程式碼 在html的檔案裡面一定要在 js的程式碼上面 不然改不到

