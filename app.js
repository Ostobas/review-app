const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Landing page'))

app.listen(port, () =>
	console.log('Server has started on port', port))