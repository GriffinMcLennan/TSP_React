import copyList from './copyList'
import calcDistance from './calcDistance'
import acceptanceProbability from './acceptanceProbability'
import swap from './swap';

const simulatedAnnealing = (list) => {
    let T = 100000;
    const coolingRate = 0.05;
    let paths = [];
    let distances = [];

    let currentEnergy = calcDistance(list);
    let currentPath = copyList(list);

    paths.push(list);
    distances.push(currentEnergy);

    var bestEnergy = currentEnergy;
    var bestPath = list;

    while (T > 0.01) {

        let newPath = copyList(currentPath);

        swap(newPath);

        let newEnergy = calcDistance(newPath);

        if (acceptanceProbability(currentEnergy, newEnergy, T) > Math.random()) {
            currentPath = copyList(newPath);
            paths.push(currentPath);
            distances.push(newEnergy);

            currentEnergy = newEnergy;

            if (currentEnergy < bestEnergy) {
                bestEnergy = currentEnergy;
                bestPath = currentPath;
            }
        }


        T = T * (1 - coolingRate);
    }

    paths.push(bestPath);
    distances.push(bestEnergy);

    //console.log(paths);
    //console.log("Distances = :");
    //console.log(distances);

    return [paths, distances];
}

export default simulatedAnnealing;