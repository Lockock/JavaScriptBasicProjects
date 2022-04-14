//這個有兩個方法`分別是
//using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click",function(){
        
        questions.forEach(function(item){
            //item跟qeustion是一樣的只是不想重複變數
            if(item.classList.contains("show-text")){
                //作者條件是用 itme !== question;
                item.classList.remove("show-text");
            };
        })
        question.classList.toggle("show-text");
    });
});


//traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });


