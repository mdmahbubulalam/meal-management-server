const express = require('express')
const app = express()
const dotenv = require('dotenv');

const connectToDB = require('./config/connectToDB');
const signUpRoute = require('./routes/auth/signUpRoute');
const signInRoute = require('./routes/auth/signInRoute');
const userRoute = require('./routes/userRoute');
app.use(express.json());

dotenv.config();
app.use('/api/auth', signUpRoute)
app.use('/api/auth', signInRoute);
app.use('/api/users', userRoute);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectToDB();
})