class Timer {
    static #seconds = 0;
    static #counter = 0;

    static get seconds() {
        return this.#seconds;
    }
    static set seconds(value) {
        this.#seconds = value;
    }

    static get counter() {
        return this.#counter;
    }
    static set counter(value) {
        this.#counter = value;
    }

    static updateTimer() {              
        Game.ctxNextFigure.clearRect(Game.nextFigureCanvas.width - 250, Game.nextFigureCanvas.height - 60, 230, 50);  
        Game.ctxNextFigure.font = "12px Verdana";
        Game.ctxNextFigure.fillStyle = "black";
        Game.ctxNextFigure.fillText(`SECONDS ELAPSED:  ${Timer.seconds}`, Game.nextFigureCanvas.width - 105, Game.nextFigureCanvas.height - 50);
    }
}
