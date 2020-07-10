const mockFunctions = require('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mockFunctions.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica as funções e os mocks', () => {
  // Crie suas mock functions aqui
  test('testa função add', () => {
    const mockAdd = jest.spyOn(mockFunctions,'add').mockImplementation((a, b) => a + b);
    expect(mockAdd(1, 2)).toEqual(3);
    expect(mockAdd(8, 37)).toEqual(45);
    expect(mockAdd(-11, 25)).toEqual(14);
    expect(mockAdd(13, -188)).toEqual(-175);
    expect(mockAdd(7, 26)).toEqual(33);
  });
  test('testa função subtract', () => {
    const mockSubtract = jest.spyOn(mockFunctions,'subtract').mockImplementation((a, b) => a - b);
    expect(mockSubtract(899, 35)).toEqual(864);
    expect(mockSubtract(-17, 333)).toEqual(-350);
    expect(mockSubtract(45, 97)).toEqual(-52);
    expect(mockSubtract(23, -108)).toEqual(131);
    expect(mockSubtract(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    const mockMultiply = jest.spyOn(mockFunctions,'multiply').mockImplementation((a, b) => a * b);
    expect(mockMultiply(1, 2)).toEqual(2);
    expect(mockMultiply(0, 5)).toEqual(0);
    expect(mockMultiply(-4, 9)).toEqual(-36);
    expect(mockMultiply(-12, -7)).toEqual(84);
    expect(mockMultiply(19, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    const mockDivide = jest.spyOn(mockFunctions,'divide').mockImplementation((a, b) => a / b);
    expect(mockDivide(169, 13)).toEqual(13);
    expect(mockDivide(-1900, 5)).toEqual(-380);
    expect(mockDivide(42, 7)).toEqual(6);
    expect(mockDivide(729, 243)).toEqual(3);
    expect(mockDivide(1331, 11)).toEqual(121);
  });
  test('testa função power', () => {
    const mockPower = jest.spyOn(mockFunctions,'power').mockImplementation((a, b) => a ** b);
    expect(mockPower(10, 2)).toEqual(100);
    expect(mockPower(2, 10)).toEqual(1024);
    expect(mockPower(5, 5)).toEqual(3125);
    expect(mockPower(1, 10)).toEqual(1);
    expect(mockPower(0, 0)).toEqual(1);
  });
  test('testa função factorial', () => {
    const mockFactorial = jest.spyOn(mockFunctions,'factorial').mockImplementation((a) => {
      let acc =a;
      while (a>1) {
        acc *= a-1;
        a -= 1;
      }
      return acc;
    });
    expect(mockFactorial(5)).toEqual(120);
    expect(mockFactorial(10)).toEqual(3628800);
    expect(mockFactorial(3)).toEqual(6);
    expect(mockFactorial(8)).toEqual(40320);
    expect(mockFactorial(2)).toEqual(2);
  });
});
