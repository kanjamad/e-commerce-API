const db = require('./models');

const ordersData = [
    {
        product_id:"5cfcdc3dbc993245fbb3dc80",
        price: 13.00,
        quantiy: "1",
        user_id: "5cfcdd178385eb4653670d40",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcdc3dbc993245fbb3dc81",
        price: 27.00,
        quantiy: "3",
        user_id: "5cfcdd178385eb4653670d3f",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcdc3dbc993245fbb3dc82",
        price: 15.00,
        quantiy: "1",
        user_id: "5cfcdd178385eb4653670d3e",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcdc3dbc993245fbb3dc83",
        price: 42.00,
        quantiy: "2",
        user_id: "5cfcdd178385eb4653670d3d",
        address: "",
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcdc3dbc993245fbb3dc84",
        price: 19.00,
        quantiy: "1",
        user_id: "5cfcdd178385eb4653670d3c",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcdc3dbc993245fbb3dc85",
        price: 30.00,
        quantiy: "3",
        user_id: "5cfcdd178385eb4653670d3b",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcdc3dbc993245fbb3dc86",
        price: 17.00,
        quantiy: "1",
        user_id: "5cfcdd178385eb4653670d3a",
        address: {
            street: "Norberto Crossing",
            suite: "Apt. 950",
            city: "South Christy",
            zipcode: "23505-1337",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cfcdc3dbc993245fbb3dc87",
        price: 38.00,
        quantiy: "2",
        user_id: "5cfcdd178385eb4653670d39",
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

