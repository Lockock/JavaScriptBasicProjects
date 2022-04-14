document.write("<h1>這是函式的使用方式練習 可以去看function.js</h1>");
// 函式 是一段預先寫好的程式碼 當我們今天呼叫函式的時候 那段程式碼才會執行
// 函式分成2個部分 第1部分是 函式的定義 第2部分是 函式的呼叫
var br="<br/>";
function br1(){
    document.write("<br/>");
}
// 定義函式 就像下面這樣 先打 function 再打函式的名稱 叫甚麼都可以 這次是取 hello 然後再函式內打這個函式的程式碼
function hello(){
    document.write("你好");
}
// 雖然我們已經定義好了函式 但這時網頁上還不會顯示 因為我們沒有呼叫他

// 呼叫函式就是像下面這樣 打出函式名稱就好 這樣網頁就會跑出函式內的指令 
hello();
//在引入function.js的那個檔案呼叫函式是沒用的 只能在這邊呼叫

br1();
br1();
//每當我們呼叫一次函式 就會跑一次函式內的程式碼 所以上面呼叫 br() 兩次 就會空兩行

// 我們也可以傳入一些資訊給函式 像是下面傳入一個name這樣
function hello1(name){
    document.write("你好" + name);
}
hello1("小白");
br1();

// 我們也可以傳入多個資訊給函式 像是下面的範例
function hello2(name,age){
    document.write("你好" + name + "<br/>" +"你今年" + age);
}
hello2("小白吃","23");
br1();

//測驗 定義一個函式叫做add 然後可以傳入2個數 會把2個傳入的數做相加 然後顯示在畫面上
function add(num1,num2){
    document.write( num1 + num2 );
}
add(8,3);
br1();

//函式很重要的觀念 回傳 return
function add1(num3,num4){
    return num3 + num4;
    document.write("小白");
}
document.write( add1(8,3) );
//為什麼不用上面第40行的那種方式 要用回傳的 原因是 我們的函示並不是運行完就把它寫出來這麼簡單 通常函式算完之後會回傳結果 因為我們可能還要拿結果去做其他的處理
// 函式只要碰到 reture 就會跳出來 所以像上面的 document.write("小白") 就不會被寫出來
br1();

// 測驗 瀏覽器運行下列程式碼 會顯示甚麼結果 5 10
function add2(num5,num6){
    document.write(num5+num6);
    document.write("<br/>");
    return 10;
    document.write("小白");
}
value = add2(3,2);
document.write( value );


