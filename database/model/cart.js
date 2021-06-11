const mongoose = require('mongoose');

const Schema =  mongoose.Schema

var cartSchema = new Schema({
    prodId: { type: Number },
    img: { type: String },
    qnt: { type: Number },
    amt: { type: Number },
    name: { type: String },
    address: {type: String}
})
module.exports = mongoose.model('cart', cartSchema,'carts');
