// RUNNING PARALLEL PROMISES

// simulation for calling facebook api
const p1 = new Promise((resolve) => {
    setTimeout(()=>{
        console.log('Async operation 1...');
        resolve(1)
    }, 2000)
})

// simulation for calling a second api, let's say instagram
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2)
    }, 2000)
})

// kick off both, and when they comnplete, want to do something after

// .all is another method that belongs to promise class, instead of promise object
Promise.all([p1,p2]) // give it an array of promises, returns a new promise when all promises in this array resolved
.then(result => console.log(result))

// still don't have concurrency, a single thread is kicking off both ALMOST at the same time