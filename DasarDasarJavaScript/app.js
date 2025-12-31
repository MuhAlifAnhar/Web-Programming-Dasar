const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    panggilNanti: function () {
        setTimeout(() => {
            console.log(this.firstName);
        }, 2000);
    }
};

console.log(`${person.fullName()} ${person.panggilNanti()}`);