const express = require('express')

const BackgroundCtrl = require('./controllers/backgroundgen')

const app = express()
const port = 4001

app.use(express.json())

app.get('/api/backgrounds', BackgroundCtrl.read)
app.post('/api/backgrounds', BackgroundCtrl.create)
app.put('/api/backgrounds/:id', BackgroundCtrl.update)
app.delete('/api/backgrounds/:id', BackgroundCtrl.delete)

app.listen(port, () => {
    console.log('listening on :', port)
})