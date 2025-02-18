let totalGeral = 0; // variável global
limpar();

function adicionar(){
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;
    let nomeProduto = produto.split('-')[0]; 
    let valorUnitario = produto.split("R$")[1];
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    // Para incrementar a lista
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span></section>`;
    //atualizar o valor geral
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${totalGeral}`
    document.getElementById("quantidade").value = 0;

    if (quantidade <=0){
        alert("Selecione a quantidade de itens!");
        limpar();
        return;
    } 
}

function limpar(){
    totalGeral = 0; // variável global
    document.getElementById('lista-produtos').innerHTML = "";
    document.getElementById("valor-total").textContent = 'R$ 0';
}