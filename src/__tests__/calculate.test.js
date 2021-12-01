import calculate from "../logic/calculate";

describe('testing the calculate function ', () => {
  const obj = { total: null,next: null,operation: null };
  test('sum test', () => {
    let result = calculate(obj,'11');
    result = calculate(obj,'+');
    result = calculate(obj,'15');
    result = calculate(obj,'=');
    expect(result.total).toBe('26');
  });
  test('subtraction test', () => {
    let result = calculate(obj,'12');
    result = calculate(obj,'-');
    result = calculate(obj,'5');
    result = calculate(obj,'=');
    expect(result.total).toBe('7');
  });
  test('division test', () => {
    let result = calculate(obj,'16');
    result = calculate(obj,'÷');
    result = calculate(obj,'4');
    result = calculate(obj,'=');
    expect(result.total).toBe('4');
  });
  test('modulus test', () => {
    let result = calculate(obj,'34');
    result = calculate(obj,'%');
    result = calculate(obj,'5');
    result = calculate(obj,'=');
    expect(result.total).toBe('4')
  });
  test('multiply test', () => {
    let result = calculate(obj, '7');
    result = calculate(obj,'÷');
    result = calculate(obj,'5');
    result = calculate(obj,'=');
    expect(result.total).toBe('35')
  });
})