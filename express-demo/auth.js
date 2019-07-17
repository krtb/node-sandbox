function auth(req, res, next) {
    //all middleware funcs expect thee 3 params
    console.log('...Authenticate'); // add to req.body
    next() //move on to the next func
}

module.exports = auth