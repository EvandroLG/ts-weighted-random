const weightedRandom = (weighted: Map<any, any>) => {
  const arr = [];

  for (const [key, weight] of weighted) {
    for (let i = 0; i < weight; i++) {
      arr.push(key);
    }
  }

  const idx = Math.floor(Math.random() * arr.length);

  return arr[idx];
};

export default weightedRandom;
