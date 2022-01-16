const express = require('express')

const app = express()

const baseDir = `${__dirname}/build/`

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

app.use(express.static(`${baseDir}`))

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

const port = process.env.PORT || '3000'

app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))