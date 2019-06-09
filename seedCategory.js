const db = require('./models');


const categoryData = [
    {
        type: "men",
    },
    { 
        type: "women",
    }, 
    {
        type: "kids"
    },

]




// --------------------- categoryData -----------------------
db.Category.deleteMany((err, deletedCategory) => {
    if (err) console.log(err);
    console.log('Deleted categorys successfully');

    // Create New Categorys
db.Category.create(categoryData, (err, newCategorys) => {
    if (err) console.log(err);
    console.log(newCategorys);
    console.log(`Created ${newCategorys.lenght} new category successfully`);
    process.exit();
});
});

