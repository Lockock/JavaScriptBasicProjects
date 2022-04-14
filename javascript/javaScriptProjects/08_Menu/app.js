//items
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
//上面這邊以後應該是直接從資料庫抓

const sectionCenter = document.querySelector(".section-center");
const Btncontainer = document.querySelector(".btn-container");



window.addEventListener("DOMContentLoaded",function(){
  displayMenuItems(menu);//原本是直接寫在這裡 現在我們在這裡callback
  displayMenuButtons();
});


function displayMenuItems(menuItems){
    // console.log("shake and bake");
    let displayMenu = menuItems.map(function(item){
      //console.log(item.id);
      //return `<h1>${item.title}</h1>`;
      return `<article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title}>
                <div class="item-info">
                  <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                  </header>
                  <p class="item-text">${item.desc}</p>
               </div>
              </article>`;
      //以上原本都是直接寫在window裡面 我們做成function 在window裡面callback就好
  })
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

//filter items
/* filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    // console.log(e.currentTarget.dataset.id);
    //dataset 可以取得index設定 data- 然後我們在利用這個做事 像我們在index設定 data-id = "all" console.log(e.currentTarget.dataset);就會顯示 id: 'all'
    const category = e.currentTarget.dataset.id;
    //先取得data-id的資料
    const menuCategory = menu.filter(function(menuItem){
      //console.log(menuItem.category);
      if(menuItem.category === category){
        return menuItem;
      }
      //透過filter過濾如果 menuItem.category === category 我們就會回傳那個物件
    })
    if(category === "all"){
      displayMenuItems(menu);
      //如果 category === "all" 直接callback 顯示所有物件的 function 
    }else{
      displayMenuItems(menuCategory);
      //如果 不是的話就 把輸入變數改成menuCategory 裡面放的是剛剛過濾後存的物件
    }
    //console.log(menuCategory);
    
  })
}) */
//上面這個方法有一個問題 如果有一個新物件有新的category 或是 有物件被改了category的value 那我們就沒辦法顯示了
//所以我們要能確定資料是動態的 作法在下面
//get only unique categories - HARDEST ONE
//iterates over categories return buttons
//make sure to select buttons when they are available

function displayMenuButtons(){
  
  //get only unique categories - HARDEST ONE
  const categories = menu.reduce(function(values,item){
    if(!values.includes(item.category)){
      //values現在是['all'] 如果 item.category 不在values裡面 我們就push進去
      values.push(item.category);
    };
    //所以values就變成 ['all', 'breakfast', 'lunch', 'shakes', 'dinner']
    return values;
  },
  ['all'])
  //['all']是我們values的預設值
  //console.log(categories);

  //iterates over categories return buttons
  const categorieBtn = categories.map(function(category){
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join("");
  //console.log(categorieBtn);
  Btncontainer.innerHTML = categorieBtn;//寫進去html後filterBtns 才能抓到資料

  //make sure to select buttons when they are available
  const filterBtns = Btncontainer.querySelectorAll(".filter-btn");
  //現在才能進行filter
  //filter items
  filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    // console.log(e.currentTarget.dataset.id);
    //dataset 可以取得index設定 data- 然後我們在利用這個做事 像我們在index設定 data-id = "all" console.log(e.currentTarget.dataset);就會顯示 id: 'all'
    const category = e.currentTarget.dataset.id;
    //先取得data-id的資料
    const menuCategory = menu.filter(function(menuItem){
      //console.log(menuItem.category);
      if(menuItem.category === category){
        return menuItem;
      }
      //透過filter過濾如果 menuItem.category === category 我們就會回傳那個物件
    })
    if(category === "all"){
      displayMenuItems(menu);
      //如果 category === "all" 直接callback 顯示所有物件的 function 
    }else{
      displayMenuItems(menuCategory);
      //如果 不是的話就 把輸入變數改成menuCategory 裡面放的是剛剛過濾後存的物件
    }
    //console.log(menuCategory);
    
  })
})
}
