document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("whatsappForm").addEventListener("submit", enviarWhats);
});

function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = "5511960178090";

    if (!nome || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const msgformatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgformatada}`;

    window.open(url, "_blank");
}
