import { division } from "../src/division";
import { multiplication } from "../src/multiplication";

test('deve multiplicar dois numeros', () => {
    expect(multiplication(2, 3)).toBe(6);
})