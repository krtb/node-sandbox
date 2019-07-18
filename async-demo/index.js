console.log('BEFORE');

getUser(1, getReposgit)

console.log('AFTER');

function getRepos(user) {
    getRepos(user.gitHubUserName, getCommits)
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id) {
    return new Promise((resolve, reject)=>{
        //kickoff async work
        setTimeout(() => {
            console.log('Reading a user from a database....')
            resolve({ id: id, gitHubUserName: "krtb" }) //call it resolve to return object to user
        }, 2000)
    })
}

function getRepos(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Grabbing Repos....')
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000)
    })
}

function getCommits(repos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling github API...')
            resolve(['commit'])
        }, 2000)
    })}

