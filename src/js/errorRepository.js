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
ErrorRepository.dbErrors = new Map();
