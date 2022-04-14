//classList - shows/gets all classes
//contains - check classList for specific class
//add - add class
//remove - remove class
//toggle - toggle class 

const sidebarToggle =document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const colsebtn = document.querySelector(".close-btn");

sidebarToggle.addEventListener("click",function(){
    sidebar.classList.add("show-sidebar")
})

colsebtn.addEventListener("click",function(){
    sidebar.classList.remove("show-sidebar");
})

