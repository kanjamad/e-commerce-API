const db = require('./models');

const usersData = [
    {
    fullName: "Leanne Graham",
    email: "Sincere@april.biz",
    password:"1234",
    gender: "Female",
    joinDate:"1/22/2019",default:Date.now, 
},
    {
    fullName: "Ervin Howell",
    email: "Shanna@melissa.tv",
    password:"1234",
    gender: "Male",
    joinDate:"9/6/2018",default:Date.now,
    
},

    {
    fullName: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    password:"1234",
    gender: "Female",
    joinDate:"1/2/2019",default:Date.now,
    
},
    {
    fullName: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    password:"1234",
    gender: "Female",
    joinDate:"3/4/2019",default:Date.now,
    
},
    {
    
    fullName: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    password:"1234",
    gender: "Female",
    joinDate:"1/27/2019",default:Date.now,
    
},
    {
    fullName: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
    password:"1234",
    gender: "Female",
    joinDate:"5/2/2017",default:Date.now,
    
},
    {
    fullName: "Kurtis Weissnat",
    email: "Telly.Hoeger@billy.biz",
    password:"1234",
    gender: "Male",
    joinDate:"11/2/2018",default:Date.now,
    
},
    {
    fullName: "Nicholas Runolfsdottir V",
    email: "Sherwood@rosamond.me",
    password:"1234",
    gender: "Male",
    joinDate:"12/2/2018",default:Date.now,
    
},
    {
    fullName: "Glenna Reichert",
    email: "Chaim_McDermott@dana.io",
    password:"1234",
    gender: "Female",
    joinDate:"11/2/2017",default:Date.now,
},
    {
    fullName: "Clementina DuBuque",
    email: "Rey.Padberg@karina.biz",
    password:"1234",
    gender: "Female",
    joinDate:"8/2/2018",default:Date.now,
    
},
]


// --------------------- usersData -----------------------
db.User.deleteMany((err, deletedUsers) => {
    if (err) console.log(err);
    console.log('Deleted users successfully');

    //Create New Users
db.User.create(usersData, (err, newUsers) => {
    if (err) console.log(err);
    console.log(newUsers);
    console.log(`Created ${newUsers.length} new users successfully`);
    process.exit();
}); 
});

