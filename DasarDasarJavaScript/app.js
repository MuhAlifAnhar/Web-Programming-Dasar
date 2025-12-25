const students = {
    Alif: 22,
    Azizi: 21,
    Zara: 22
};

let total = 0;
let umur = Object.values(students);

console.log(umur);

for (let umures of umur) {
    total += umures;
    console.log(total);
}

console.log(total / umur.length);

console.log(65 / 3)