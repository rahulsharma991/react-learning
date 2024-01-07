import {sum} from '../sum';
test('sum of numbers', () => {
    const result = sum(4,4);
    //Asserstion
    expect(result).toBe(8);
})