const path = require('path')
const express = require('express')

const app = express()

// Define path for Express config
let publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates')

// Setup handlebars engine and views locations
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Setup static directory to server
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Gists App',
    desc:'it is gist app'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    content:'This is some content coming form app.js'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    message:'Help is on its way, Please wait...'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    Location: 'Bangalore',
    temperature: '30 deg',
    chancesOfRain: '50%'
  })
})

app.listen(3030, () => {
  console.log('server is up on port 3030.')
})