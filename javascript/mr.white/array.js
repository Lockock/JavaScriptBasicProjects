document.write("<h1>這是陣列的使用方式練習 可以去看array.js</h1>");
var br = "<br/>";
// 陣列 array
// 陣列可以存放很多的值 當我們資料量變大變複雜的時候 我們就可以使用陣列讓我們更好更方便的管理資料
// 假設我們今天要存放一個班級學生的成績 先假設只有5個學生
var score1 = 80;
var score2 = 60;
var score3 = 20;
var score4 = 30;
var score5 = 50;

//如果有100位學生 上面那個方法就很不切實際 用陣列比較方便
var scores = [80,60,20,30,50];
document.write(scores);
document.write(br);

//如果要取的其中一位的成績 假設我們想要第一位的成績 就要輸入0 因位js 0是第一個
document.write(scores[0]);
document.write(br);

//如果成績輸錯了 除了直接去改陣列 我們可以用下面的方式改成績
scores[0] = 20;
document.write(scores[0]);
document.write(br);

//陣列還可以存放其他型態的資料
var friends = ["小白","小黑","小黃","小紅","小藍"];
document.write(friends);
document.write(br);

var boolean_value = [true,false,true]
document.write(boolean_value);
document.write(br);

//混不同的資料型態也行
var muti = [true,125,"字串","陣列可以放不同型態的變數"]
document.write(muti);
//如果想知道陣列裡面有幾個值 我們可以用 .length 去找
document.write(br);
document.write(" 這個陣列有幾個值:" + muti.length);
document.write(br);

//二階陣列
var dou = [1,5,6,7,9][3,5,7,61,456];
document.write(dou[3][4]);
//看起來是沒辦法 之後再試試看
