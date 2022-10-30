import weightedRandom from ".";

test("picks value at random", () => {
  const map = new Map([
    [1, 1],
    [2, 1],
    [3, 1],
  ]);

  const result = weightedRandom(map);
  expect(map.has(result)).toBeTruthy();
});

test("picks sole item when map is unity length", () => {
  const map = new Map([[10, 1]]);

  const result = weightedRandom(map);
  expect(result).toBe(10);
});

test("returns undefined when map is empty", () => {
  const map = new Map([]);

  const result = weightedRandom(map);
  expect(result).toBeUndefined();
});

test("picks more often the values with higher weight", () => {
  const map = new Map([
    [1, 20],
    [2, 10],
    [3, 1],
  ]);

  const result: { [key: number]: number } = {
    1: 0,
    2: 0,
    3: 0,
  };

  for (let i = 0; i < 30; i++) {
    const idx = weightedRandom(map) as number;
    result[idx]++;
  }

  expect(result[1] > result[2]).toBeTruthy();
  expect(result[2] > result[3]).toBeTruthy();
});
