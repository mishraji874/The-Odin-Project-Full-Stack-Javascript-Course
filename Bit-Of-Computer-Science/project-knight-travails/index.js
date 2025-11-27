const BOARD_MIN = 0;
const BOARD_MAX = 7;

function knightMoves(start, target) {
  const visited = new Set();

  const queue = [];
  queue.push(start);
  visited.add(`${start[0]},${start[1]}`);

  const parent = {};

  while (queue.length > 0) {
    const current = queue.shift();

    if (current[0] === target[0] && current[1] === target[1]) {
      const path = [];
      let currentKey = `${target[0]},${target[1]}`;

      while (currentKey !== `${start[0]},${start[1]}`) {
        // get the parent square
        const currentPos = parent[currentKey];
        // prepend to path
        path.unshift(currentPos);
        // move to parent
        currentKey = `${currentPos[0]},${currentPos[1]}`;
      }

      path.push(target);
      console.log(
        `You have made it in ${path.length - 1} moves! Here is your path.`,
      );
      path.forEach((square) => console.log(square));

      return path;
    }

    const neighbors = getMoves(current);

    for (const [nr, nc] of neighbors) {
      const key = `${nr},${nc}`;

      if (!visited.has(key)) {
        visited.add(key);
        parent[key] = current;
        queue.push([nr, nc]);
      }
    }
  }
}

function getMoves(pos) {
  const offsets = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const [r, c] = pos;

  const moves = [];

  for (let [dr, dc] of offsets) {
    const newR = r + dr;
    const newC = c + dc;

    if (newR >= 0 && newR <= 7 && newC >= 0 && newC <= 7) {
      moves.push([newR, newC]);
    }
  }

  return moves;
}