import copyList from './../copyList'

const pickOne = (paths) => {
    var index = 0;
    var r = Math.random();

    while (r > 0) {
        r = r - paths[index].fitness;
        index++;
    }

    index--;

    var newPath = copyList(paths[index].path);

    return newPath;
}

export default pickOne;