import operate from '../../logic/operate';

describe('operating tests', () => {
  const valueOne = '6';
  const valueTwo = '3';

  test('sum test', () => {
    const result = operate(valueOne,valueTwo, '+');
    expect(result).toBe('9');
  });
  test('subtraction test', () => {
    const result = operate(valueOne,valueTwo, '-');
    expect(result).toBe(3);
  });
  test('multiply test', () => {
    const result = operate(valueOne,valueTwo, 'x');
    expect(result).toBe('18');
  });
  test('division test', () => {
    const result = operate(valueOne,valueTwo, '÷');
    expect(result).toBe('2');
  });
  test('modulus test', () => {
    const result = operate(valueOne,valueTwo, '%');
    expect(result).toBe('0');
  })
})