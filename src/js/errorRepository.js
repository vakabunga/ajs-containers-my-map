export default class ErrorRepository {
  constructor() {
    this.dbErrors = new Map();
  }

  addError(key, value) {
    this.dbErrors.set(key, value);
  }

  translate(code) {
    if (this.dbErrors.has(code)) {
      return this.dbErrors.get(code);
    }
    return 'Unknown error';
  }
}
