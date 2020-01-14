const calcDistance = (path) => {
    let distance = 0;
    const arr = path;

    for (let i = 1; i < path.length; i++) {
        distance += Math.sqrt( (arr[i][0] - arr[i - 1][0])**2 + (arr[i][1] - arr[i - 1][1])**2 );
    }

    distance = Math.round(distance);

    return distance;
}

export default calcDistance;