// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    // {
    //     id:5,
    // },
  ];
/* 下面是我的寫法  */
/* const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job"); 
const info = document.getElementById("info"); 
info.textContent = reviews[1]["text"];

const btns = document.querySelectorAll(".btn");
const randombtn = document.getElementById("random-btn");

let i =1; // review's index;
btns.forEach(function(item){
    item.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;       
        if(styles.contains("prev-btn")){
            i--;
            img.src = reviews[i]["img"];
            author.textContent = reviews[i]["name"];
            job.textContent = reviews[i]["job"];
            info.textContent = reviews[i]["text"];
            if(i<=0){i=reviews.length;};
            console.log(i);
        };
        if(styles.contains("next-btn")){
            i++;
            img.src = reviews[i]["img"];
            author.textContent = reviews[i]["name"];
            job.textContent = reviews[i]["job"];
            info.textContent = reviews[i]["text"];
            if(i>reviews.length - 1){i=-1;}
        };
    })
})

randombtn.addEventListener("click",function(){
    let randomNum = getRamdonNumber();
    console.log(randomNum);
    img.src = reviews[randomNum]["img"];
    author.textContent = reviews[randomNum]["name"];
    job.textContent = reviews[randomNum]["job"];
    info.textContent = reviews[randomNum]["text"];
})
function getRamdonNumber(){
    return Math.floor(Math.random()*reviews.length);
} *///希望可以寫一個不會重複的RamdonNumber

/* select items */
//下面是作者的寫法 最大不一樣就是他這次不一次選按鈕 而是先做一個person的物件 在對person物件進行操作
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0; //這就是我的i

//load initial item
window.addEventListener("DOMContentLoaded",function(){
    const item =reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
})

// show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
//show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
//show random number
randomBtn.addEventListener("click", function () {
    console.log("hello");
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
//之後再找時間寫一次他的寫法 他是用做一個物件 這樣就可以少一點東西 不過好像可以結合我們兩個的方法
