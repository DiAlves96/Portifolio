async function enviarFormulario(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Coleta os dados do formulário
    const dadosFormulario = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        assunto: document.getElementById('assunto').value,
        mensagem: document.getElementById('mensagem').value,
    };

    // Envia os dados via requisição POST para o backend
    try {
        const resposta = await fetch('http://localhost:5000/enviar-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosFormulario),
        });

        const resultado = await resposta.json();

        if (resultado.success) {
            alert('E-mail enviado com sucesso!');
        } else {
            alert('Erro ao enviar o e-mail.');
        }
    } catch (erro) {
        console.error(erro);
        alert('Erro de conexão com o servidor.');
    }
}

function scrollProjects(direction) {
    const carousel = document.getElementById("projetosCarousel");
    const scrollAmount = 320;
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

