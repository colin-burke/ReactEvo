import React from 'react';
import Row from "./BoardComponents/Row";


const width = 12;
const depth = 12;


class Board extends React.Component {
    renderRow(i) {
      return <Row />;
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
  }

export default Board;