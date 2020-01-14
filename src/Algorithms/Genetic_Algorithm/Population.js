import Path from './Path'

export default class Population {
    constructor(path) {
        let paths = [];

        for (let i = 0; i < 100; i++) {
            paths.push(new Path(path));
        }

        this.paths = paths;

        //console.log(paths);
    }

    getFittest() {
        let fittest = this.paths[0];
        let fittestValue = fittest.fitness;

        for (let i = 1; i < this.paths.length; i++) {
            if (this.paths[i].fitness > fittestValue) {
                fittestValue = this.paths[i].fitness;
                fittest = this.paths[i];
            }
        }

        return fittest;
    }

    normalizeFitness() {
        let sum = 0;

        for (let i = 0; i < this.paths.length; i++) {
            sum += this.paths[i].fitness;
        }

        for (let i = 0; i < this.paths.length; i++) {
            this.paths[i].fitness = this.paths[i].fitness / sum;
        }
    }
}