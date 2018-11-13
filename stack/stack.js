console.log('stack');

const Stack = (function() {
    const Private = Symbol();
    return {
        [Private]: [],
        push: function(number) {
            this[Private].push(number);
            return this[Private].length;
        }
    }
})();

module.exports = { Stack };