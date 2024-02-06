if(!localStorage.getItem('likes1'))
    localStorage.setItem("likes1", 0);
if(!localStorage.getItem('likes2'))
    localStorage.setItem("likes2", 0);

const count1 = document.getElementById('lcount1');
count1.textContent = localStorage.getItem('likes1');
const count2 = document.getElementById('lcount2');
count2.textContent = localStorage.getItem('likes2');

var heart = [];
heart[1] = document.getElementById('heart1');
heart[2] = document.getElementById('heart2');

heart[1].onclick = function(){

    if(heart[1].className == "fa-regular fa-heart"){
        heart[1].setAttribute('class', "fa-solid fa-heart");
        if(localStorage.getItem("likes1"))
            localStorage.setItem("likes1", Number(localStorage.getItem("likes1")) + 1);
        else
            localStorage.setItem("likes1", 0);
    }
    else{
        heart[1].setAttribute('class', "fa-regular fa-heart");
        localStorage.setItem("likes1", Number(localStorage.getItem("likes1")) - 1);
    }

    count1.textContent = localStorage.getItem('likes1');
}

heart[2].onclick = function(){

    if(heart[2].className == "fa-regular fa-heart"){
        heart[2].setAttribute('class', "fa-solid fa-heart");
        if(localStorage.getItem("likes2"))
            localStorage.setItem("likes2", Number(localStorage.getItem("likes2")) + 1);
        else
            localStorage.setItem("likes2", 0);
    }
    else{
        heart[2].setAttribute('class', "fa-regular fa-heart");
        localStorage.setItem("likes2", Number(localStorage.getItem("likes2")) - 1);
    }

    count2.textContent = localStorage.getItem('likes2');
}