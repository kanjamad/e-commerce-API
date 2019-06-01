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
        images: ["https://img.ltwebstatic.com/images2_pi/2019/05/10/1557473539482121880_thumbnail_600x799.jpg", 
        "https://img.ltwebstatic.com/images2_pi/2019/05/10/1557473540717283164_thumbnail_600x799.jpg", 
        "https://img.ltwebstatic.com/images2_pi/2019/05/10/15574735371531455904_thumbnail_600x799.jpg", 
        "https://img.ltwebstatic.com/images2_pi/2019/05/10/15574735393273404023_thumbnail_600x799.jpg",
        ],
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
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0707",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Double Breasted Belted Dresss",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/04/23/155600470765187981_thumbnail_600x799.jpg", 
        "https://img.ltwebstatic.com/images2_pi/2019/04/23/1556004705617617302_thumbnail_600x799.jpg", 
        "https://img.ltwebstatic.com/images2_pi/2019/04/23/1556004706337689028_thumbnail_600x799.jpg",
        ],
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
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0707",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "SBetro Button Front Solid Belted Romper",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/05/10/15574795951148201820_thumbnail_600x799.jpg", 
        "https://img.ltwebstatic.com/images2_pi/2019/05/10/15574795963146244937_thumbnail_600x799.jpg", 
        "https://img.ltwebstatic.com/images2_pi/2019/05/10/15574795953090240605_thumbnail_600x799.jpg",
        ],
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
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0707",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Scallop Edge Solid Jumpsuit",
        images: ["https://img.ltwebstatic.com/images2_pi/2018/11/23/15429633024230744980_thumbnail_600x799.jpg", 
        "https://img.ltwebstatic.com/images2_pi/2018/11/23/1542963274688773605_thumbnail_600x799.jpg", 
        "https://img.ltwebstatic.com/images2_pi/2018/11/23/15429632951582676694_thumbnail_600x799.jpg",
        ],
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
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0707",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Riveted Plaid Embellished Halter Fitted Jumpsuit",
        images: ["https://img.ltwebstatic.com/images/pi/201711/ed/15107155817996085409_thumbnail_600x.jpg", 
        "https://img.ltwebstatic.com/images/pi/201711/3f/15107155799685416790_thumbnail_600x.jpg",
        "https://img.ltwebstatic.com/images/pi/201711/f7/15107155809974445619_thumbnail_600x.jpg",
        ],
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
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0707",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Button Front Flutter Sleeve Belted Palazzo Jumpsuit",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/02/13/15500417804158419551_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/02/13/15500417761085936454_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/02/13/15500417781590907709_thumbnail_600x799.jpg",
        ],
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
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0707",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Sunflower Print Split Thigh Shirred Detail Maxi Jumpsuit",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/04/10/15548913421730178795_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/10/15548913391820620137_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/10/1554891341519892728_thumbnail_600x799.jpg",
        ],
        price: "US$19.00",
        description: {
            Color:	"Multicolor",
            Details:	"Split, Frill, Shirred",
            Fabric:	"Fabric has no stretch",
            Fit_Type:	"Regular",
            Length:	"Maxi",
            Composition:	"100% Rayon",
            Neckline:	"Deep V Neck",
            Pattern_Type:	"Floral",
            Season:	"Summer",
            Sleeve_Length:	"Sleeveless",
            Style:	"Boho",
            Type:	"Tank",
            Waist_Type:	"High Waist",
            Hem_Shaped:	"Wide Leg",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0707",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Floral Print Puff Sleeve Knot Front Flare Dress",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/05/09/15573894103840281066_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/05/09/15573894083043564866_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/05/09/15573894112686490636_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/05/09/15573894091428556919_thumbnail_600x799.jpg",
        ],
        price: "US$21.00",
        description: {
            Color:	"Blue",
            Fabric:	"Fabric has no stretch",
            Lining:	"Yes",
            Composition: "100% Polyester",
            Neckline: "Sweetheart",
            Pattern: "Type:	Floral",
            Season:	"Summer",
            Silhouette:	"Fit and Flare",
            Sleeve_Length: "Short Sleeve",
            Sleeve_Type: "Flounce Sleeve, Puff Sleeve",
            Style:	"Boho",
            Type: "A Line",
            Waist_Line:	"High Waist",
            Clothing_Type:	"A",
            Hem_Shaped:	"Flared",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0707",
        add_date: "3/2/2019",default:Date.now,
    },
    // Men
    {
        productName: "Men Tropical Print Curved Hem Shirt",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/04/17/155548036891307857_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/17/15554803652929144599_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/17/15554803664235308493_thumbnail_600x799.jpg",
        ],
        price: "US$15.00",
        description: {
            Collar:	"Collar",
            Color:	"Multicolor",
            Details:	"Pocket",
            Fabric:	"Fabric has no stretch",
            Fit_Type:	"Regular Fit",
            Length:	"Regular",
            Composition:	"42% Cotton, 58% Polyester",
            Pattern_Type:	"Tropical",
            Season:	"Summer",
            Shirt_Type:	"Shirt",
            Sleeve_Length:	"Short Sleeve",
            Style:	"Boho",
            Placket_Type:	"Placket",
            Material:	"Polyester",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0706",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Men Tropical Print Shirt",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/04/25/15561707962485196949_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/25/15561708032448528925_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/25/15561708083890843504_thumbnail_600x799.jpg",
        ],
        price: "US$15.00",
        description: {
            Collar:	"Collar",
            Color:	"Multicolor",
            Fabric:	"Fabric has no stretch",
            Fit_Type:	"Regular Fit",
            Length:	"Regular",
            Composition:	"42% Cotton, 58% Polyester",
            Pattern_Type:	"Tropical",
            Season:	"Summer",
            Shirt_Type:	"Shirt",
            Sleeve_Length:	"Short Sleeve",
            Style:	"Boho",
            Placket_Type:	"Placket",
            Material:	"Polyester",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0706",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Men Letter Print Tee",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/03/14/15525431742873896200_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/03/14/15525431713655343758_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/03/14/15525431742796453464_thumbnail_600x799.jpg",
        ],
        price: "US$13.00",
        description: {
            Color:	"Black",
            Fabric:	"Fabric has some stretch",
            Fit_Type:	"Regular Fit",
            Length:	"Regular",
            Composition:	"100% Cotton",
            Neckline:	"Round Neck",
            Pattern_Type:	"Letter",
            Season:	"Summer",
            Sleeve_Length:	"Short Sleeve",
            Style:	"Casual",
            Placket_Type:	"Pullovers",
            Material:	"Cotton",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0706",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Men Rolled Hem Ripped Wash Jeans",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/02/26/15511518874067955244_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/02/26/15511518843853402094_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/02/26/1551151886788101134_thumbnail_600x799.jpg",
        ],
        price: "US$27.00",
        description: {
            Closure_Type:	"Button Fly",
            Color:	"Blue",
            Details:	"Ripped",
            Fabric:	"Fabric has no stretch",
            Fit_Type:	"Regular",
            Composition:	"80% Cotton, 20% Polyester",
            Pant_Length:	"Capris",
            Pant_Type:	"Tapered/Carrot",
            Pattern_Type:	"Letter",
            Season:	"Spring",
            Style:	"Casual",
            Waist_Type:	"Mid Waist",
            Material:	"Denim",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0706",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Men Ripped Side Button Denim Overall",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/04/08/15546974323253724030_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/08/15546974304135205941_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/08/15546974322481776861_thumbnail_600x799.jpg",
        ],
        price: "US$26.00",
        description: {
            Closure_Type:	"Button Fly",
            Color:	"Black",
            Details:	"Ripped, Button",
            Fabric:	"Fabric has some stretch",
            Fit_Type:	"Regular",
            Composition:	"80% Cotton, 20% Polyester",
            Pant_Length:	"Long",
            Pant_Type:	"Tapered/Carrot",
            Pattern_Type:	"Plain",
            Season:	"Spring",
            Style:	"Preppy",
            Waist_Type:	"Mid Waist",
            Material:	"Denim",
        },
        size: {
            XS: 2,
            S: 4,
            M: 6,
            L: "8/10",
        },
        category_id: "5cf1ef6341bce436da3c0706",
        add_date: "3/2/2019",default:Date.now,
    },
    // Kids
    {
        productName: "Toddler Girls Ruffle Trim Solid Dress",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/04/30/1556608896226107935_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/30/15566088952337386310_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/30/15566088962996116912_thumbnail_600x799.jpg",
        ],
        price: "US$10.00",
        description: {
            Color:	"Pink",
            Details:	"Ruffle",
            Dresses_Length:	"Short",
            Fabric:	"Fabric has no stretch",
            Composition:	"65% Cotton, 35% Polyester",
            Neckline:	"Square Neck",
            Pattern_Type:	"Plain",
            Season:	"Summer",
            Silhouette:	"Fit and Flare",
            Sleeve_Length:	"Cap Sleeve",
            Sleeve_Type:	"Butterfly Sleeve",
            Style:	"Casual",
            Type:	"A Line",
            Waist_Line:	"High Waist",
            Clothing_Type:	"A",
            Hem_Shaped:	"Flared",
            Material:	"Cotton",
        },
        size: {
            XS: "4Y",
            S: "5Y",
            M: "6Y",
            ML: "7Y",
            L: "8Y",
            XL: "9Y",
        },
        category_id: "5cf1ef6341bce436da3c0708",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Toddler Girls Flamingo Print Ruffle Smock Dress",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/04/18/1555565131524536302_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/18/15555651293325157043_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/18/1555565130998187229_thumbnail_600x799.jpg",
        ],
        price: "US$13.00",
        description: {
            Color:	"Green",
            Details:	"Ruffle",
            Dresses_Length:	"Short",
            Fabric:	"Fabric has no stretch",
            Composition:	"65% Cotton, 35% Polyester",
            Neckline:	"Square Neck",
            Pattern_Type:	"Animal",
            Season:	"Summer",
            Silhouette:	"Shift",
            Style:	"Boho",
            Type:	"A Line",
            Waist_Line:	"High Waist",
            Clothing_Type:	"A",
            Hem_Shaped:	"Flared",
            Material:	"Cotton",
        },
        size: {
            XS: "4Y",
            S: "5Y",
            M: "6Y",
            ML: "7Y",
            L: "8Y",
            XL: "9Y",
        },
        category_id: "5cf1ef6341bce436da3c0708",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Boys Cut-And-Sew Letter Print Polo Shirt",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/04/04/15543696623857180463_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/04/15543696593096089178_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/04/04/1554369662532144168_thumbnail_600x799.jpg",
        ],
        price: "US$11.00",
        description: {
            Color:	"Navy",
            Details:	"Colorblock, Button Front",
            Fabric:	"Fabric is very stretchy",
            Fit_Type:	"Regular Fit",
            Length:	"Regular",
            Composition:	"100% Cotton",
            Neckline:	"Collar",
            Pattern_Type:	"Slogan",
            Season:	"Summer",
            Sleeve_Length:	"Short Sleeve",
            Style:	"Casual",
            Placket_Type:	"Half Placket",
        },
        size: {
            XS: "4Y",
            S: "5Y",
            M: "6Y",
            ML: "7Y",
            L: "8Y",
            XL: "9Y",
        },
        category_id: "5cf1ef6341bce436da3c0708",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Boys Patched Detail Striped Side Polo Shirt",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/05/13/15577366532230450039_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/05/13/1557736651521307898_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/05/13/1557736652342501241_thumbnail_600x799.jpg",
        ],
        price: "US$13.00",
        description: {
            Color:	"Blue",
            Details:	"Patched, Button",
            Fabric:	"Fabric has some stretch",
            Fit_Type:	"Regular Fit",
            Length:	"Regular",
            Composition:	"100% Cotton",
            Neckline:	"Collar",
            Pattern_Type:	"Striped",
            Season:	"Summer",
            Sleeve_Length:	"Short Sleeve",
            Style:	"Preppy",
            Placket_Type:	"Half Placket",
        },
        size: {
            XS: "4Y",
            S: "5Y",
            M: "6Y",
            ML: "7Y",
            L: "8Y",
            XL: "9Y",
        },
        category_id: "5cf1ef6341bce436da3c0708",
        add_date: "3/2/2019",default:Date.now,
    },
    {
        productName: "Toddler Boys Hedgehog Print Pajama Set",
        images: ["https://img.ltwebstatic.com/images2_pi/2019/05/13/15577196093971478077_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/05/13/155771960838183608_thumbnail_600x799.jpg",
        "https://img.ltwebstatic.com/images2_pi/2019/05/13/1557719609734135649_thumbnail_600x799.jpg",
        ],
        price: "US$9.00",
        description: {
            Color:	"Yellow",
            Fabric:	"Fabric has some stretch",
            Composition:	"100% Cotton",
            Neckline:	"Round Neck",
            Pattern_Type:	"Cartoon",
            Season:	"Summer",
            Sleeve_Length:	"Short Sleeve",
            Style:	"Casual",
            Type:	"Pajama Sets",
            Material:	"Cotton",
        },
        size: {
            XS: "4Y",
            S: "5Y",
            M: "6Y",
            ML: "7Y",
            L: "8Y",
            XL: "9Y",
        },
        category_id: "5cf1ef6341bce436da3c0708",
        add_date: "3/2/2019",default:Date.now,
    },
]


