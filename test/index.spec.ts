import { hello } from '../src/index';

describe('index', () => {
  it('should greet', () => {
    const out = hello();

    expect(out).toEqual('hello');
  });
});