document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const mensagem = document.querySelector('textarea').value;

    if (nome && email && mensagem) {
      alert(`Obrigado pela mensagem, ${nome}! Vou responder o mais rápido possível.`);
      this.reset();
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  });