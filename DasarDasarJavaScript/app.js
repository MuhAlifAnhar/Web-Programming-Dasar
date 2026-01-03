const hello = async () => {
    throw 'maaf g kenal';
}

hello().then((res) => {
    console.log('response', res);
}).catch((error) => {
    console.log('error', error);
})