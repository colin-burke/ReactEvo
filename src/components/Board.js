import React from 'react';
import Row from "./BoardComponents/Row";
import CreatureUtilClass from "../util/CreatureUtil";


const width = 12;
const depth = 12;
const numFood = 10;
let numCreatures = 5;


class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gridArray : this.initGrid(),
            creatureArray: this.initCreatures(),
        }

        let CreatureUtil = new CreatureUtilClass(numCreatures, this.state.gridArray, this.state.creatureArray);

        this.setSquareCoords();
        this.state.creatureArray[1].yVal = 1;
        this.allocateFoodLocations();
        CreatureUtil.allocateCreatureStartingLocations(numCreatures, this.state.gridArray, this.state.creatureArray);
    }
  
    render() {
      let depthArray = [];
  
      for (let i=0; i < depth; i++) {
        depthArray.push(<Row key={i} yVal={i} boardWidth={width} squaresArray={this.state.gridArray[i]}/>);
      }

      return (
        <div>
          <div className="board-row">
            {depthArray}
          </div>

            <button onClick={this.beginMoving}> Click</button>
        </div>
      );
    }

    beginMoving = () => {
        let CreatureUtil = new CreatureUtilClass(numCreatures, this.state.gridArray, this.state.creatureArray);
        setInterval(() => {CreatureUtil.moveAllCreatures()
            this.setState(this.state);
        }, 500);
        // CreatureUtil.moveAllCreatures();
        // this.setState(this.state);
    }

    setSquareCoords = () => {
        for (let y=0; y < depth; y++) {
            for (let x=0; x < width; x++) {
                this.state.gridArray[y][x] = {
                    xVal: x,
                    yVal: y,
                }
            }
        }
    }

    allocateFoodLocations = () => {
        let counter = numFood;
        while (counter > 0) {
            let x = this.getRandomNumInRange(0, width-1)
            let y = this.getRandomNumInRange(0, depth-1)

            if(!this.state.gridArray[y][x].containsFood) {
                this.state.gridArray[y][x].containsFood = true;
                counter --;
            }
        }
    }

    initGrid = () => {
        let grid = Array(depth);
        for (let i=0; i < grid.length; i++) {
            grid[i] = new Array(width).fill({
                xVal: null,
                yVal: null,
                containsFood: null,
                containsCreature: null,
            })
        }

        return grid;
    }

    initCreatures = () => {
        let creaturesArray = Array(numCreatures);

        for(let i = 0; i < creaturesArray.length; i++) {
            creaturesArray[i] = {};
            creaturesArray[i].xVal = null;
            creaturesArray[i].yVal = null;
            creaturesArray[i].foodCount = null;
        };

        return creaturesArray
    }

    getRandomNumInRange(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }


}

export default Board;