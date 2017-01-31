class TicTacToe {
    constructor() {
        this.matrix = {
            '0': {'0': null,'1': null,'2': null},
            '1': {'0': null,'1': null,'2': null},
            '2': {'0': null,'1': null,'2': null}
        };
        this.lastPlayer = 'o';
        this.boardSize = 3;
        this.winner = null;
        this.draw = null;   
    }

    getCurrentPlayerSymbol() { 
        return (this.lastPlayer === 'o') ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        var field = this.matrix[rowIndex][columnIndex]; 

        if (!field) {   
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.lastPlayer = this.getCurrentPlayerSymbol();
        }
        
        var horizontal = '', vertical = '', firstDiagonal = '', secondDiagonal = '';
        var winCombination = '';

        for (var y = 0; y < this.boardSize; y++) { 
            winCombination += this.lastPlayer;
        }

        for (var i = 0; i < this.boardSize; i++) {
            horizontal += this.matrix[rowIndex][i];
            vertical += this.matrix[i][columnIndex];
            firstDiagonal += this.matrix[i][i];
            secondDiagonal += this.matrix[i][this.boardSize - 1 - i];
        }

        if (horizontal === winCombination 
            || vertical === winCombination 
            || firstDiagonal === winCombination 
            || secondDiagonal === winCombination ) {
            this.winner = this.lastPlayer;
        }
    }
 
    isFinished() {
        return (this.getWinner() || this.isDraw()) ? true : false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        for (var row = 0; row < this.boardSize; row++) {
            for (var col = 0; col < this.boardSize; col++) {
                if (this.matrix[row][col] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner()) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

