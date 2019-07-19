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