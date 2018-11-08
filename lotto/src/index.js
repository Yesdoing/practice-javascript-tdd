var readline = require('readline');
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = {
    value : 0,
    read: r.question('구입 금액을 입력해 주세요.', answer => {
        this.value = answer;
        r.close();
    })
}
