// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const data = document.getElementById('date');
data.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    //linksContainer.classList.toggle("show-links");
    //上面這個方法沒有錯 但如果我們想要增加或刪除links 可能會顯示不出來 或是 有空白 因為height是固定的 所以我們應該要動態改變nav的height
    //要動態nav的話 要用 Element.getBoundingClientRect() 的方法 在第一行
    const containerHeight = linksContainer.getBoundingClientRect().height;
    //containerHeight的default是0 所以不會有高度 不過應該就是 讓他等於linksHeight這樣就可以顯示了
    const linksHeight = links.getBoundingClientRect().height;
    //linksHeight 會隨著我們增加或減少links改變
    //console.log(linksHeight);
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
})

// ********** fixed navbar ************
//當滾動的高度大於navbar的高度 我們就fixed navber在上面
const navbar =document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll',function(){
    //console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight>navHeight){
        navbar.classList.add("fixed-nav");    
    }else{
        navbar.classList.remove("fixed-nav");        
    }

    if(scrollHeight>500){
        topLink.classList.add("show-top-link");
    }else{
        topLink.classList.remove("show-top-link");
    }
})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        //prevent default
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        //console.log(id);
        const element = document.getElementById(id);
        //calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");

        let position = element.offsetTop - navHeight;
        // console.log(position);
        // console.log(navHeight);
        if(!fixedNav){
            position = position - navHeight;
        }

        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.height = 0;
    })
})


