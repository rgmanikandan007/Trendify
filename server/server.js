const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/db')

dotenv.config({path:'config/config.env'})

connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`My Server listening to the port: ${process.env.PORT} in ${process.env.NODE_ENV} `)
})