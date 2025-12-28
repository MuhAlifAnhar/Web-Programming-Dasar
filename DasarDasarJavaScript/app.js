const saya = {
    nama: 'Alif',
    hobi: 'Ngoding',
    kenalan: function() {
        return `Saya ${this.nama}. Hobi saya ${this.hobi}`
    }
}

saya.nama = 'Muh. Alif Anhar';

console.log(saya.kenalan());