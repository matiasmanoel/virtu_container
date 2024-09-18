document.getElementById('productForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const valor = document.getElementById('valor').value;

    const response = await fetch('/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, descricao, valor })
    });

    if (response.ok) {
        alert('Produto adicionado com sucesso!');
        document.getElementById('productForm').reset();
    } else {
        alert('Erro ao adicionar produto');
    }
});
