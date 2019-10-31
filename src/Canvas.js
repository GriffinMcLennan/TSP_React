import React from 'react';
import './App.css';

class Canvas extends React.Component {
    state = {
        circles : [],
        bestPath : [],
        bestDistance : 10000000,
        distance : null,
        drawing: false,
    }

    drawCircle(x, y, init=false) {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);

        if (init)
            this.state.circles.push([x, y]);
        
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();

        //console.log(this.state.circles);
    }

    drawTSP() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const arr = this.state.circles;
    
        ctx.strokeStyle = 'black';
        //console.log("In Draw: " + arr);
        for (let i = 0; i < arr.length; i++)
        {
            this.drawCircle(arr[i][0], arr[i][1]);
            /*
            ctx.beginPath();
            ctx.arc(arr[i][0], arr[i][1], 10, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.stroke(); 
            */
        }
        
        for (let i = 0; i < arr.length - 1; i++)
        {
            ctx.beginPath();
            ctx.moveTo(arr[i][0], arr[i][1]);
            ctx.lineTo(arr[i + 1][0], arr[i + 1][1]);
            ctx.stroke();
        }
    }

    calcDistance() {
        const arr = this.state.circles;
        var dist = 0;

        for (let i = 1; i < arr.length; i++) {
            dist += Math.sqrt( (arr[i][0] - arr[i - 1][0])**2 + (arr[i][1] - arr[i - 1][1])**2 );
        }

        dist = Math.round(dist);
        this.setState({distance : dist});

        if (dist <= this.state.bestDistance) {
            this.setState({bestDistance : dist});
            
            let newBest = [];
            
            for (let k = 0; k < arr.length; k++) {
              newBest[k] = arr[k].slice();
            }
            this.setState({bestPath : newBest});
            
            //console.log("BestPath changed");
        }
    }

    animateBest() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const arr = this.state.bestPath;

        for (var i = 0; i < arr.length; i++)
        {
            ctx.beginPath();
            ctx.arc(arr[i][0], arr[i][1], 10, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.stroke(); 
        }
        
        ctx.strokeStyle = 'red';
        
        //asf
        for (let i = 0; i < arr.length - 1; i++) {
            setTimeout(() => {
                ctx.beginPath();
                ctx.moveTo(arr[i][0], arr[i][1]);
                ctx.lineTo(arr[i + 1][0], arr[i + 1][1]);
                ctx.stroke();
            }, 200 * i);
        }
    }

    solve() {
        const arr = this.state.circles;
        this.setState({drawing : true});
        const MAX_ITER = 100;

        if (arr.length < 3)
        {
            alert('Place more than 2 locations to initiate pathfinding');
            return;
        }

        let newArr = arr.slice();
        //console.log("Starting??");
        
        for (let i = 0; i <= MAX_ITER; i++) {
            setTimeout(() => {

                if (!this.state.drawing)
                    return;
                
                var ind1 = Math.floor(Math.random() * newArr.length);
                var ind2 = Math.floor(Math.random() * newArr.length);
                
                while (ind2 === ind1) {
                    ind2 = Math.floor(Math.random() * newArr.length);
                }

                var tmp1 = newArr[ind1][0];
                var tmp2 = newArr[ind1][1];


                newArr[ind1][0] = newArr[ind2][0];
                newArr[ind1][1] = newArr[ind2][1];

                
                newArr[ind2][0] = tmp1;
                newArr[ind2][1] = tmp2;

                //console.log("In solve(): " + this.state.circles);
                this.setState({circles : newArr});

                this.drawTSP();
                this.calcDistance();
                newArr = this.state.circles.slice();
                
                if (i === MAX_ITER) {
                    this.animateBest();
                }

            }, 30 * i);
            //console.log(i);
            
        }

    }

    reset() {
        this.setState({drawing : false});

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.setState({circles : []});
        this.setState({bestDistance: 10000000});
        this.setState({distance: null});
        this.setState({drawing: false});
    }

    render() {
        var best;

        if (this.state.bestDistance === 10000000){
            best = "";
        }
        else {
            best = this.state.bestDistance;
        }

        return (
            <div className="container">
                <div>
                    <canvas ref="canvas" width={1000} height={1000}
                            onClick={(e) => this.drawCircle(e.clientX, e.clientY, true)}
                    />

                    
                </div>

                <p className="scoreboard">Current Distance: {this.state.distance}</p>
                <p className="scoreboard">Best Distance: {best}</p>

                <div>
                    <button className="btn" onClick={() => this.solve()}>Solve</button>
                    <button className="btn" onClick={() => this.reset()}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Canvas;
