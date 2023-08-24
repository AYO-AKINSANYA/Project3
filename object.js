const user = {
    fullName: "Umar David",
    email: "bello@gmail.com",
    age: 35,
    phoneNumber: [
        {
            home: '02147845564',
            mobile: '87455625478'
        }
    ],
    children: ['Omoniyi', 'Ayo', 'Emmanuel'],
    newBirth: function () {
        return `${this.fullName} birthed a new child`
    }
}

console.log(user)
console.log(user.fullName)
console.log(user.age)
console.log(user.newBirth())


