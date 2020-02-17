import { Hyperlink } from './hyperlink.model';

describe('Hyperlink', () => {
  it('should create an instance', () => {
    expect(new Hyperlink('', '', '', '', '', '')).toBeTruthy();
  });
});
