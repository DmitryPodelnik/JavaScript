class Figure {
    static #square = 32;


    static get square() {
        return this.#square;
    }
    static set square(value) {
            this.#square = value;
    }

    static rotateFigure(figureMatrix) {
        const N = figureMatrix.length - 1;
        const result = figureMatrix.map((row, i) =>
            row.map((val, j) => figureMatrix[N - j][i])
        );
        return result;
    }
    
    static whetherCanMove(figureMatrix, cellRow, cellColumn) {
        for (let i = 0; i < figureMatrix.length; i++) {
            for (let j = 0; j < figureMatrix[i].length; j++) {
                if (figureMatrix[i][j] && (
                    cellColumn + j < 0 || 
                    cellColumn + j >= Game.playingField[0].length ||
                    cellRow + i >= Game.playingField.length ||
                    Game.playingField[cellRow + i][cellColumn + j])
                ) {
                    return false;        
                }
            }
        }
        return true;
    }

    static placeFigure() { 

        for (let i = 0; i < Game.currentFigure.figureMatrix.length; i++) {
            for (let j = 0; j < Game.currentFigure.figureMatrix[i].length; j++) {
                if (Game.currentFigure.figureMatrix[i][j]) {
                    if (Game.currentFigure.row + i < 0) {
                        return Display.showGameOver();
                    }
                    Game.playingField[Game.currentFigure.row + i][Game.currentFigure.column + j] = Game.currentFigure.figureName;
                }
            }
        }

        for (let i = Game.playingField.length - 1; i >= 0; ) {
            if (Game.playingField[i].every(cell => !!cell)) {
                for (let j = i; j >= 0; j--) {
                    for (let k = 0; k < Game.playingField[j].length; k++) {
                        Game.playingField[j][k] = Game.playingField[j - 1][k];
                    }
                }
                Game.rows += 1;
            }
            else {
                i--;
            }
        }
        Game.currentFigure = Game.nextFigure;
        Game.nextFigure = Game.getNextFigure();
        Game.score += 10;
        Display.showScoreAndRows();

        if (Game.isNextFigureShowing) {
            Display.showNextFigure();
        }
    }
}