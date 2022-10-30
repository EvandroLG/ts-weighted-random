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
  const map = new Map([[1, 1]]);

  const result = weightedRandom(map);
  expect(result).toBe(1);
});

test("returns undefined when map is empty", () => {
  const map = new Map([]);

  const result = weightedRandom(map);
  expect(result).toBeUndefined();
});
