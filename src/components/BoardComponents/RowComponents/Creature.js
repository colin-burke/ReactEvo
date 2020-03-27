import React from 'react';

class Creature extends React.Component {

    constructor(props) {
        super(props);

        this.state.food = 0;
        this.state.speed = 0;
    }
    render() {
        return (
            <div className="grid-square">
                {this.props.xVal} + {this.props.yVal}
            </div>
        );
    }
}

export default Creature;