const ordersData = [
    {
        product_id:"5cf1ef6341bce436da3c0705",
        price: "US$13.00",
        quantiy: "1",
        user_id: "5cf1ef6341bce436da3c06e2",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cf1ef6341bce436da3c0701",
        price: "US$27.00",
        quantiy: "3",
        user_id: "5cf1ef6341bce436da3c06e3",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cf1ef6341bce436da3c06f9",
        price: "US$15.00",
        quantiy: "1",
        user_id: "5cf1ef6341bce436da3c06e4",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cf1ef6341bce436da3c06f8",
        price: "US$42.00",
        quantiy: "2",
        user_id: "5cf1ef6341bce436da3c06e5",
        address: "",
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cf1ef6341bce436da3c06f7",
        price: "US$19.00",
        quantiy: "1",
        user_id: "5cf1ef6341bce436da3c06e6",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cf1ef6341bce436da3c06f6",
        price: "US$30.00",
        quantiy: "3",
        user_id: "5cf1ef6341bce436da3c06e7",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cf1ef6341bce436da3c06f5",
        price: "US$17.00",
        quantiy: "1",
        user_id: "5cf1ef6341bce436da3c06e8",
        address: {
            street: "Norberto Crossing",
            suite: "Apt. 950",
            city: "South Christy",
            zipcode: "23505-1337",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
    {
        product_id:"5cf1ef6341bce436da3c06f4",
        price: "US$38.00",
        quantiy: "2",
        user_id: "5cf1ef6341bce436da3c06e9",
        address: {
            street: "Rex Trail",
            suite: "Suite 280",
            city: "Howemouth",
            zipcode: "58804-1099",
        },
        order_date:  "3/2/2019",default:Date.now,
    },
]

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



// // --------------------- usersData -----------------------
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
db.Product.deleteMany((err, deletedProducts) => {
    if (err) console.log(err);
    console.log('Deleted products successfully');

    // Create New Products
db.Product.create(productsData, (err, newProducts) => {
    if (err) console.log(err);
    console.log(newProducts);
    console.log(`Created ${newProducts.length} new products successfully`);
    process.exit();
});
});

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

