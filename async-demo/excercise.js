// turn into async and await functions
// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//         getTopMovies((movies) => {
//             console.log('Top movies: ', movies);
//             sendEmail(customer.email, movies, () => {
//                 console.log('Email sent...')
//             });
//         });
//     }
// });

async function getCustomer() {
    try{
        const customer = await getCustomer(1);
        const movies = await getTopMovies(customer);
        const sendEmail = await sendEmail();
    } catch(err) {
        console.log('Error', err.message)
    }
}

function getCustomer(id) {
    //func that has two args, RESOLVE/REJECT, is called: EXECUTOR
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Mosh Hamedani',
                isGold: true,
                email: 'email'
            });
        }, 4000);
    })
}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    })
}

function sendEmail(email, movies) {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve();
    }, 4000);
    })
}