class Display {
    static showStartMenu() {
        Game.ctx.fillStyle = "black";
        Game.ctx.font = "24px Verdana";
        Game.ctx.textAlign = "center";
        Game.ctx.textBaseline = "middle";
        Game.ctx.fillText("PRESS SPACE TO START", Game.canvas.width / 2, Game.canvas.height / 2);

        Display.showScoreAndRows();

        Game.ctxNextFigure.lineWidth = 5; // толщина линии
        Game.ctxNextFigure.moveTo(0, 320); //передвигаем перо
        Game.ctxNextFigure.lineTo(231, 320); //рисуем линию
        Game.ctxNextFigure.stroke();

        Game.ctxNextFigure.lineWidth = 1; // толщина линии
        Game.ctxNextFigure.fillStyle = "black";
        Game.ctxNextFigure.strokeRect(5, Game.nextFigureCanvas.height - 600, Game.nextFigureCanvas.width - 10, 230);

        Game.ctxNextFigure.fillText("NEXT", Game.canvas.width / 2 - 90, Game.canvas.height - 619);
        Game.ctxNextFigure.fillText("FIGURE", Game.canvas.width / 2 - 15, Game.canvas.height - 619);
    }

    static showScoreAndRows() {
        Game.ctxNextFigure.clearRect(Game.nextFigureCanvas.width - 230, Game.nextFigureCanvas.height - 250, Game.nextFigureCanvas.width, 100);  

        Game.ctxNextFigure.fillStyle = "black";
        Game.ctxNextFigure.font = "20px Verdana";
        Game.ctxNextFigure.textAlign = "center";
        Game.ctxNextFigure.textBaseline = "middle";
        Game.ctxNextFigure.fillText(`SCORE: ${Game.score}`, Game.nextFigureCanvas.width - 110, Game.nextFigureCanvas.height - 195);
        Game.ctxNextFigure.fillText(`ROWS:  ${Game.rows}`, Game.nextFigureCanvas.width - 110, Game.nextFigureCanvas.height - 160);
    }

    static showGameOver() { 
        cancelAnimationFrame(checkForAnimationError);
        document.removeEventListener("keydown", Game.pursueKeys);

        Game.gameOver = true;
        Game.ctx.fillStyle = "black";
        Game.ctx.fillRect(0, Game.canvas.height / 2 - 42, Game.canvas.width, 72);
        Game.ctx.fillStyle = "white";
        Game.ctx.font = "34px Verdana";
        Game.ctx.fillText("GAME OVER!", Game.canvas.width / 2, Game.canvas.height / 2);
    }

    static showNextFigure() {
        for (let i = 0; i < Game.nextFigure.figureMatrix.length; i++) {
            for (let j = 0; j < Game.nextFigure.figureMatrix[i].length; j++) {
                Game.ctxNextFigure.clearRect(5, Game.nextFigureCanvas.height - 600, Game.nextFigureCanvas.width - 10, 230);
            }
        }

        Game.ctxNextFigure.fillStyle = colors[Game.nextFigure.figureName];

        for (let i = 0; i < Game.nextFigure.figureMatrix.length; i++) {
            for (let j = 0; j < Game.nextFigure.figureMatrix[i].length; j++) {
                if (Game.nextFigure.figureMatrix[i][j]) {
                    Game.ctxNextFigure.fillRect((Game.nextFigure.column + j) * Figure.square - 30, (Game.nextFigure.row + i) * Figure.square + 180, Figure.square - 1, Figure.square - 1);
                }
            }
        }
    }
}
