var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Please enter proper number');
            }
        }, 1500);
    })
}

asyncAdd(100, 7).then((success)=> {
    console.log('Result: ', success);
    return asyncAdd(success, 5);
}, (fail)=> {
    console.log('Fail: ', fail)
}).then((success) => {
    console.log('Promise Chaining: ', success);
}, (fail) => {
    console.log('Chaning fail: ', fail);
});



var somePromise = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve('Hey. It workss!');
    // reject('Unable to fullfill promise');
   }, 2500);
});

somePromise.then((successMessage) => {
    console.log('Success: ', successMessage);
}, (errorMessage) => {
    console.log('Fail: ', errorMessage)
});