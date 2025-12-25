const kampus = [
    {
        nama : 'Universitas Negeri Makassar',
        singkatan : 'UNM'
    },
    {
        nama : 'Universitas Hasanuddin',
        singkatan : 'UNHAS'
    },
    {
        nama : 'Universitas Dipa Makassar',
        singkatan : 'UNDIPA'
    }
];

kampus[0].singkatan = 'UNEM';

kampus[3].nama = 'Universitas Musim Indonesia';

kampus[3].singkatan = 'UMI';

console.log(kampus[3].singkatan);

console.log(kampus[0].singkatan);