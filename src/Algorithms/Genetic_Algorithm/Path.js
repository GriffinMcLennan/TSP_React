import shuffle from './shuffle'
import copyList from './../copyList'
import calcDistance from '../calcDistance';

export default class Path {
    constructor(path) {
        let pathCopy = copyList(path);
        shuffle(pathCopy);

        this.path = pathCopy;
        this.calcFitness();
    }

    calcFitness() {
        this.fitness =  1 / (1 + calcDistance(this.path));
    }
}