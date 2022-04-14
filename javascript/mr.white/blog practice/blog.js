//製作部落格 功能 可以讓我們輸入標題的欄位 可以讓我們輸入內容的欄位 有一個按鈕按下去就可以發布上面打的文章
var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

btn.addEventListener("click",function(){
    list.innerHTML = list.innerHTML + `
    <div class = "article">
        <h2>${title.value}</h2>
        <p>${content.value}</p>
        <hr/>
    </div>
    `
    // 因為我們要在list裡面 新增新的區塊 所以使用 innerHTML 可以加上我們想要的東西
    // 而我們如果要取得輸入的資訊 title.value 就可以獲得輸入的資訊
    // `` 這是模板語法 可以在裡面直接使用 html的語法
    
    title.value="";
    content.value="";
    // 最後把上面兩個內容都清空 方便重新輸入
});
