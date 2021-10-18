import { range } from '../src';

describe('Test range.', () => {
  test('Test range(1, 10).', async () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('[os:linux,mac,win] Test 1.', async () => {
    expect(1).toEqual(1);
  });

  test('[os:mac] Test 2.', async () => {
    expect(1).toEqual(1);
  });

  test('[os:win] Test 3.', async () => {
    expect(1).toEqual(1);
  });

  test('[os:linux,mac] Test 4.', async () => {
    expect(1).toEqual(1);
  });
});
