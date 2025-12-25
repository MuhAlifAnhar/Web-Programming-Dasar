let studentRow = [
    ['alif', 'muh', 'anhar'],
    ['azizi', 'shafa', 'asadel'],
    ['adishty', 'zara', 'sundari']
];

for (let i = 0; i<=studentRow.length; i++){
    console.log(`Seat Row #${i+1}`);
    for(let j=0; j<studentRow[i].length; j++){
        console.log(`${j+1}. ${studentRow[i][j]}`);
    }
}