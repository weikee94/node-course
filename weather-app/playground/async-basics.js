console.log('Staring App!');

setTimeout(() => {
    console.log('2 Seconds Later inside callback');
},2000);

setTimeout(()=> {
    console.log("Another time out!");
}, 0);

console.log('Finishing Up!');