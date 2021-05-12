const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema

const Guest = new Schema({
  fullName: { type: String, maxLength: 128 },
  cmnd: { type: String },
  school: { type: Object, default: {} },
  address: { type: String, default: 'Chưa cập nhật' },
  email: { type: String, default: 'Chưa cập nhật' },
  phone: { type: String, default: '' },
  sex: { type: String, default: ''},
  birth: { type: Date, default: null },
  bought: [{ product: { type: Schema.Types.ObjectId, ref: 'product' }, quantity: { type: Number, default: 1 } }] || [],
  slug: { type: String, slug: "fullName" },
  text: { type: String, default: ""}
}, {
  timestamps: true
})

module.exports = mongoose.model('guest', Guest)