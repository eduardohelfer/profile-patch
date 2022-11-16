const express = require('express')

const port = 9100

const app = express()


app.get('/profile', (peticion, respuesta) => {
  respuesta.json({
    name: 'Eduardo Helfer',
    age: 49,
    country: 'Peru'
  })
})

app.post('/ejemplo', (peticion, respuesta) => {
  respuesta.json([
    'FESTO', 'HONEYWELL', 'ALLEN BRADLEY'
  ])
})

app.patch('/ejemplo', (peticion, respuesta) => {
  respuesta.json([
    'programming languages',
    'database design',
    'playing musical instruments'
  ])
})

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})
