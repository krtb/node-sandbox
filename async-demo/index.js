console.log('BEFORE');

//promise based approach
getUser(1)
    .then(user => getRepos(user.gitHubUserName))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits) )
    .catch(err => console.logI('Error', err.message)) 

//async and await: with this can write async code that looks sync
const user = await getUser(1); // anytime you're running a function that returns a promise, can await the result
const repos = await getRepos(user.gitHubUserName);
const commits = await getCommits(repos[0]);
console.log(commits);



function getRepos(user) {
    getRepos(user.gitHubUserName, getCommits)
}

console.log('AFTER');

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

