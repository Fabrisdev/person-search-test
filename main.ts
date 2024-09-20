import express from 'express'
import { findPersonByFullName } from './persons-manager'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.static('public'))

app.get('/api/persona', (req, res) => {
    const { fullname } = req.query
    if(typeof fullname !== 'string') return res.sendStatus(400)
    const personFound = findPersonByFullName(fullname)
    if(personFound) return res.json(personFound)
    res.sendStatus(404)
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado: http://localhost:${PORT}`)
})

