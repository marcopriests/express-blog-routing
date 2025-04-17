const express = require('express')
const router = express.Router()

//index
router.get('/', (req, res) => {
    res.send('Visualizzo tutti i post')
})

//show
router.get('/:id', (req, res) => {
    res.send('Dettaglio del post: ' + req.params.id)
})

//store
router.post('/', (req, res) => {
    res.send('Creo un nuovo post')
})

//update
router.put('/:id', (req, res) => {
    res.send('Modifico il post: ' + req.params.id)
})

//modify
router.patch('/:id', (req, res) => {
    res.send('Modifico il post: ' + req.params.id)
})

//destroy
router.delete('/:id', (req, res) => {
    res.send('Elimino il post: ' + req.params.id)
})


module.exports = router