const p = Promise.reject(new Error('reason for rejection'));
p.catch(err => console.log(err) )



//ERROR
//using native error objectg will include the callstack