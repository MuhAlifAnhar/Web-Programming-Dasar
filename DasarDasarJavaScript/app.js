const user = {
    name: 'User',
    email: 'User@gmail.com'
}

const userDb = {
    ...user,
    role: 'Admin'
}

console.log(userDb);