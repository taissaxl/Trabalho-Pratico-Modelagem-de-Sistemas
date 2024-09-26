document.addEventListener('DOMContentLoaded', function() {
    const tabelaProdutos = document.getElementById('tabela-produtos');
    const adicionarProduto = document.getElementById('adicionar-produto');
    const removerProduto = document.getElementById('remover-produto');
  
    let produtos = [
      { imagem: 'produto1.jpg', nome: 'Produto 1', preco: 19.90, quantidade: 10, vezesComprado: 5, dataUpload: '2022-01-01' },
      { imagem: 'produto2.jpg', nome: 'Produto 2', preco: 29.90, quantidade: 20, vezesComprado: 10, dataUpload: '2022-01-05' },
      { imagem: 'produto3.jpg', nome: 'Produto 3', preco: 39.90, quantidade: 30, vezesComprado: 15, dataUpload: '2022-01-10' }
    ];
  
    // função para adicionar produto à tabela
    function adicionarProdutoTabela(produto) {
      const linha = document.createElement('tr');
      linha.innerHTML = `
        <td><img src="${produto.imagem}" width="50" alt="${produto.nome}"></td>
        <td>${produto.nome}</td>
        <td>R$ ${produto.preco}</td>
        <td>${produto.quantidade}</td>
        <td>${produto.vezesComprado}</td>
        <td>${produto.dataUpload}</td>
        <td><input type="checkbox" class="selecionar-produto"></td>
      `;
      tabelaProdutos.appendChild(linha);
    }
  
    // função para remover produto da tabela
    function removerProdutoTabela(linhas) {
      linhas.forEach(linha => linha.remove());
    }
  
    // adicionar produtos iniciais à tabela
    produtos.forEach(produto => adicionarProdutoTabela(produto));
  
    // adicionar evento de clique ao botão de adicionar produto
    adicionarProduto.addEventListener('click', () => {
      const produto = {
        imagem: 'produto4.jpg',
        nome: 'Produto 4',
        preco: 49.90,
        quantidade: 40,
        vezesComprado: 20,
        dataUpload: '2022-01-15'
      };
      adicionarProdutoTabela(produto);
    });
  
    removerProduto.addEventListener('click', () => {
      const checkboxes = tabelaProdutos.querySelectorAll('.selecionar-produto:checked');
      const linhasSelecionadas = Array.from(checkboxes).map(checkbox => checkbox.closest('tr'));
      linhasSelecionadas.forEach(linha => linha.remove());
    });
});