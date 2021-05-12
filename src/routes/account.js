const express = require('express')
const create = require('../api/account/create')
const getOne = require('../api/account/getOne')
const auth = require('../middlewares/auth')
const remove = require('../api/account/delete')
const getAll = require('../api/account/getAll')
const update = require('../api/account/update')
const router = express.Router()

router.delete('/:_id', auth, remove)
router.put('/:_id', auth, update)
router.post('/', auth, create)
router.get('/:_id', auth, getOne)
router.get('/', getAll)
module.exports = router