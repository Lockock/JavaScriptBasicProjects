const modalBtn = document.querySelector(".modal-btn");
const modalOverLay = document.querySelector(".modal-overlay");
const colseBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click",function(){
    modalOverLay.classList.add("open-modal");
})
colseBtn.addEventListener("click",function(){
    modalOverLay.classList.remove("open-modal");
})
