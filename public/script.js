document.getElementById('productForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const valor = document.getElementById('valor').value;

    try {
        const response = await fetch('http://localhost:3000/', {
            method: 'POST',
            //headers: { 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'true'},
            body: { nome, descricao, valor }
        });
            

        if (response.ok) {
            alert('Produto adicionado com sucesso!');
            document.getElementById('productForm').reset();
        } else {
            alert('Erro ao adicionar produto');
        }
    } catch (error) {
        console.log(error)
    }
});
