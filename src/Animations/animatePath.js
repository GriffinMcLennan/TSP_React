import drawTSP from './drawTSP'
import animateBestPath from './animateBestPath'
import findMinMax from './../Algorithms/findMinMax'
import scaleList from './../Algorithms/scaleList'

const animatePath = (canvasRef, canvas2Ref, paths, distances, updateDistances, doneDrawing) => {
    const canvas = canvasRef;
    const path = paths;
    const canvasHeight = 720;
    const canvasWidth = 900;
    var currentDistance;
    var bestDistance = -1;

    const ctx2 = canvas2Ref.getContext('2d');

    var invalidGraph = false;
    let [minDist, maxDist] = findMinMax(distances);
    //Add edge case if minDist === maxDist

    if (minDist !== maxDist) {
        var scaledValues = scaleList(distances, minDist, maxDist, canvasHeight);
    }
    else {
        invalidGraph = true;
    }
    
    console.log(distances);
    console.log(scaledValues);

    const delX = canvasWidth / (distances.length - 1);

    let currentX = 0;

    /**
     * Time = path.length * deltaTime, set Time = 3000ms:
     * deltaTime = 3000 / path.length
     */
    let deltaTime = 3000 / path.length;
    ctx2.lineWidth = 0.3;

    for (let i = 0; i < path.length; i++) {
        setTimeout(() => {
            currentDistance = distances[i];

            if (i !== path.length - 1) {
                drawTSP(canvas, path[i]);
                
                if (bestDistance < 0 || bestDistance > distances[i]) {
                    bestDistance = distances[i];
                }
            }
            else {
                animateBestPath(canvas, path[i], doneDrawing);
            }

            if (!invalidGraph) {
                if (scaledValues[i] === canvasHeight) {
                    scaledValues[i] -= 3; //keep it visible
                }

                if (i === 0) {
                    ctx2.beginPath();
                    ctx2.moveTo(currentX, scaledValues[0]);
                }
                else {
                    ctx2.lineTo(currentX, scaledValues[i]);
                    ctx2.stroke();
                }
            }
            else {
                if (i === 0) {
                    ctx2.beginPath();
                    ctx2.moveTo(currentX, 250);
                }
                else {
                    ctx2.lineTo(currentX, 250);
                    ctx2.stroke();
                }
            }
            

            currentX += delX;

            updateDistances(currentDistance, bestDistance);
        }, i * deltaTime);
    }
}

export default animatePath;