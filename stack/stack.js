console.log('stack');

const Stack = (function() {
    const Private = Symbol();
    return {
        [Private]: [],
        push: function(number) {
            this[Private].push(number);
            return this[Private].length;
        },
        pop: function() {
            if(!this[Private].length) throw "Stack is empty";
            return this[Private].pop();
        },
        top: function() {
            if(!this[Private].length) return -1;
            return this[Private][this[Private].length-1];
        },
        empty: function() {
            if(!this[Private].length) return true;
            else return false;
        },
        size: function() {
            return this[Private].length;
        }
    }
})();

module.exports = { Stack };