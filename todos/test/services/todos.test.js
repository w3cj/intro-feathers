const app = require('../../src/app');

describe('\'todos\' service', () => {
  it('registered the service', () => {
    const service = app.service('todos');
    expect(service).toBeTruthy();
  });
});
