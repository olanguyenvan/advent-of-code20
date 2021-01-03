var fs = require("fs");
const path = require("path");

fs.readFile(path.resolve(__dirname, "input"), "utf8", main);

// ========================
function main(err, contents) {
    const lines = contents.split("\n");
    const map = lines.map((line) => line.split(""));

    solvePart1(map);
    solvePart2(map);
}

// ==============
const TREE_SQUARE = "#";

// =============
function solvePart1(map) {
    const SLOPE_MOVE = {
        X_MOVE: 3,
        Y_MOVE: 1,
    };
    const treeCount = countTreesOnSlope(map, SLOPE_MOVE);

    console.log(
        `Answer to part 1 is: You've encountered ${treeCount} trees.\n`
    );
}

function countTreesOnSlope(map, slopeMove) {
    const { X_MOVE: xMove, Y_MOVE: yMove } = slopeMove;

    const mapHeight = map.length;
    const mapWidth = map[0].length;

    let xIndex = 0;
    let yIndex = 0;
    let treeCount = 0;

    while (yIndex <= mapHeight - 1) {
        if (map[yIndex][xIndex] === TREE_SQUARE) {
            treeCount += 1;
        }

        xIndex = (xIndex + xMove) % mapWidth;
        yIndex += yMove;
    }

    return treeCount;
}

// ============
function solvePart2(map) {
    const SLOPE_MOVE_1 = {
        X_MOVE: 1,
        Y_MOVE: 1,
    };
    const SLOPE_MOVE_2 = {
        X_MOVE: 3,
        Y_MOVE: 1,
    };
    const SLOPE_MOVE_3 = {
        X_MOVE: 5,
        Y_MOVE: 1,
    };
    const SLOPE_MOVE_4 = {
        X_MOVE: 7,
        Y_MOVE: 1,
    };
    const SLOPE_MOVE_5 = {
        X_MOVE: 1,
        Y_MOVE: 2,
    };

    const slopeMoves = [
        SLOPE_MOVE_1,
        SLOPE_MOVE_2,
        SLOPE_MOVE_3,
        SLOPE_MOVE_4,
        SLOPE_MOVE_5,
    ];

    const treeCountsMultiplied = slopeMoves.reduce((acc, slopeMove) => {
        return acc * countTreesOnSlope(map, slopeMove);
    }, 1);

    console.log(
        `Answer to part 1 is: Number of trees on ${slopeMoves.length} slopes multiplied together is ${treeCountsMultiplied}.\n`
    );
}
