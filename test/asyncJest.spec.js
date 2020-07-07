const answerPhone = require("../src/asyncJest");
describe("o retorno do telefonema", () => {
  test("atende", async () => {
    const ok = await answerPhone(true);
    expect(ok).toBe('Oi!');
  });
  test("ocupado", async () => {
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error).toBe('Infelizmente não podemos atender...');
    }
  });
});
