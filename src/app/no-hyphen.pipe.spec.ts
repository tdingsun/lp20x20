import { NoHyphenPipe } from './no-hyphen.pipe';

describe('NoHyphenPipe', () => {
  it('create an instance', () => {
    const pipe = new NoHyphenPipe();
    expect(pipe).toBeTruthy();
  });
});
