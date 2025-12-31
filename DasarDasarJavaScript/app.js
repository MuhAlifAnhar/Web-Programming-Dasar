const animes = [
    {
        name: 'Naruto',
        genre: 'Shonen'
    },
    {
        name: 'One Piece',
        genre: 'Shonen'
    },
    {
        name: 'Bleach',
        genre: 'Shonen'
    },
    {
        name: 'Naruto Shippuden',
        genre: 'Shonen'
    }
]

const anime = animes.map(({name, genre}) => {
    return `${name} ${genre}`;
})

console.log(anime);