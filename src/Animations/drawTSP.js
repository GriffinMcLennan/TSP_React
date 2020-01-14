import drawCircle from './drawCircle'
import clearCanvas from './clearCanvas'

const drawTSP = (canvasRef, path) => {
    const canvas = canvasRef;
    const ctx = canvas.getContext('2d');
    const arr = path;

    clearCanvas(canvas);

    ctx.strokeStyle = 'black';

    for (let i = 0; i < arr.length; i++){
        drawCircle(canvas, arr[i][0], arr[i][1]);
    }

    for (let i = 0; i < arr.length - 1; i++){
        ctx.beginPath();
        ctx.moveTo(arr[i][0], arr[i][1]);
        ctx.lineTo(arr[i + 1][0], arr[i + 1][1]);
        ctx.stroke();
    }
}

export default drawTSP;