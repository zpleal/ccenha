const express = require('express')
const app = express()
const port = 3000

const Queue = require('lib/Queue.js');


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`CCenha listening on port ${port}!`))
