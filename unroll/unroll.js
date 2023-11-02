function unroll(squareArray) {
    let result = [];
    
    // Check for empty input
    if (squareArray.length === 0) return result;

    // Initialize boundaries
    let startRow = 0, startColumn = 0;
    let endRow = squareArray.length - 1;
    let endColumn = squareArray[0].length - 1;

    while (startRow <= endRow && startColumn <= endColumn) {
        // Traverse top row from left to right
        for (let i = startColumn; i <= endColumn; i++) {
            result.push(squareArray[startRow][i]);
        }
        startRow++;

        // Traverse rightmost column from top to bottom
        for (let i = startRow; i <= endRow; i++) {
            result.push(squareArray[i][endColumn]);
        }
        endColumn--;

        // Traverse bottom row from right to left (if there are rows left)
        if (startRow <= endRow) {
            for (let i = endColumn; i >= startColumn; i--) {
                result.push(squareArray[endRow][i]);
            }
            endRow--;
        }

        // Traverse leftmost column from bottom to top (if there are columns left)
        if (startColumn <= endColumn) {
            for (let i = endRow; i >= startRow; i--) {
                result.push(squareArray[i][startColumn]);
            }
            startColumn++;
        }
    }

    return result;
}

module.exports = unroll;
