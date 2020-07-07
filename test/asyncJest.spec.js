const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  let ligando = jest.spyOn( { answerPhone }, 'answerPhone');
  const retornos = {
    atende: 'Hello, its me!',
    ocupado: 'Tuuu, tuuuu, tuuu!',
  }
  afterEach(() => {
    ligando.mockRestore();
    ligando = jest.spyOn({ answerPhone }, 'answerPhone');
  });

  test("atende", async () => {
    ligando.mockResolvedValue(retornos.atende);
    ligando();
    expect(ligando).toHaveBeenCalled();
    expect(ligando).toHaveBeenCalledTimes(1);
    expect(ligando()).resolves.toBe(retornos.atende);
    expect(ligando).toHaveBeenCalledTimes(2);
  });

  test("ocupado", () => {
    assert.fail();
    // Insira seu teste assíncrono aqui
  });
});
