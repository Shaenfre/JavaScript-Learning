// Promise.resolve('hello')
//     .then(result => console.log(result))

// const p = new Promise((resolve, reject) => resolve('hello'))
//     .then(result => console.log(result));

// const oops = new Promise((resolve, reject) => reject(new Error('failure')))
// oops.catch(err => console.log(err.message))
// oops.catch(err => console.log(err.message))

const p = new Promise((resolve, reject) => reject(new Error('failure')))
// .catch(err => console.log(err))
p.then(err => console.log(err.message))
    // .catch(err => console.log(err.message))