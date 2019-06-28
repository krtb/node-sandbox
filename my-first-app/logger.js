// not a real site
var url = 'https://mylogger.io/log'

function log(message) {
    //send an http request
    console.log(message)
}

//both variable and function are private, scoped to this module and not visible from the outside
// simply adding a method the export object, found when yo console.log(module)
module.exports= log;
// can also change the name of the variable that we want to export outside as well
// module.export.endPoint = url;