var square = (x) => {
    var result = x * x;
    return result;
}

console.log(square(3));

var user = {
    name: 'Wei',
    sayHi: () => {
        // arrow function in es6 object cant use this keyword
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        // this is alternative way to use this keywords
        console.log(`Hi. I'm ${this.name}`);
    }
}

user.sayHi();
user.sayHiAlt();