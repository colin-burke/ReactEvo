import React from 'react';

class Square extends React.Component {
    render() {
      return (
        <div className="grid-square">
          {this.props.xVal} + {this.props.yVal}
        </div>
      );
    }
  }

export default Square;
  