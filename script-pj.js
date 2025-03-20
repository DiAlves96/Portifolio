let btnNext = document.querySelector('.next')

let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.list')
let thumb = document.querySelector('.thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type){
    let listeItems = document.querySelectorAll('.list-item')
    let thumbItems = document.querySelectorAll('.thumb-item')

    if(type === 'next'){
        list.appendChild(listeItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')

    } else {
        list.prepend(listeItems[listeItems.length -1])
        thumb.prepend(thumbItems[thumbItems.length -1])
        container.classList.add('back')

    }

    setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('back');
    }, 3000);
    

}


document.addEventListener("DOMContentLoaded", () => {
    
    const buttons = document.querySelectorAll(".buttons button");

    const links = [
        "https://dialves96.github.io/Login/",
        "https://dialves96.github.io/previsaodotempo_react_deploy/",        
        "https://dialves96.github.io/Projeto-Social01/",
        "https://dialves96.github.io/Calculadora-IMC/"
    ];

    
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            window.location.href = links[index]; 
        });
    });
});
