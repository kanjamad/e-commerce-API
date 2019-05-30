const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    men: String,
    women: String,
    kids: String
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;