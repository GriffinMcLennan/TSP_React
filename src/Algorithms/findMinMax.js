const findMinMax = (list) => {
    let min = list[0];
    let max = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }

        if (list[i] < min) {
            min = list[i];
        }
    }

    return [min, max];
}

export default findMinMax;