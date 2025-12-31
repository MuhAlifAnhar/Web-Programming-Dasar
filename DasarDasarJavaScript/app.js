const animeList = [
    {
        id: 1,
        judul: "Naruto",
        genre: "Action",
        rating: 8.7
    },
    {
        id: 2,
        judul: "One Piece",
        genre: "Adventure",
        rating: 9.0
    },
    {
        id: 3,
        judul: "Bleach",
        genre: "Action",
        rating: 8.9
    }
];

const animeFavorit = animeList.every((anime) => {
    return anime.rating >= 8;
})

console.log(animeFavorit);