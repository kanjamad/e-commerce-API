const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    price: String || Number,
    quantiy: Number,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    address: Object,
    order_date: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
