const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
// describe ("string", uma função geralmente uma arrow function)
describe("o retorno do telefonema", () => {
  test("atende com async e await", async () => {
    // expect (função ou condição ou variavel que quer checar o valor).toBe(valor esperado) ;-)
    expect(await answerPhone(true)).toBe('Oi!');
  });
  test("atende com promisse", () => {
    return answerPhone(true).then(resposta => expect(resposta).toBe('Oi!'));
  });
  test("teste com resolves", () => {
    return expect(answerPhone(true)).resolves.toEqual('Oi!')
  });
  test("ocupado com rejects", () => {
    return expect(answerPhone(false)).rejects.toEqual('Infelizmente não podemos atender...')
  });
  test("ocupado com async e await", async () => {
    
    try {
      await answerPhone(false)
    } catch (e) {
      expect(e).toBe('Infelizmente não podemos atender...')
      
    }
  });
  test("atende com promisse", () => {
    return answerPhone(false).catch(resposta => expect(resposta).toBe('Infelizmente não podemos atender...'));
  });
});
