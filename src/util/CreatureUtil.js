class CreatureUtil {

    constructor(numCreatures, gridArray, creatureArray) {
        this.numCreatures = numCreatures;
        this.gridArray = gridArray;
        this.creatureArray = creatureArray;
    }

    allocateCreatureStartingLocations = () => {
        for (let i = 0; i < this.numCreatures; i++) {
            let y = this.getRandomNumInRange(0, this.gridArray.length-1);
            let x = this.getRandomNumInRange(0, this.gridArray[y].length-1);

            if (!this.gridArray[y][x].containsCreature) {
                this.gridArray[y][x].containsCreature = true;
                this.creatureArray[i].xVal = x;
                this.creatureArray[i].yVal = y;
            } else {
                i--;
            }
        }
    }

    moveAllCreatures = () => {
        for (let i = 0; i < this.numCreatures; i++) {
            let currentCreature = this.creatureArray[i];
            let potentialMoves = this.findPotentialMoves(currentCreature);
            let move = potentialMoves[this.getRandomNumInRange(0, potentialMoves.length-1)];
            currentCreature.previousY = currentCreature.yVal;
            currentCreature.previousX = currentCreature.xVal;
            this.gridArray[currentCreature.previousY][currentCreature.previousX].containsCreature = false;
            currentCreature.yVal = move.y;
            currentCreature.xVal = move.x;
            this.gridArray[currentCreature.yVal][currentCreature.xVal].containsCreature = true;
        }
    }

    findPotentialMoves = (creature) => {
        let x = creature.xVal;
        let y = creature.yVal;
        let potentialSpaces = [];
        potentialSpaces.push({"x" : x-1, "y": y}, {"x" : x+1, "y": y}, {"x" : x, "y": y -1}, {"x" : x, "y": y + 1});
        let validMoves = potentialSpaces.filter((e) => {
            return (this.inRange(e.x, 0, this.gridArray[y].length-1)) && (this.inRange(e.y, 0, this.gridArray.length-1));
        });
        return validMoves;
    }

    checkValidMove = (space) => {
        return !(this.inRange(space.x, 0, this.gridArray[y].length-1)) || !(this.inRange(space.y, 0, this.gridArray.length-1))
}

    getRandomNumInRange(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    inRange = (num, start, end) => {

        // If no end number, use start as end
        if (!end) {
            end = start;
            start = 0;
        }

        return num >= start && num <= end;

    };



}

export default CreatureUtil;