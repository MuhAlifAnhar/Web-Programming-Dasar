function hasilnyaAdalahFunction() {
    const rand = Math.random();
    if(rand > 0.10){
        return function() {
            console.log('Selamat, angkanya lebih besar');
        }
    } else {
        return function() {
            console.log('Maaf, mungkin bisa coba lagi');
        };
    }
}

const result = hasilnyaAdalahFunction();
result();