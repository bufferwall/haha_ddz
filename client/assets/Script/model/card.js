class Card {
    constructor (obj = {icon, type, val}) {
        this.icon = obj.icon;
        this.type = obj.type;
        this.val =  obj.val;
    }
};

module.exports = Card;