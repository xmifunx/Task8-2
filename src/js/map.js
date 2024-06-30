export default class ErrorRepository {
  constructor(...errors) {
    this.errorsCollection = new Map();
    errors.forEach((error) => this.errorsCollection.set(error.statusCode, error.desc));
  }

  translate(statusCode) {
    if (this.errorsCollection.has(statusCode) === false) {
      return 'Unknown error';
    }
    return this.errorsCollection.get(statusCode);
  }
}
