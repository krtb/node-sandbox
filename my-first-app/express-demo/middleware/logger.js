function log(req, res, next) {
    console.log('...Logging');
    //call next to pass control to the next middleware function
    //if not, because not terminating the req/res cycle, request would end up hanging
    next();
};

module.exports = log