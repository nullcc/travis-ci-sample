import { range } from '../src';

describe('Test range.', () => {
  test('Test range(1, 10).', async () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
