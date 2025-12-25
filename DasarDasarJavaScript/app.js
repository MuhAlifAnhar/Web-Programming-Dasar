let str = 'abcd';

for (let i = 0; i<=4; i++){
    console.log(`${i+1}. Soal Nomor:`);
    for (let j = 0; j<str.length; j++){
        console.log(`     ${str[j]}. Pilihan Jawaban`);
    }
}