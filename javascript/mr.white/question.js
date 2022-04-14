document.write("<h1>這是製作一個問答程式 可以去看question.js 很煩我先關掉</h1>");
//今天要做一個問答程式
//把問題都放在一個陣列裡面 然後用物件表示問題 因為問題包含問題本身 跟 問題答案
var questions =[
    {
        prompt:"香蕉是什麼顏色? \n(a)紅色 \n(b)綠色 \n(c)黃色", // \n 可以在視窗做換行
        answer:"c" //如果要額外的答案 要怎麼做
    },
    {
        prompt:"草莓是什麼顏色? \n(a)紅色 \n(b)綠色 \n(c)黃色",
        answer:"a"
    },
    {
        prompt:"1公尺是幾公分? \n(a)10 \n(b)100 \n(c)1000",
        answer:"b"
    }
]
//score代表答對的題目
/* var score = 0;
for(var i=0; i < questions.length ; i++ ){
    var input = prompt(questions[i].prompt);
    if( input == questions[i].answer ){
        score++;
        alert("恭喜你答對了");
    }
    else{
        alert("可惜答錯了");   
    }
}
document.write("恭喜你答對了" + score + "題"); */
