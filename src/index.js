require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')





const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/students', require('./routes/student.routes'))


const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})