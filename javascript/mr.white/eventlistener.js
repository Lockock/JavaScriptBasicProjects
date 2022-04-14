document.write("<h1>這是event listener的使用方式練習 可以去看event listener.js</h1>");
function br(){
    document.write("<br/>");
}
//event listener 事件監聽器
// 事件監聽器可以幫我們偵測網頁上的任何風吹草動 像是滑鼠點了甚麼 鍵盤打了甚麼 都可以被偵測

function handle_click(element){
    // element 是接收 html傳送過來的屬性 而剛剛我們是接收了 button屬性
    // alert("叫你按就按阿");
    element.innerText = "按了就變了吧";
    element.style.color = "red";
}
