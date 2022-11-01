/*
 * Picks a random value from a range based on the weights
 * @param {Map<any, any>} items
 * @returns {any}
 */
const weightedRandom = (items: Map<any, any>) => {
  const arr = [];

  for (const [key, weight] of items) {
    for (let i = 0; i < weight; i++) {
      arr.push(key);
    }
  }

  const idx = Math.floor(Math.random() * arr.length);

  return arr[idx];
};

export default weightedRandom;
