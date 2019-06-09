const db = require('./models');

const ordersData = [
    {
        product_id:"5cfcd469766f103f8ae01210",
        price: 13.00,
        quantiy: "1",
        user_id: "5cfcd24c5dbc803e7997cd70",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcd1af1fcd993e2dfdd3ba",
        price: 27.00,
        quantiy: "3",
        user_id: "5cfcd24c5dbc803e7997cd71",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcd469766f103f8ae01211",
        price: 15.00,
        quantiy: "1",
        user_id: "5cfcd24c5dbc803e7997cd72",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcd469766f103f8ae01212",
        price: 42.00,
        quantiy: "2",
        user_id: "5cfcd24c5dbc803e7997cd73",
        address: "",
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcd469766f103f8ae01213",
        price: 19.00,
        quantiy: "1",
        user_id: "5cfcd24c5dbc803e7997cd74",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcd469766f103f8ae01214",
        price: 30.00,
        quantiy: "3",
        user_id: "5cfcd24c5dbc803e7997cd75",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcd469766f103f8ae01215",
        price: 17.00,
        quantiy: "1",
        user_id: "5cfcd24c5dbc803e7997cd76",
        address: {
            street: "Norberto Crossing",
            suite: "Apt. 950",
            city: "South Christy",
            zipcode: "23505-1337",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcd469766f103f8ae01216",
        price: 38.00,
        quantiy: "2",
        user_id: "5cfcd24c5dbc803e7997cd77",
        address: {
            street: "Rex Trail",
            suite: "Suite 280",
            city: "Howemouth",
            zipcode: "58804-1099",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
]





// --------------------- ordersData -----------------------
db.Order.deleteMany((err, deletedOrders) => {
    if (err) console.log(err);
    console.log('Deleted orders successfully');

    // Create New Orders
db.Order.create(ordersData, (err, newOrders) => {
    if (err) console.log(err);
    console.log(newOrders);
    console.log(`Created ${newOrders.length} new orders successfully`);
    process.exit();
});
});

