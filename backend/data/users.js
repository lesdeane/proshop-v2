import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('PSleise123', 10),
    isAdmin: true,
  },
  {
    name: 'Johnny Doe',
    email: 'johnny@email.com',
    password: bcrypt.hashSync('PSleise123', 10),
    isAdmin: false,
  },
  {
    name: 'Mary Sue',
    email: 'mary@email.com',
    password: bcrypt.hashSync('PSleise123', 10),
    isAdmin: false,
  },
]

export default users