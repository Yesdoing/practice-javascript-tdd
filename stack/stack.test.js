const { Stack } = require('./stack');

let stack;

beforeAll(()=> {
    return (function() {
        stack = Object.assign({}, Stack);
        stack.push(3);    
    })();
});

test('stack push', () => {
    expect(stack.push(3)).toBe(2);
});

test('stack pop', () => {
    expect(stack.pop()).toBe(3);
});

test('stack top', () => {
    expect(stack.top()).toBe(3);
    stack.pop();
    expect(stack.top()).toBe(-1);
});

test('stack empty', () => {
    expect(stack.empty()).toBeTruthy();
    stack.push(3);
    expect(stack.empty()).toBeFalsy();
});