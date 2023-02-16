const express = require('express')
const router =express.Router()
const carsController = require('../controller/livraria.controller.js')

router.get('/', carsController.getALL)
router.get('/:id', carsController.getById)
router.post('/',carsController.create)
router.put('/:id', carsController.update)
router.delete('/:id', carsController.delete)


module.exports = router