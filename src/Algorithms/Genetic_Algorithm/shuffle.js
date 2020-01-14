const shuffle = (list) => {
    for (let i = 0; i < list.length; i++) {
        let swapInd = Math.floor(Math.random() * list.length);

        while (swapInd === i) {
            swapInd = Math.floor(Math.random() * list.length);
        }

        let tmp = list[i];
        list[i] = list[swapInd];
        list[swapInd] = tmp;
    }
}

export default shuffle;