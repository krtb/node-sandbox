console.log('BEFORE');

//when result of synchronous func ready, this func will be called with the result
getUser(1, function(user) {
    // console.log('User', user);
    getRepos(user.gitHubUserName, (repos)=>{
        console.log(repos);
    })
})

console.log('AFTER');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database....')
        callback({id: id,gitHubUserName: "krtb"})
    }, 2000)
}

function getRepos(username, callback) {
    setTimeout(()=>{
        console.log('Grabbing Repos....')
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000)
}
