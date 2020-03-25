import React from 'react';
import Row from "./BoardComponents/Row";


const width = 12;
const depth = 12;
const numCreatures = 5;


class Board extends React.Component {
  constructor(props) {
    super(props);
    let grid = Array(depth);
    for(let i = 0; i < grid.length; i++)
    {
      grid[i] = new Array(width).fill({xVal: null, yVal: null})
    }
    this.state = {
      gridArray: grid
      /*
      with gridArray :Array(depth).fill({
                rowArray: Array(width).fill({
                    xVal: null,
                    yVal: null,
                }),
            }),
      each rowArray that gets made, isn't 'new', so they'll all act as references to the same location in memory
      Solution = for each index in gridArray allocate a new Array on the heap using 'new' keyword
      */
    }
    this.setSquareCoords();
  }

  render() {
    let depthArray = [];

    for (let i = 0; i < depth; i++) {
      depthArray.push(<Row key={i} yVal={i} boardWidth={width} />);
    }

    return (
      <div>
        <div className="board-row">
          {depthArray}
        </div>
      </div>
    );
  }

  setSquareCoords = () => {
    for (let y = 0; y < depth; y++) {
      for (let x = 0; x < width; x++) {
        this.state.gridArray[y][x] = { xVal: x, yVal: y } //this is what I'd do. If you defo want to use that object with rowArray
      }                                                   //key just make sure you use 'new' in an iterative approach
    }
    console.log("test")
  }
}

export default Board;