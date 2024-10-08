
module.exports = function towelSort(matrix) {
    let resArr = [];

    if (matrix == null) {
        return resArr;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 1) {
            matrix[i].reverse();
        }
    }

    return resArr = matrix.flat();
}
