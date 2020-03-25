import React from 'react';
import Square from "./RowComponents/Square";

class Row extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() { 
      let widthArray = [];
  
      for (let i=0; i < this.props.boardWidth; i++) {
        widthArray.push(<Square key={i} xVal={i} yVal={this.props.yVal}/>);
      }
  
      return(
        <div className="board-row">
          {widthArray}
        </div>
      );
  
    };
  }

export default Row;