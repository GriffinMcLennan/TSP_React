const drawCircle = (canvasRef, x, y) => {
    const canvas = canvasRef;
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);

    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
}

export default drawCircle;