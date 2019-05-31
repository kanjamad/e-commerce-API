const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: String,
    images: Array,
    price: String,
    description: Object,
    size: Object,
    category_id: {
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

