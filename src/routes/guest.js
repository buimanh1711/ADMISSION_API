const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')

const create = require('../api/guest/create')
const getAll = require('../api/guest/getAll')
const getOne = require('../api/guest/getOne')
const update = require('../api/guest/update')
const remove = require('../api/guest/delete')
const addProduct = require('../api/guest/addProduct')

router.delete('/:_id', auth, remove)
router.put('/:_id/bought', addProduct)
router.put('/:_id', auth, update)
router.get('/:_id', getOne)
router.post('/', create)
router.get('/', getAll)

module.exports = router
