import React from 'react';
import Row from "./BoardComponents/Row";


const width = 12;
const depth = 12;
const numCreatures = 5;


class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gridArray :Array(depth).fill({
                rowArray: Array(width).fill({
                    xVal: null,
                    yVal: null,
                }),
            }),
        }

        this.setSquareCoords();
    }
  
    render() {
      let depthArray = [];
  
      for (let i=0; i < depth; i++) {
        depthArray.push(<Row key={i} yVal={i} boardWidth={width}/>);
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
        for (let y=0; y < depth; y++) {
            for (let x=0; x < width; x++) {
                this.state.gridArray[y].rowArray[x] = {
                    xVal: x,
                    yVal: y,
                }
            }
        }
    }
  }

export default Board;