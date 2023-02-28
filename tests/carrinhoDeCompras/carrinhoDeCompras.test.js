import { expect } from "@jest/globals";
import Carrinho from "../../carrinhoDeCompras/index.js";

describe("Testes de Carrinho de Compras", () => {
    let produto1 = {nome: "mouse", preco: 100, quantidade: 2};
    let produto2 = {nome: "monitor", preco: 1000, quantidade: 1};

    test("Verifica se os produtos foram adicionados corretamente", () => {
        let carrinho = new Carrinho();

        carrinho.adicionar(produto1);
        carrinho.adicionar(produto2);

        expect(carrinho.produtos).toContain(produto1);
        expect(carrinho.produtos).toContain(produto1);
    });

    test("Deve retornar o valor total dos carrinhos.", () => {
        let carrinho = new Carrinho();

        carrinho.adicionar(produto1);
        carrinho.adicionar(produto2);
        
        let obtido = carrinho.valorTotalCarrinho();

        let valorEsperado = 1200;

        expect(obtido).toBe(valorEsperado);
    });

    test("Deve retornar a quantidade de produtos.", () => {
        let carrinho = new Carrinho();

        carrinho.adicionar(produto1);
        carrinho.adicionar(produto2);
        
        let obtido = carrinho.quantidaDeProdutos();

        let valorEsperado = 3;

        expect(obtido).toBe(valorEsperado);
    });
});