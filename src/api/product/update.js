const ProductModel = require('../../models/product')
const toSlug = require('../../utils/toSlug')

const update = (req, res, next) => {
  const { _id } = req.params
  const data = req.body
  data.slug = toSlug(data.name)

  ProductModel.findOne({
    slug: data.slug,
    _id: { $ne: _id }
  })
    .then(check => {
      if (!check) {
        ProductModel.findOneAndUpdate({
          _id
        }, data, { new: true })
          .then((resData) => {
            if (resData) {
              res.json({
                status: true,
                message: 'Cập nhật thành công!',
                newProduct: resData
              })
            } else {
              req.err = 'Lỗi cập nhật!'
              return next('last')
            }
          })
          .catch(err => {
            next('last')
          })
      } else {
        res.json({
          status: false,
          message: 'Chuyên ngành đã tồn tại'
        })
      }
    })
}

module.exports = update