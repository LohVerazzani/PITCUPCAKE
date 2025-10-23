document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    const dados = { nome, email, senha };

    try {
      const response = await fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar os dados. Verifique o servidor.');
    }
  });
});