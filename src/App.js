import React from 'react';
import './App.css';
import drawCircle from './Animations/drawCircle'
import clearCanvas from './Animations/clearCanvas'
import animatePath from './Animations/animatePath'
import random from './Algorithms/random'
import swap from './Algorithms/swap'
import simulatedAnnealing from './Algorithms/simulatedAnnealing'
import GA from './Algorithms/Genetic_Algorithm/GA'
import Modal from './Modal'
//import Button from 'react-bootstrap/Button'


//TODO: set animation time to be fixed to some time: calculating how many paths there are in the list.
//TODO: Save the top 5 paths from previous generation.

class App extends React.Component {
    state = {
        circles : [],
        bestPath : [],
        bestDistance : -1,
        distance : null,
        drawing: false,
        showTutorial: true
    }

    /**
     * 
     * @param {int} x   x coordinate of the circle
     * @param {int} y   y coordinate of the circle
     */
    addCircle(x, y) {
        let circlesCopy = this.state.circles.slice();
        circlesCopy.push([x, y]);

        //shuffle list of circle locations
        swap(circlesCopy);

        this.setState({circles : circlesCopy});
        drawCircle(this.refs.canvas, x, y);
    }

    /**
     * @param {double} currentDistance  distance of the current path
     * @param {double} bestDistance     distance of the best path
     */
    setDistances = (currentDistance, bestDistance) => {
        this.setState({distance : currentDistance,
                    bestDistance : bestDistance});
        
    }
    
    /**
     * Resets state and clears the canvas
     */
    resetState() {
        if (this.state.drawing === true) {
            alert('Wait for animation to finish before resetting!');
            return;
        }

        clearCanvas(this.refs.canvas);
        clearCanvas(this.refs.canvas2);

        this.setState({circles : [], 
                    bestDistance : -1,
                    distance : null,
                    drawing : false}
                    );
    }

    /**
     * Changes the state of drawing to false for when the animations are finished.
     */
    doneDrawing = () => {
        this.setState({drawing : false});
    }


    /**
     * Method to close the tutorial window
     */
    closeTutorial = () => {
        this.setState({showTutorial : false});
    }

    /**
     * Method that handles which algorithm to use to solve the TSP.
     * 
     * @param {String} algorithm    Name of the algorithm to be used
     */
    selectAlgorithm(algorithm) {

        //check list size
        if (this.state.circles.length < 2) {
            alert('Must contain at least 2 or more circles to find paths');
            return;
        }
        else if (this.state.drawing === true) {
            alert('Wait for animation to finish before selecting another algorithm!');
            return;
        }

        clearCanvas(this.refs.canvas2);
        this.setState({drawing : true});

        //reset distances
        this.setDistances(null, -1);

        var paths, distances;
        
        if (algorithm === "SA") {
            [paths, distances] = simulatedAnnealing(this.state.circles);
        }
        else if (algorithm === "randomSwap") {
            [paths, distances] = random(this.state.circles, 50);
        }
        else if (algorithm === "GA") {
            let ga = new GA(this.state.circles);
            [paths, distances] = ga.evole(100);
        }

        animatePath(this.refs.canvas, this.refs.canvas2, paths, distances, this.setDistances, this.doneDrawing);
    }

    /**
     * Render method
     */
    render() {
        var best;


        if (this.state.bestDistance === -1){
            best = "";
        }
        else {
            best = this.state.bestDistance;
        }

        return (
            <div className="container">
                <div>
                    <canvas ref="canvas" width={880} height={800}
                            onClick={(e) => this.addCircle(e.clientX - 15, e.clientY - 15)}
                    />

                    <div id="div2">
                        <p>Distance Graph:</p>
                        <canvas ref="canvas2" id="distancegraph" width={900} height={720}
                        />
                    </div>
                </div>

                <div id="utilities">
                    <div id="buttons">
                        <button className="btn" onClick={() => this.selectAlgorithm('randomSwap')}>Random Swap</button>
                        <button className="btn" onClick={() => this.selectAlgorithm('SA')}>Simulated Annealing</button>
                        <button className="btn" onClick={() => this.selectAlgorithm('GA')}>Genetic Algorithm</button>
                        <button className="btn" onClick={() => this.resetState()}>Reset</button>
                    </div>

                    <div id="scoreInfo">
                        <p className="scoreboard">Current Distance: {this.state.distance}</p>
                        <p className="scoreboard">Best Distance: {best}</p>
                    </div>
                    
                </div>
                

                {this.state.showTutorial ? (
                    <Modal onClose={this.closeTutorial} statement={"Tutorial:"}/>
                ) : null}
            </div>
            

        );
    }
}

export default App;
