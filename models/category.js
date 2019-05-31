const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    men: {type: String},
    women: {type: String},
    kids: {type: String}
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;