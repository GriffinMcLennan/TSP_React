function copyList(list) {
    let listCopy = [];

    for (let i = 0; i < list.length; i++) {
        let tmpPoint = [];

        for (let j = 0; j < list[i].length; j++) {
            tmpPoint.push(list[i][j]);
        }

        listCopy.push(tmpPoint);
    }
    
    return listCopy;
}

export default copyList;