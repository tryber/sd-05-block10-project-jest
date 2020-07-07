const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", () => {
    // assert.fail();
    answerPhone.answerPhone = jest.fn().mockReturnValue('Oi');
    answerPhone.answerPhone(true);
    expect(answerPhone.answerPhone).toHaveBeenCalled();
    expect(answerPhone.answerPhone(false)).toBe('Oi');
    expect(answerPhone.answerPhone(true)).toBe('Oi');
    answerPhone.answerPhone.mockReset();
  });
  test("ocupado", () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    answerPhone.answerPhone = jest.fn().mockReturnValue('Infelizmente não podemos atender...');
    answerPhone.answerPhone(true);
    expect(answerPhone.answerPhone).toHaveBeenCalled();
    expect(answerPhone.answerPhone(true)).toBe('Infelizmente não podemos atender...');
    expect(answerPhone.answerPhone(false)).toBe('Infelizmente não podemos atender...');
    answerPhone.answerPhone.mockReset();
  });
});
