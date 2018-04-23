var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Wei'
    };
    setTimeout(()=> {
        callback(user);
    }, 3000);
}

// call the callback passing it as an argument
getUser(31, (user) => {
    console.log(user);
});