let express = require('express')
let dotenv = require('dotenv')
let secureEnv = require('secure-env');

global.env = secureEnv({secret:'noobiedoobiedoo'});

const app = express()
dotenv.config()

app.get('/', (req, res) => {
    res.send("hi")
})

console.log(global.env.name)

app.listen(5555, () => {
    console.log("Server started running")
})