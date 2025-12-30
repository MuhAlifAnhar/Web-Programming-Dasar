const animes = [
    {
        name: 'Naruto',
        genre: 'Shounen',
        episodes: 700
    },
    {
        name: 'One Piece',
        genre: 'Shounen',
        episodes: 1000
    },
    {
        name: 'Bleach',
        genre: 'Shounen',
        episodes: 500
    }
];

const animeList = animes.map(function(anime){
    return anime.name
})

console.log(animeList);