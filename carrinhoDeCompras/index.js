class Carrinho{
    constructor(){
        this.produtos = [];
    }

    adicionar(produto){
        this.produtos.push(produto);
    }

    valorTotalCarrinho(){
        let total = 0;

        this.produtos.forEach(p => {
            total += p.preco * p.quantidade;
        });

        return total;
    }

    quantidaDeProdutos(){
        let total = 0;

        this.produtos.forEach(p => {
            total += p.quantidade;
        });

        return total;
    }
}

export default Carrinho;