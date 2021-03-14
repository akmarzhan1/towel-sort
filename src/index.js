
// You should implement your task here.

module.exports = function towelSort(matrix) {

    let array = [];
    if (matrix === undefined || matrix.length == 0) {
        return [];
    }
    else {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i] === undefined || matrix[i].length == 0) {
                continue;
            }
            else {
                if (i % 2 == 1) {
                    for (let j = matrix[i].length - 1; j > -1; j--) {
                        array.push(matrix[i][j]);
                    }
                }
                else {
                    for (let j = 0; j < matrix[i].length; j++) {
                        array.push(matrix[i][j]);
                    }
                }
            }
        }
        return array;
    }
}
