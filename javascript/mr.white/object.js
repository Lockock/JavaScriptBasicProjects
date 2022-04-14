//物件 object 
document.write("<h1>這是object的使用方式練習 可以去看object.js</h1>");
function br(){
    document.write("<br/>");
}

//物件是可以存放很多 key 跟 value 的配對 
//                  鍵     值

// 我們現在有一個變數 person 他等於一個物件 裡面存放的是關於這個人的資訊

var person ={
    //底下就是 key:value 如果要打下一個要加逗號,
    name:"小白",
    age:23,
    is_male:true
};//大括號外面記得放分號;
//這樣我們就創建了上面那個物件

document.write(person.name,person.age);
//使用方式就是先打出這個物件的名稱 在說想取得這個物件的甚麼資訊
br();

// 物件中也可以放函式
var person ={
    name:"小白",
    age:23,
    is_male:true,
    print_name:function(){
        document.write(this.name);
        // this 是指這個函式隸屬於哪個物件 目前是隸屬於person 所以其實也是person.name的意思
    }
};
person.print_name();
br();

//基本上所以js的東西都可以看做是物件 
// var phrase = "hello";
// phrase.length();//取的phrase這個物件中的length屬性 長度
// phrase.indexOf();//取的phrase這個物件中的indexOf屬性

//我們如何使用物件表達現實生活中的東西
//我們現實中的東西很難用單單一個數字 字串 布林值 表達出來 
//假如我們今天想介紹一部電影 裡面有太多的資訊了 不可能用單單一個數字 字串 布林值 表達出來
//所以我們就可以製作一個物件介紹電影
var movie ={
    title:"刻在你心底的名字",
    maker:"氧氣電影",
    duration:114,
    actors:[
        {
            name:"陳昊森",
            age:24,
            is_male:true
        },
        {
            name:"曾敬驊",
            age:23,
            is_male:true
        }
    ]
};
document.write(movie.title);
br();
document.write(movie.actors[0].name);
br();
