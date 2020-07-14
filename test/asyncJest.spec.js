const answerPhone = require('../src/asyncJest');

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende com async', async () => {
    expect(await answerPhone(true)).toBe('Oi!');
    // Insira seu teste assíncrono aqui
  });
  test('atende com promise', () => answerPhone(true).then(resposta => expect(resposta).toBe('Oi!')));
  test('teste com resolves', () => expect(answerPhone(true)).resolves.toEqual('Oi!'));
  test('ocupado com rejects', () => expect(answerPhone(false)).rejects.toEqual('Infelizmente não podemos atender...'));
  test('ocupado com async', async () => {
    try {
      (await answerPhone(false));
    } catch (erro) {
      expect(erro).toBe('Infelizmente não podemos atender...');
    }
  });
  test('ocupado com catch', () => answerPhone(false).catch(resposta => expect(resposta).toBe('Infelizmente não podemos atender...')));
});
