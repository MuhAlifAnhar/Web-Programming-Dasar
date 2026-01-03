// const contohPromise = () => {
//     return new Promise ((resolve, reject) => {
//     // resolve(() => {
//     //     console.log('berhasil')
//     // });
//     reject(() => {
//         'gagal';
//     })
// })
// }

// const req = contohPromise();

// console.log(req);

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve() ;
        }, delay);
    });
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('black', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('black', 1000));
