const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is the resolved data');
    }, 1500)
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});