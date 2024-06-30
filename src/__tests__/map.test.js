import ErrorRepository from '../js/map';

const errors = new ErrorRepository(
  { statusCode: 400, desc: 'Bad Request' },
  { statusCode: 401, desc: 'Unauthorized' },
  { statusCode: 403, desc: 'Forbidden' },
  { statusCode: 404, desc: 'Not Found' },
);

test('проверяем перевод по статус коду ошибки', () => {
  const descOfError = errors.translate(404);
  expect(descOfError).toBe('Not Found');
});

test('проверяем вывод ошибки в случае если код не найден в коллекции', () => {
  const descOfError = errors.translate(999);
  expect(descOfError).toBe('Unknown error');
});
