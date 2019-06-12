const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define path for Express config
let publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views locations
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to server
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Gists App',
    desc:'it is gist app',
    dev:"sachin"
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    content:'This is some content coming form app.js',
    dev:"sachin"
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message:'Help is on its way, Please wait...',
    dev:"sachin"
  })
})

app.get('/weather', (req, res) => {
  res.send({
    Location: 'Bangalore',
    temperature: '30 deg',
    chancesOfRain: '50%'
  })
})

app.get('/help/*',(req,res)=>{
  res.render('404',{
    title:'4.0.4',
    message:'Help Article not found!!!',
    dev:'Sachin'
  })
})

app.get('*',(req,res)=>{
  res.render('404',{
    title:'4.0.4',
    message:'Please check the url',
    dev:'Sachin'
  })
})

app.listen(3030, () => {
  console.log('server is up on port 3030.')
})