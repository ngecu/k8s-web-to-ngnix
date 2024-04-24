import express from 'express'
import os from 'os'

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    console.log(`${os.hostname}`);
    res.send(`Version 2 : Hello from ${os.hostname()}`)
  })

  app.listen(PORT, () => {
    console.log(`Server running`);
  });