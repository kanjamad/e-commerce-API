const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: String,
    image1: String,
    image2: String,
    image3: String,
    price: String || Number,
    description: Object,
    size: Object || Array,
    Category_id: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    add_date: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

