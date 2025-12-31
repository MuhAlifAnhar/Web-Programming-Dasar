const user = {
    name: 'Alif',
    email: 'alif@gmail.com'
};

const {name: nama, email, phone = '082187726505'} = user;

console.log(nama);
console.log(email);
console.log(phone);