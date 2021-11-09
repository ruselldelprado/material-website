const express = require('express');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ msg: 'test success' })
})


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}...`)
})
