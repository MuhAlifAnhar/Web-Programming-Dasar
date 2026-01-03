const requestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Error: Connection Timeout');
        } else {
            success(`Success: ${url} (${delay}ms)`);
        }
    }, delay)
}

const requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 3000) {
                reject('Error: Connection Timeout');
            } else {
                resolve(`Success: ${url} (${delay}ms)`);
            }
        }, delay);
    });
};

requestPromise('google.com')
    .then((result) => {
        console.log('page 1');
        console.log(result);
        return requestPromise('google.com');
    })
    .then(() => {
        console.log('page 2');
        return requestPromise('google.com');
    })
    .then(() => {
        console.log('page 3');
        return requestPromise('google.com');
    })
    .catch((error) => {
        console.log(error);
    })