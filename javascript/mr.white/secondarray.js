document.write("<h1>這是二維陣列跟巢狀迴圈的練習 可以去看secondarray.js</h1>");
// 2維陣列、巢狀迴圈
function br(){
    document.write("<br/>");
}

var number = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
]; // js的二維陣列是在陣列中再加陣列 上面那個我們可以說是 4行3列的陣列

//取值的方法
document.write(number[1][2]) //取得這個陣列第一行第一列的值 如果想取得第2行第3列就是 number[1][2] 
br();
//巢狀迴圈 就是在迴圈中再寫迴圈
for(var i=0; i<4; i++){
    for(var j=0; j<3; j++){
        document.write("i:"+ i + ",j:" + j);
        br();
    }
}

//如果我們今天想用巢狀迴圈 去取的二維陣列裡面所有的值 怎麼做?
var number = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];

for(var i=0 ; i < number.length ; i++){
    for(var j=0 ; j < number[i].length ; j++){ //number[0].length 代表 代表第0行的長度 第零行是[1,2,3] 所以長度是3
        document.write(number[i][j]);
    }
    br();
}

