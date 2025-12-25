const PASSWORD = 'Pass123';

let guess = prompt('Enter the password');
while (guess !== PASSWORD) {
    guess = prompt('password yang kamu masukkan salah, silahkan coba lagi');
}

alert('Selamat kamu berhasil login');