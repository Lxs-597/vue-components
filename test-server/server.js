const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({
  origin: ['http://localhost:8080'],
  methods: ['GET','POST'],
  alloweHeaders:['X-Requested-With', 'Content-Type', 'Authorization']
}))

app.use(router)

router.get('/test/testget', (req, res) => {
  res.json({msg: 'test get success'})
})

router.post('/test/testpost', (req, res) => {
  const data = req.body

  res.json(data)
})

module.exports = app.listen(9000, err => {
  if (err) {
    return console.log(err)
  }

  console.log('server started at port 9000')
})