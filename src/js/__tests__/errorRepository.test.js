import ErrorRepository from '../errorRepository';

describe('ErrorRepository:', () => {
  test('should add new error to ErrorRepository.dbErrors', () => {
    const errorList = new ErrorRepository();
    errorList.addError(900, 'test faild');
    const result = new Map();
    result.set(900, 'test faild');
    expect(result).toEqual(errorList.dbErrors);
  });
  test('should show value of error', () => {
    const errorList = new ErrorRepository();
    errorList.addError(900, 'test faild');
    const result = new Map();
    result.set(900, 'test faild');
    expect(result.get(900)).toEqual(errorList.translate(900));
  });
  test('should show message, if error is not in Map', () => {
    const errorList = new ErrorRepository();
    errorList.addError(900, 'test faild');
    expect(errorList.translate(1)).toBe('Unknown error');
  });
});
