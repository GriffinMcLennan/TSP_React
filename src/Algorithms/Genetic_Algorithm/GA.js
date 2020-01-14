import Population from "./Population"
import swap from "../swap"
import calcDistance from "../calcDistance"
import pickOne from './pickOne'
import copyList from "../copyList";

export default class GA {
    constructor(circles) {
        this.eliteOffset = 5;
        this.population = new Population(circles);
        this.population.normalizeFitness();
        this.sortByFitness();
    }

    evole(generations) {
        let paths = [];
        let distances = [];

        let bestEverDist = 10000000000;
        let bestEverPath = [];

        for (let i = 0; i < generations; i++) {
            let bestDist = 100000000000;
            let bestPath = [];

            for (let j = 0; j < this.population.paths.length; j++) {
                let curDist = calcDistance(this.population.paths[j].path);

                if (curDist < bestDist) {
                    bestDist = curDist;
                    bestPath = this.population.paths[j].path;
                }

                if (curDist < bestEverDist) {
                    bestEverDist = curDist;
                    bestEverPath = this.population.paths[j].path;
                }
            }
            

            paths.push(bestPath);
            distances.push(bestDist);

            this.nextGeneration();
        }

        paths.push(bestEverPath);
        distances.push(bestEverDist);

        return [paths, distances];
    }

    nextGeneration() {
        var newPopulation = [];

        for (let i = 0; i < this.eliteOffset; i++) {
            newPopulation.push(copyList(this.population.paths[i].path));
        }

        for (let i = 0; i < this.population.paths.length - this.eliteOffset; i++) {
            
            var order = pickOne(this.population.paths);

            if (Math.random() > 0.8) {
                var orderTwo = pickOne(this.population.paths);

                order = this.crossOver(order, orderTwo);
            }
            else {
                swap(order);
            }
            
            newPopulation.push(order);
        }

        for (let i = 0; i < this.population.paths.length; i++) {
            this.population.paths[i].path = newPopulation[i];
            this.population.paths[i].calcFitness();
        }

        this.population.normalizeFitness();
        this.sortByFitness();
    }

    crossOver(orderA, orderB) {
        let ind1 = Math.floor(Math.random() * orderA.length);
        let ind2 = Math.floor(Math.random() * orderA.length);
        var cross = [];

        while (ind2 === ind1) {
            ind2 = Math.floor(Math.random() * orderA.length);
        }

        if (ind1 > ind2) {
            let tmp = ind2;
            ind2 = ind1;
            ind1 = tmp;
        }

        let visited = new Set();
        for (let i = ind1; i < ind2; i++) {
            cross.push(orderA[i]);
            visited.add("" + orderA[i]); //new
        }

        for (let i = 0; i < orderB.length; i++) {
            if (!visited.has("" + orderB[i])) {
                cross.push(orderB[i]);
                visited.add("" + orderB[i]);
            }
        }

        for (let i = 0; i < orderA.length; i++) {
            if (!visited.has("" + orderA[i])) {
                cross.push(orderA[i]);
            }
        }

        return cross;
    }

    sortByFitness() {
        const population = this.population;

        for (let i = 0; i < population.paths.length - 1; i++) {
            for (let j = i + 1; j < population.paths.length; j++) {
                if (population.paths[j].fitness > population.paths[i].fitness) {
                    let tmpPath = population.paths[i].path;
                    let tmpFitness = population.paths[i].fitness;

                    population.paths[i].path = population.paths[j].path;
                    population.paths[i].fitness = population.paths[j].fitness;

                    population.paths[j].path = tmpPath;
                    population.paths[j].fitness = tmpFitness;

                }
            }
        }
    }
}