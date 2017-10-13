class Player {
    constructor (name = Date.now()) {
        this.name = name;
        this.isLandloard = false;
        this.isAI = false;
        this.cardList = [];
        this.isReady = false;
        this.isLeave = false;
        this.score = 0;

        Object.defineProperty(this, 'score', {
            get: () => {
                console.log(this.name, 'get score', this.score);
                return this.score;
            },
            set: (val) => {
                console.log(this.name, 'set score', this.score);
                this.score = val;
            }
        })
    }
};

module.exports = Player;