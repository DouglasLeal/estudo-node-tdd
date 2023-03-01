import { expect, jest } from "@jest/globals";
import Contato from "../../agenda/Contato.js";
import ContatoRepository from "../../agenda/ContatoRepository.js";

describe("Testes da Agenda", () => {
    let objContato1 = {nome: "Pedro", telefone: "(21)1234-5678", email: "pedro@email.com"}
    let objContato2 = {nome: "Douglas", telefone: "(21)1234-5678", email: "douglas@email.com"}
    let objContato3 = {nome: "Ana", telefone: "(21)1234-5678", email: "ana@email.com"}

    test("Deve salvar contato no DB", () => {
        ContatoRepository.criar = jest.fn().mockReturnValue({
            id: 999,
            nome: "Pedro",
            telefone: "(21)1234-5678",
            email: "pedro@email.com"
        });

        const retorno = ContatoRepository.criar();

        expect(retorno).toEqual(expect.objectContaining({
            id: expect.any(Number),
            ...objContato1
        }));
    });

    test("Deve retornar lista de Contatos", () => {
        ContatoRepository.listar = jest.fn().mockReturnValue([
            {id: 1001, ...objContato1},
            {id: 1002, ...objContato2},
            {id: 1003, ...objContato3}
        ]);

        const retorno = ContatoRepository.listar();

        expect(retorno.length).toBe(3);

        expect(retorno[1]).toEqual(expect.objectContaining({
            id: 1002,
            nome: "Douglas",
            telefone: "(21)1234-5678",
            email: "douglas@email.com"
        }));
    });
});