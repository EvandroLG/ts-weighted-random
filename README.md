# ts-weighted-random

Picks a random value from a list based on the weights.

## Installation

```shell
  npm install ts-weighted-random
```

## Usage

```js
import weightedRandom from "ts-weighted-random";

const map = new Map([
  [1, 1],
  [2, 1],
  [3, 5], // This item has 5 times more chances of being picked
]);

weightedRandom(map);
```

## License

[MIT](./LICENSE)
