const p = new Promise((resolve, reject) => {
    //kick off async work
    //...
    setTimeout(()=>{
        //resolve(1); //using resolve to send these values to the consumers of this promise object
        reject(new Error('message')) // best practice to send back an error object, instead of a string. If erroring, send to consumer
    }, 2000)
}) // constructor func has 2 params 

p.then(result => console.log('Result', result))
.catch(err => console.log('Error', err.message))