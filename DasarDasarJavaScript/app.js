const students = {
    Alif: 22,
    Azizi: 21,
    Zara: 22
};

for (let student in students) {
    console.log(`${student} is ${students[student]} years old`);
}