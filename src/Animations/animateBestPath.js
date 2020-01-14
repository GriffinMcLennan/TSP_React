import drawCircle from './drawCircle'
import clearCanvas from './clearCanvas'

const animateBestPath = (canvasRef, path, doneDrawing) => {
    const canvas = canvasRef;
    const ctx = canvas.getContext('2d');
    const arr = path;

    clearCanvas(canvas);

    let deltaTime = 2000 / arr.length;

    for (let i = 0; i < arr.length; i++){
        drawCircle(canvas, arr[i][0], arr[i][1]);
    }

    ctx.strokeStyle = 'red';

    for (let i = 0; i < arr.length - 1; i++) {
        setTimeout(() => {
            ctx.beginPath();
            ctx.moveTo(arr[i][0], arr[i][1]);
            ctx.lineTo(arr[i + 1][0], arr[i + 1][1]);
            ctx.stroke();

            if (i === arr.length - 2) {
                doneDrawing();
            }
        }, deltaTime * i);
    }

    
}


export default animateBestPath;