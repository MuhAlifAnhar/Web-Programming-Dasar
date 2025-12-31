const animes = [
    {
        name: 'Naruto',
        episode: 700
    },
    {
        name: 'One Piece',
        episode: 1100
    },
    {
        name: 'Bleach',
        episode: 500
    }
];

const anime = animes.filter((anime) => {
    return anime.episode > 500
})

const anim = anime.map((a) => {
    return a.name
})

console.log(anim);