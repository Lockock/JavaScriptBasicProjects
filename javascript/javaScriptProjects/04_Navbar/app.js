//classList - shows/gets all classes
//contains - check classList for specific class
//add - add class
//remove - remove class
//toggle - toggle class 

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click",function(){
    //console.log(links.classList);
    /* console.log(links.classList.contains("random"));
       console.log(links.classList.contains("links")); 
       我們可以用contains作為if的條件
       */
    /* if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }else{
        links.classList.add("show-links");
    } */
    links.classList.toggle("show-links");
    /* 其實就是上面if的那個方法 */
});

