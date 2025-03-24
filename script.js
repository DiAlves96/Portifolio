function scrollProjects(direction) {
    const carousel = document.getElementById("projetosCarousel");
    const scrollAmount = 800;
    carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();

}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}



const elementos = document.querySelectorAll('.elemento');


const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ativo');  
            observer.unobserve(entry.target); 
        }
    });
};


const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5
});


elementos.forEach(elemento => {
    observer.observe(elemento);
});

