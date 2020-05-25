export default class ErrorRepository {
  static addError(key, value) {
    this.dbErrors.set(key, value);
  }

  static translate(code) {
    if (this.dbErrors.has(code)) {
      return this.dbErrors.get(code);
    }
    return 'Unknown error';
  }
}

ErrorRepository.dbErrors = new Map([
  [1, 'out of order'],
  [2, 'connection error'],
  [3, 'invalid name or password'],
  [404, 'not found'],
]);
