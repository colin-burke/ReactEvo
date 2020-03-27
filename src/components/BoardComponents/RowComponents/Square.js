import React from 'react';

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            containsCreature: this.props.squareObj.containsCreature,
            containsFood: this.props.squareObj.containsFood,
        }
    }
    render() {
        let food;
        if (this.props.squareObj.containsFood) {
            food = <span className="food-dot"></span>
        }

        if (this.props.squareObj.containsCreature) {
            food = <span className="creature-dot"></span>
        }
        return (
            <div className="grid-square">
                {food}
            </div>
        );
    }
  }

export default Square;
  