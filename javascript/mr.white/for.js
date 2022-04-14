document.write("<h1>這是for的使用方式練習 可以去看for.js</h1>");
// for 迴圈 for跟while一樣 會重複執行程式碼 直到我們的條件判斷是false 基本上兩個是同樣的東西 只是for迴圈比較簡潔
function br(){
    document.write("<br/>");
}

var i = 0;
while( i < 10 ){
    document.write(i);
    br();
    i++
}
br();
document.write("底下是用for迴圈做0-9 跟while迴圈一樣");
//for迴圈要輸入3個變數 第一個是我們的變數 第二個是條件判斷 第三個是每跑完一次程式要做的事情
for( var i = 0; i < 10; i++ ){
    document.write(i);
    br();
}
br();

// 如果我們今天想要取的一個陣列裡面所有的值 也可以用for迴圈來做
var friends = ["小黑","小黃","小白","tom","高高","小新","小綠"];
for (var q=0 ; q < friends.length ; q++ ){
    document.write(friends[q]);
    br();
}


