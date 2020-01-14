const swap = (list) => {

    if (list.length < 2) {
        return;
    }

    let ind1 = Math.floor(Math.random() * list.length);
    let ind2 = Math.floor(Math.random() * list.length);
    
    while (ind2 === ind1) {
        ind2 = Math.floor(Math.random() * list.length);
    }

    let tmpX = list[ind1][0];
    let tmpY = list[ind1][1];

    list[ind1][0] = list[ind2][0];
    list[ind1][1] = list[ind2][1];

    list[ind2][0] = tmpX;
    list[ind2][1] = tmpY;
}

export default swap;