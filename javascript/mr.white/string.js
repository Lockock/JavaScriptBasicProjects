// 如何使用字串、字串用法
document.write("<h1>這是字串使用方法的練習 可以去看 string.js</h1>");
var br = "<br/>";

// 我們定義一個變數叫phrase 裡面裝的是 "Hello world!" 然後我們再把變數印出來
var phrase = "Hello world!";
document.write(phrase);
document.write(br);

//如果想要在 字串上面加上雙引號 要用 \"" 這樣 像我把world加雙引號
var phrase = "Hello \"world!\" ";
document.write(phrase);
document.write(br);

// 如果我們想加字 除了直接打字以外 還可以用 + 號代表字串的連接
var phrase = "Hello world!" + "world!";
document.write(phrase);
document.write(br);

//如果我們想加字 除了直接打字以外 還可以用 + 號代表字串的連接
var phrase = "Hello world!";
var text = " text ";
document.write(phrase + text + 123);
document.write(br);

//還有字串內建的用法 如果我們想知道字串的長度
var phrase = "Hello world!";
document.write(phrase + "字串長度:" + phrase.length);
document.write(br);

//把字串全部變成大寫然後再回傳給我們  phrase.toUpperCase() phrase.toLowerCase()就是變小寫
var phrase = "Hello world!";
document.write(phrase + "字串變大寫" +phrase.toUpperCase());
document.write(phrase + "字串變小寫" +phrase.toLowerCase());
document.write(br);

//如果想要知道第6個是甚麼字 可以用 charAt() 裡面要說要第幾個字
var phrase = "Hello world!";
//要注意的是js所有數字是從0開始算 所以我們如果想要回傳 H 要寫charAt(0) w 要寫 charAt(6)
document.write(phrase + "字串的第7個字:" +phrase.charAt(6));
document.write(br);

// 如果是要找某個字在字串中的位置 可以用 indexOf("") 裡面輸入你要找的字 就可以知道他在第幾位
var phrase = "Hello world!";
document.write(phrase + "l在第幾個位置:" + phrase.indexOf("l"));
//像我們上面想知道l在第幾個位置 所以我們輸入l 會發現雖然有3個l 但是會回傳最開始找到的那個 所以是回傳2 
document.write(br);

// 如果是想知道一大段字串中的某段文字是什麼 可以用phrase.substring(0,5) 要給2個數字是字串的位數
var phrase = "Hello world!";
document.write(phrase + "第1到第5是甚麼字:" + phrase.substring(0,5));
//上面我們想知道第1到第5是甚麼字 因為substring(0,4)是不包含第4位 所以只會回傳Hell 所以我們要輸入substring(0,5) 才會回傳1到5位 
document.write(br);

// 以上是字串常見的用法 如果想知道更多可以去w3c javescript 找 string method
