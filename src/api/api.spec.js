const app = require('./api');
const supertest = require('supertest');

describe('API', () => {
  let request;
  beforeEach(() => {
    request = supertest(app);
  });

  test('should get todos', done => {
    request.get('/api/todos').expect(200, (err, res) => {
      expect(res.body.data.length).toBeTruthy();
      done();
    });
  });
});
