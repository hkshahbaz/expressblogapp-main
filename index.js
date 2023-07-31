const express = require('express')
var exphbs  = require('express-handlebars');
const path = require('path')
const app = express()
const port = 3000


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// serve public static folder in express
app.use(express.static(path.join(__dirname, 'static')))

// using blog router
app.use('/', require(path.join(__dirname, 'routes/blog.js')))



app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
})