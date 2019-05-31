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


const productsData = [
    {
        productName: "Tropical And Floral Print Asymmetrical Buttoned Dress",
        image1: "https://img.ltwebstatic.com/images2_pi/2019/05/10/1557473539482121880_thumbnail_600x799.jpg",
        image2: "https://img.ltwebstatic.com/images2_pi/2019/05/10/1557473540717283164_thumbnail_600x799.jpg",
        image3: "https://img.ltwebstatic.com/images2_pi/2019/05/10/15574735371531455904_thumbnail_600x799.jpg",
        image4: "https://img.ltwebstatic.com/images2_pi/2019/05/10/15574735393273404023_thumbnail_600x799.jpg",
        price: "US$19.00",
        description: { 
            Color:	"Multicolor",
            Details:	"Wrap, Zipper, Button Front",
            Dresses_Length:	"Short",
            Fabric:	"Fabric has no stretch",
            Composition: "100% Rayon",
            Neckline:	"V neck",
            Pattern_Type:	"Floral, Tropical",
            Season:	"Summer",
            Silhouette:	"Sheath",
            Sleeve_Length:	"Short Sleeve",
            Sleeve_Type:	"Puff Sleeve",
            Style:	"Boho",
            Type:	"Shirt",
            Waist_Line:	"High Waist",
            Clothing_Type:	"Slim",
            Hem_Shaped:	"Wrap",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: 8/10,
        },
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Double Breasted Belted Dresss",
        image1: "https://img.ltwebstatic.com/images2_pi/2019/04/23/155600470765187981_thumbnail_600x799.jpg",
        image2: "https://img.ltwebstatic.com/images2_pi/2019/04/23/1556004705617617302_thumbnail_600x799.jpg",
        image3: "https://img.ltwebstatic.com/images2_pi/2019/04/23/1556004706337689028_thumbnail_600x799.jpg",
        price: " US$17.00",
        description: {
            Belt:	"Yes",
            Color:	"White",
            Details:	"Belted, Button Front",
            Dresses_Length:	"Short",
            Fabric:	"Fabric has no stretch",
            Composition:	"100% Polyester",
            Neckline:	"Deep V Neck",
            Pattern_Type:	"Plain",
            Season:	"Summer",
            Silhouette:	"Sheath",
            Sleeve_Length:	"Cap Sleeve",
            Style:	"Casual",
            Waist_Line:	"High Waist",
            Clothing_Type:	"A",
            Material:	"Polyester",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: 8/10,
        },
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "SBetro Button Front Solid Belted Romper",
        image1: "https://img.ltwebstatic.com/images2_pi/2019/05/10/15574795951148201820_thumbnail_600x799.jpg",
        image2: "https://img.ltwebstatic.com/images2_pi/2019/05/10/15574795963146244937_thumbnail_600x799.jpg",
        image3: "https://img.ltwebstatic.com/images2_pi/2019/05/10/15574795953090240605_thumbnail_600x799.jpg",
        price: "US$20.00",
        description: {
            Belt: "Yes",
            Color: "Pink, Pastel",
            Details: "Belted, Button, Pocket",
            Fabric:	"Fabric has some stretch",
            Fit_Type: "Regular",
            Length:	"Short",
            Composition: "97% Polyester, 3% Spandex",
            Neckline:	"V neck",
            Pattern_Type:	"Plain",
            Season:	"Summer",
            Sleeve_Length: "Sleeveless",
            Style: "Casual",
            Type: "Tank",
            Waist_Type:	"High Waist",
            Hem_Shaped: "Wide Leg",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: 8/10,
        },
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Scallop Edge Solid Jumpsuit",
        image1: "https://img.ltwebstatic.com/images2_pi/2018/11/23/15429633024230744980_thumbnail_600x799.jpg",
        image2: "https://img.ltwebstatic.com/images2_pi/2018/11/23/1542963274688773605_thumbnail_600x799.jpg",
        image3: "https://img.ltwebstatic.com/images2_pi/2018/11/23/15429632951582676694_thumbnail_600x799.jpg",
        price: "US$18.00",
        description: {
            Color:	"Black",
            Details:	"Pocket, Scallop, Zipper",
            Fabric:	"Fabric has some stretch",
            Fit_Type:	"Regular",
            Length:	"Maxi",
            Composition:	"97% Polyester, 3% Spandex",
            Neckline:	"Round Neck",
            Pattern_Type:	"Plain",
            Season:	"Summer",
            Sleeve_Length:	"Sleeveless",
            Style:	"Glamorous",
            Waist_Type:	"Mid Waist",
            Hem_Shaped:	"Straight Leg",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: 8/10,
        },
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "",
        image: "",
        price: "",
        description: "",
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: 8/10,
        },
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Riveted Plaid Embellished Halter Fitted Jumpsuit",
        image1: "https://img.ltwebstatic.com/images/pi/201711/ed/15107155817996085409_thumbnail_600x.jpg",
        image2: "https://img.ltwebstatic.com/images/pi/201711/3f/15107155799685416790_thumbnail_600x.jpg",
        image3: "https://img.ltwebstatic.com/images/pi/201711/f7/15107155809974445619_thumbnail_600x.jpg",
        price: "US$18.00",
        description: {
            Color:	"Black and White",
            Details:	"Embroidery, Backless, Button, Colorblock, Pocket, Studded, Zipper",
            Fabric:	"Fabric has some stretch",
            Fit_Type:	"Skinny",
            Length:	"Long",
            Lining:	"Yes",
            Composition:	"95% Polyester, 5% Spandex",
            Neckline:	"Halter",
            Season:	"Summer",
            Sleeve_Length:	"Sleeveless",
            Style:	"Glamorous",
            Waist_Type:	"High Waist",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: 8/10,
        },
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Button Front Flutter Sleeve Belted Palazzo Jumpsuit",
        image1: "https://img.ltwebstatic.com/images2_pi/2019/02/13/15500417804158419551_thumbnail_600x799.jpg",
        image2: "https://img.ltwebstatic.com/images2_pi/2019/02/13/15500417761085936454_thumbnail_600x799.jpg",
        image3: "https://img.ltwebstatic.com/images2_pi/2019/02/13/15500417781590907709_thumbnail_600x799.jpg",
        price: "US$19",
        description: {
            Color:	"Blue",
            Pattern_Type:	"Plain",
            Composition:	"100% Rayon",
            Style:	"Casual",
            Neckline:	"V neck",
            Sleeve_Length:	"Half Sleeve",
            Belt:	"Yes",
            Fabric:	"Fabric has no stretch",
            Season:	"Summer",
            Arabian_Clothing:	"Yes",
            Fit_Type:	"Regular",
            Waist_Type:	"High Waist",
            Sleeve_Type:	"Flounce Sleeve",
            Details:	"Ruffle, Belted, Zipper, Button",
            Length:	"Maxi",
            Hem_Shaped:	"Wide Leg",
            Age:	"Women",
            Country:	"AR, US",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: 8/10,
        },
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "",
        image: "",
        price: "",
        description: "",
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: 8/10,
        },
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Floral Print Puff Sleeve Knot Front Flare Dress",
        image1: "https://img.ltwebstatic.com/images2_pi/2019/05/09/15573894103840281066_thumbnail_600x799.jpg",
        image2: "https://img.ltwebstatic.com/images2_pi/2019/05/09/15573894083043564866_thumbnail_600x799.jpg",
        image3: "https://img.ltwebstatic.com/images2_pi/2019/05/09/15573894112686490636_thumbnail_600x799.jpg",
        image4: "https://img.ltwebstatic.com/images2_pi/2019/05/09/15573894091428556919_thumbnail_600x799.jpg",
        price: "US$21.00",
        description: {
            Color:	"Blue",
            Fabric:	"Fabric has no stretch",
            Lining:	"Yes",
            Composition: "100% Polyester",
            Neckline: "Sweetheart",
            Pattern: "Type:	Floral",
            Season:	"Summer"
            Silhouette:	"Fit and Flare"
            Sleeve_Length: "Short Sleeve",
            Sleeve_Type: "Flounce Sleeve, Puff Sleeve",
            Style:	"Boho",
            Type: "A Line",
            Waist_Line:	"High Waist",
            Clothing_Type:	"A"
            Hem Shaped:	"Flared",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: 8/10,
        },
        add_date: "3/2/2019",default:Date.now,
    }
]


const categoryData = [
    {

    },
    {

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

// --------------------- productsData -----------------------
