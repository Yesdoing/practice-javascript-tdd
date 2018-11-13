const lotto = (function() {
    const numbers = Symbol('numbers');
    return ({
    [numbers]: [],
    inputNumbers(inputNumbers) {
        this[numbers] = inputNumbers;
    },
    create: function (inputNumbers) {
        const lotto = Object.assign({}, this);
        lotto.inputNumbers(inputNumbers);
        return lotto;
    },
    showNumber() {
        return this[numbers];
    }
});
})();

const ticket = ( function () {
    const lottos = Symbol('lottos');
    return ({
    [lottos]: [],
    buyTicket(money) {
        if(money < 1000) {
            throw Error('1000원 이상의 금액만 가능합니다.');
        }
        const count = money / 1000;
        for(let i=0; i<count; i++) {
            this[lottos].push(lotto.create(this.createRandomNumbers()));
        }
    },
    createRandomNumbers() {
        const numbers = [];
        for(let i=1; i<=45; i++) {
            numbers.push(i);
        }
        numbers.sort(()=> Math.random() - 0.5);
        return numbers.slice(0,6);
    },
    showTickets() {
        console.log(this[lottos].map( a => a.showNumber() ));
        return this[lottos];
    }
});
})();

module.exports = { lotto, ticket };