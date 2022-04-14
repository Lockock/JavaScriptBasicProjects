/* const btnDec = document.getElementById("btnDec");
const btnRes = document.getElementById("btnRes");
const btnInc = document.getElementById("btnInc");
const counterNum = document.querySelector(".counterNum");

let num = 0;

btnDec.addEventListener("click",function(){
    num--;
    if(num>0){document.querySelector(".counterNum").style.color = "green";}
    if(num<0){document.querySelector(".counterNum").style.color = "red";}
    if(num==0){document.querySelector(".counterNum").style.color = "hsl(209, 61%, 16%)";}
    return counterNum.textContent = num;
})
btnRes.addEventListener("click",function(){
    num =0;
    document.querySelector(".counterNum").style.color = "hsl(209, 61%, 16%)";
    return counterNum.textContent = num;
})
btnInc.addEventListener("click",function(){
    num++;
    if(num>0){document.querySelector(".counterNum").style.color = "green";}
    if(num<0){document.querySelector(".counterNum").style.color = "red";}
    if(num==0){document.querySelector(".counterNum").style.color = "hsl(209, 61%, 16%)";}
    return counterNum.textContent = num;
}) */ 
// 上面是我的方法 下面是作者的方法

//set initial count
let count = 0;

//select value and btns
const value = document.querySelector("#value"); //選擇我們顯示的值
const btns = document.querySelectorAll(".btn"); //選擇all btns
//console.log(btns); // 這邊會看到我們選擇的物件 會存在NodeList裡面

btns.forEach(function(item){
    //console.log(item); //我們重複console.log btns 裡面的東西 如果忘記可以去看
    item.addEventListener("click",function(e){
        //console.log(e.currentTarget.classList);//幫每個按鈕裝 eventListener 可以印出每個被我們點擊的classList
        const styles = e.currentTarget.classList; // 點擊的那個資訊存進styles 如果styles.contains("decrease") 這個class 我們就可以-1
        if(styles.contains("decrease")){count--;};
        if(styles.contains("reset")){count=0;};
        if(styles.contains("increase")){count++;};
        if(count > 0){value.style.color = "green";};
        if(count == 0){value.style.color = "#222";};
        if(count < 0){value.style.color = "red";};
        return value.textContent = count;
    })
})
//我的方法是一個一個選按鈕 其實可以直接選全部 用foreach增加eListener 