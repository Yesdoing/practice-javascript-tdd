const { lotto, ticket } = require('../lotto');

// test('lotto create', () => {
//     expect(lotto.create('1 2 3 4 5 6')).toEqual([1,2,3,4,5,6]);
// });

// test('save lotto numbers', () => {
//     expect(lotto.numbers).toEqual([1,2,3,4,5,6]);
// });

test('create tikect', () => {
//    ticket.setLotto(lotto.create('1 2 3 4 5 6'));
 //   expect(ticket.getLotto()).toEqual([lotto.numbers]);
});


test('random numbers', () => {
    const testNumbers = [];
    for(let i=1; i<=45; i++) testNumbers.push(i);
    const randomNum = ticket.createRandomNumbers();
    expect(randomNum).not.toBe(testNumbers);
});

test('buy ticket', () => {
    ticket.buyTicket(5000);
    expect(ticket.showTickets().length).toBe(5);
});