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

animes.forEach(function(anime) {
    console.log(`${anime.name} - ${anime.genre} - ${anime.episodes}`);
})