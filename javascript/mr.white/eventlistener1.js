document.write("<h1>這是把event listener寫在js的方法 可以去看event listener1.js</h1>");
function br(){
    document.write("<br/>");
}
//event listener 事件監聽器
// 事件監聽器可以幫我們偵測網頁上的任何風吹草動 像是滑鼠點了甚麼 鍵盤打了甚麼 都可以被偵測
// 先取得 html 的元素 然後將資料放到一個變數 在使用addEventListener 
// 我們要給兩個資訊 一個是監聽的項目 這是是點擊 所以是 click 一個是點擊後發生的事 這是是改變內文 用this 代表這次抓到得元素
var btn = document.getElementById("btn1");
btn.addEventListener("click",function(){
    //alert("叫你按就按阿");
    this.innerText = "按屁阿"
});

var img = document.getElementById("img");
img.addEventListener("mouseenter",function(){
    this.src = "hotpot2.jpeg";
})
img.addEventListener("mouseleave",function(){
    this.src = "hotpot1.jpeg";
})

//w3c event list 有很多觸發方式 可以多去研究