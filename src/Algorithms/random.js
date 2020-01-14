import copyList from './copyList'
import calcDistance from './calcDistance'
import swap from './swap'

const random = (circles, iterations) => {
    const MAX_ITER = iterations;
    let pathList = [];
    let bestPath = [];
    let distanceList = [];
    let bestDistance = -1;

    let tmpPath = copyList(circles);

    for (let i = 0; i < MAX_ITER; i++) {
        swap(tmpPath);

        //console.log(tmpPath);
        pathList.push(tmpPath);
        distanceList.push(calcDistance(tmpPath));
        if (distanceList[i] < bestDistance || bestDistance === -1) {
            bestDistance = distanceList[i];
            bestPath = tmpPath;
        }

        tmpPath = copyList(circles);
    }

    pathList.push(bestPath);
    distanceList.push(bestDistance);
    //console.log(pathList);

    return [pathList, distanceList];

}

export default random