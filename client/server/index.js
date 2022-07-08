console.log('PRJ');
const express = require('express')
const cors = require('cors')

const app = express();
app.use(express.json)
app.use(cors())

app.get('status', (req, res) => {
    res.send({
        message: 'Student Tracker'
    })
})

app.listen(process.env.PORT || 8081)