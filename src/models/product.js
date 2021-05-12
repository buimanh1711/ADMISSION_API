const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema

const Product = new Schema({
  name: { type: String, maxLength: 255 },
  years: { type: Number, default: 0 },
  target: { type: Number, default: 0 },
  description: { type: String, default: 'Chưa cập nhật'},
  cert: { type: String, default: 'Chưa cập nhật'},
  block: { type: String, default: 'Chưa cập nhật'},
  sold: { type: Number, default: 0 },
  slug: { type: String, slug: "name" },
  text: { type: String, default: "" }
}, {
  timestamps: true
})

module.exports = mongoose.model('product', Product)