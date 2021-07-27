import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Ivanov Ivan',
        email: 'ivanov@gmail.com',
        password: bcrypt.hashSync('123', 10),
        isAdmin: true
    },
    {
        name: 'Petya Petrov',
        email: 'petrov@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'Vasiliy Vasilyevich',
        email: 'vasilyevich@gmail.com',
        password: bcrypt.hashSync('123', 10),
    }
]

export default users