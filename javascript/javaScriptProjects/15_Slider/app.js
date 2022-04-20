// select 3 things 1. slide 2. nextBtn 3. prevBtn
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

//index 代表我們可以增加多少slide 因為我們querySelectorAll就已經選了全部的slide了
slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`
});

prevBtn.style.display = 'none';

let counter = 0;

nextBtn.addEventListener('click',function(){
    counter++;
    carousel();
});

prevBtn.addEventListener('click',function(){
    counter--;
    carousel();
});

function carousel(){
    // working with slides

    // if(counter === slides.length){
    //     counter = 0 ;
    // }
    // if(counter < 0){
    //     counter = slides.length - 1;
    // }
    //上面是set up 1 按到最後一張 再按 next 會到第一張

    //working with buttons
    if(counter < slides.length -1){
        nextBtn.style.display = 'block';
    }else{
        nextBtn.style.display = 'none';
    }
    if (counter > 0){
        prevBtn.style.display = 'block';
    }else{
        prevBtn.style.display = 'none';
    }
    //上面是 setup 2 按到最後一張 next 會不見 但要注意一開始要加 11行隱藏prevBtn

    slides.forEach(function(slide){
       slide.style.transform = `translateX(-${counter*100}% )` 
    })
}

