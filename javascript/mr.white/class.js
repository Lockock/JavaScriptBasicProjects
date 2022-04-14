document.write("<h1>這是class的練習 可以去看class.js</h1>")
function br(){
    document.write("<br/>");
}
//class class可以讓我們更快速更方便的去創造一個物件 
// 假設今天有3台手機 那我們用物件去製作他 就要製作3次
var phone1 = {
    number:"123",
    year:2020,
    is_waterproof:false,
    phone_age:function(){
        return 2021 - this.year;
    }
}

var phone1 = {
    number:"456",
    year:2016,
    is_waterproof:false,
    phone_age:function(){
        return 2021 - this.year;
    }
}

var phone3 = {
    number:"789",
    year:2018,
    is_waterproof:true,
    phone_age:function(){
        return 2021 - this.year;
    }
}

// 那很明顯如果今天有100支手機 我們不可以打100次物件 所以我們這時候就可以用class 他是一個模板的意思 所以我們可以做出一個手機的模板 然後填入資訊就好
// 底下就是手機的模板
class Phone {
    constructor( number, year , is_waterproof ){
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }
    phone_age(){
        return 2021 - this.year;
    }
}
// 模板寫法是 class後面 + 模板的名稱 通常第一個字會是大寫 在大括號裡面會寫一個初始函式constructor
// constructor是把我們傳入的值賦予給實體物件
// 如果我們要用模板做一台手機 就打var phone1 = new Phone(); 並在Phone()給 number, year , is_waterproof 的資料 
var phone1 = new Phone("123", 2020 ,false );
var phone2 = new Phone("456", 2016 ,false );
document.write(phone1.phone_age());
document.write(phone2.phone_age());
//雖然還是要寫100遍 但比上面那個好很多了
