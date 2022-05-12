let index = 0;
let prev = document.getElementById('prev');
let next = document.getElementById('next');

next.addEventListener('click',function(){
    showSlide(1);
});

prev.addEventListener('click',function(){
    showSlide(-1);
});

showSlide = (i) =>{
    index += i;
    let image = document.getElementsByClassName("image");
    let tochki = document.getElementsByClassName("tochka");

    //скрываем все фотки
    for(let i=0; i< image.length; i++){
        image[i].style.display = 'none';
     }
    for (let i=0; i< tochki.length; i++){
        tochki[i].className = tochki[i].className.replace("active", "");
    }
    if(index > image.length - 1){
        index = 0;
    }
    if(index < 0){
        index = image.length - 1;
    }
    image[index].style.display = 'block';
    tochki[index].className += ' active';


}

window.addEventListener('onload', showSlide(index));