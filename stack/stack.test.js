const { Stack } = require('./stack');

let stack;

beforeEach(()=> {
    return (function() {
        stack = Object.assign({}, Stack);
        stack.push(3);    
    })();
});

test('stack push', () => {
    expect(stack.push(3)).toBe(3);
});

test('stack pop', () => {
    expect(stack.pop()).toBe(3);
});

test('stack top', () => {
    expect(stack.top()).toBe(3);
});

test('stack empty', () => {
    expect(stack.empty()).not.toBeNull();
    stack.pop();
    expect(stack.empty()).toBeNull();
});