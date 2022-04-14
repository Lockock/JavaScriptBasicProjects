const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// #f15025

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    let randomNumber =0;
    const hexNumber = ["#"];
    for(let i =0;i<6;i++){
        randomNumber = getRandomNumber();
        hexNumber.push(hex[randomNumber]);
    }
    console.log(hexNumber.join(""))
    document.body.style.backgroundColor = hexNumber.join("");
    color.textContent = hexNumber.join("");
    //上面是我的方法 下面是作者的
    /* 
        let hexColor = "#";
        for(let i =0;i<6;i++){
            hexColor += hex[getRandomNumber()]
        }
        document.body.style.backgroundColor = hexColor;
        color.textContent = hexColor;
    */

});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}
