const express = require('express')
const app = express()
const port = 4000

app.get('/flashcard', (req, res) => {
  res.send([
    {title: "Explain what the waterfall method is"},
    {title: "What is active project management"},
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})