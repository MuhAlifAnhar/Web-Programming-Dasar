const animesList = [
    {
        name: "Naruto",
        episode: 700,
        genre: "Action",
        rating: 7.3
    },
    {
        name: "Naruto Shippuden",
        episode: 700,
        genre: "Action",
        rating: 9.3
    },
    {
        name: "Shippuden",
        episode: 700,
        genre: "Action",
        rating: 8.3
    }
];

const bestAnime = animesList.reduce((bestAnime, currentAnime) => {
    if (currentAnime.rating > bestAnime.rating) {
        return currentAnime;
    }
    return bestAnime;
})

console.log(bestAnime);