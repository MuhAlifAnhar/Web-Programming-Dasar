const kampus = {
    jurusan : {
        jurusan1 : 'Teknik Informatika',
        jurusan2 : 'Bisnis Digital'
    },
    akreditas : 'A',
    size: ['S', 'M', 'L', 'XL', 'XXL']
}

kampus.jurusan.jurusan1 = 'Teknik Komputer';

kampus.size[1] = 'Medium';

kampus.rektor = 'Ridwan';

console.log(kampus.jurusan.jurusan1);

console.log(kampus.rektor);

console.log(kampus.size[1]);