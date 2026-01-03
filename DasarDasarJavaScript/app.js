class Peliharaan {
    constructor(nama, age) {
        this.nama = nama;
        this.age = age;
    }

    makan() {
        return `${this.nama} sedang makan`;
    }
}

class Kucing extends Peliharaan {
    constructor(nama, age, nyawa) {
        super(nama, age);
        this.nyawa = nyawa;
    }
    meong() {
        return `meong meong meong`;
    }
}

class Ajing extends Peliharaan {
    gong() {
        return `gong gong gong`;
    }
}

const kucing = new Kucing ('Meong', 2);

const anjing = new Ajing ('Anjing', 3);

console.log(kucing.makan());

console.log(anjing.makan());

console.log(kucing.meong());

console.log(anjing.gong());