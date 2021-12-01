import calculate from "../logic/calculate";

describe('testing the calculate function ', () => {
  let obj = { total: null,next: null,operation: null };
  test('test Edit Number', () => {
    obj = calculate(obj,'11');
    expect(obj.next).toBe('11');
  });/*{null, next : 11 , null}*/
  test('subtraction test', () => {
    obj = calculate(obj,'-');
    expect(obj.operation).toBe('-');
  });/*{11, next: null, op: '-'}*/
  test('division test', () => {
    obj = calculate(obj,'6');
    obj = calculate(obj, '/')
    expect(obj.total).toBe('5');
  });/*{5,null,/} */
  test('modulus test', () => {

    obj = calculate(obj,'%');/* 5 null % */ 
    obj = calculate(obj,'2');
    obj = calculate(obj,'=');
    expect(obj.total).toBe('1');
  });
  test('AC button test', () => {
    obj = calculate(obj, 'AC');
    const nullObj = {
      total: null,
      next: null,
      operation: null,
    }
    /*result = calculate(obj,'÷');
    result = calculate(obj,'5');
    result = calculate(obj,'=');*/
    expect(obj).toEqual(nullObj);
  });
})