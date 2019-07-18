console.log('BEFORE');

getUser(1, getRepos)

console.log('AFTER');

function getRepos(user) {
    getRepos(user.gitHubUserName, getCommits)
}

function getCommits(repos) {
    getCommits(repo, displayCommits) //not calling func, but a reference to it
}

function displayCommits(commits) {
    console.log(commits);
}

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
