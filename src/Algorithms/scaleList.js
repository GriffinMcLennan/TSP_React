const scaleList = (list, min, max, canvasHeight) => {
    let scaleFactor = canvasHeight / (max - min);
    console.log(scaleFactor);
    let scaledList = [];

    for (let i = 0; i < list.length; i++) {
        scaledList.push((list[i] - min) * scaleFactor);
        scaledList[i] = canvasHeight - scaledList[i];
    }

    return scaledList;
}

export default scaleList;