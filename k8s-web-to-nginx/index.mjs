import express from 'express'
import os from 'os'
import fetch from 'node-fetch'
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    console.log(`${os.hostname}`);
    res.send(`Hello from ${os.hostname()}`)
  })

  app.get('/ngnix', async (req, res) => {
    const url = "http://nginx"
    const response = await fetch(url)
    const body= await response.text()

    res.send(body)
  })

  app.listen(PORT, () => {
    console.log(`Server running`);
  });