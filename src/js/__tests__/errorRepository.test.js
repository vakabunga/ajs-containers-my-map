import ErrorRepository from '../errorRepository';

describe('ErrorRepository:', () => {
  test('should add new error to ErrorRepository.dbErrors', () => {
    ErrorRepository.addError(900, 'test faild');
    const result = new Map();
    result.set(900, 'test faild');
    expect(result).toEqual(ErrorRepository.dbErrors);
  });
  test('should show value of error', () => {
    ErrorRepository.addError(900, 'test faild');
    const result = new Map();
    result.set(900, 'test faild');
    expect(result.get(900)).toEqual(ErrorRepository.translate(900));
  });
  test('should show message, if error is not in Map', () => {
    ErrorRepository.addError(900, 'test faild');
    expect(ErrorRepository.translate(1)).toBe('Unknown error');
  });
});
