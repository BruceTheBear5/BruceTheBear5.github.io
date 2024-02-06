const icon = document.getElementById("icon");
const logo = document.getElementById("logo");
logo.style.filter = 'invert(100%) sepia(96%) saturate(0%) hue-rotate(32deg) brightness(103%) contrast(101%)';

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.setAttribute('class', "fa-solid fa-moon");
        logo.style.filter = 'invert(0%) sepia(2%) saturate(18%) hue-rotate(273deg) brightness(96%) contrast(100%)';
    }
    else{
        icon.setAttribute('class',"fa-solid fa-sun");
        logo.style.filter = 'invert(100%) sepia(96%) saturate(0%) hue-rotate(32deg) brightness(103%) contrast(101%)';
    }
}
