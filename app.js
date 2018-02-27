const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//Express init
app.use(express.static('public'))
app.set('view engine', 'pug')

//Routes
app.get('/', (req, res) => res.render('index'))

//Server start
app.listen(port, () =>
	console.log('Server has started on port', port))