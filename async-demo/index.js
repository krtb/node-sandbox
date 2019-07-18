console.log('BEFORE');

const user = getUser(1)

console.log(user)

console.log('AFTER');

function getUser(id) {
    //in this func, need to return a user object
    setTimeout(() => {
        console.log('Reaing a user from a database....')
        return {
            id: id,
            gitHubUserName: "krtb"
        }
    }, 2000)

    return 1
}
