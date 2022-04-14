document.write("<h1>這是while的使用方式練習 可以去看while.js</h1>");
//while 迴圈
function br(){
    document.write("<br/>");
}
// while 迴圈是 他是幫我們重複的執行一段程式碼 直到我們的條件判斷是false為止
//所以只要條件判斷是true 他就會一直執行我們的程式碼 

var i = 1;
while( i <= 3){
    document.write(i);
    br()
    i=i+1 // 也可以寫 i++
    // i 一開始是1 然後 寫下i i再+1變成2 可是還是小於3 再進入迴圈 再寫下i 再+1變成3 
    // 等於3 再進入迴圈 寫下i 再+1變成4 這是大於3 條件判斷false 所以就不會再進入迴圈了 
}
br();

//while的另外一個寫法 下面這樣就不會先判斷條件 而是先跑完第一次程式碼再判斷條件 所以就算一開始i大於5 也會進入程式碼
var i = 6;
do{
    document.write(i);
    br()
    i++
}while ( i<=5 )
br();
document.write("底下有一段密碼檢驗程式 我覺得很煩 先關掉");
//我們要製作一個密碼檢驗程式 可以輸入無限次的密碼 直到正確為止

/*
var password = 123456;
var input; 
while(password!=input){
    input=prompt("請輸入密碼");
}
    alert("登入成功");
*/
//上面這樣就可以無限次登入直到成功

//測驗 如果我們現在不想要無限次輸入 太不安全 最多只能輸入3次 要怎麼做 下面是我的作法 成功 很棒
/* 
var password = 123456;
var input;
var i = 0;
var i_max = 3;
while(password!=input && i<=i_max){
    i++;
    input=prompt("請輸入密碼");
}
if(i >= i_max){
    alert("超出輸入次數");
}
else{
    alert("登入成功");
}
 */

//下面是教學的作法
/* var password = 123456;
var input;
var entry_count=0;
var entry_limit = 3;
var out_of_limit = false;
while(password!=input && !out_of_limit){
    entry_count++
    if(entry_count<=entry_limit){
        input=prompt("請輸入密碼");
    }
    else{
        out_of_limit=true;
    }
}

if(out_of_limit){
    alert("超出輸入次數");
}
else{
    alert("登入成功");
} */


