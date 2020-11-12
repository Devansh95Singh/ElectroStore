import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password : bcrypt.hashSync('123456', 10) ,
        isAdmin :true
    },
    {
        name: 'Dev singh',
        email: 'dev@example.com',
        password :  bcrypt.hashSync('123456', 10) 
    },
    {
        name: 'Jacob',
        email: 'jacob@example.com',
        password :  bcrypt.hashSync('123456', 10) ,
    }

]
export default users