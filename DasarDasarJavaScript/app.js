const nama = ['Alif', 'Azizi', 'Putra', 'Anhar', 'Rahman', 'Maulana', 'Muh.'];

const pemenang = (gold, silver, bronze, ...sisa) => {
    console.log(`Mendali emas diraih: ${gold}`);
    console.log(`Mendali perak diraih: ${silver}`);
    console.log(`Mendali perunggu diraih: ${bronze}`);
    console.log(`Peserta lainnya: ${sisa}`);
}

console.log(pemenang(...nama));