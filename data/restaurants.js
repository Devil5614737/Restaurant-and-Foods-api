const restaurants = [{
        id: 1,
        name: 'The Greek on Main',
        desc: "Relaxed Restaurant for Greenk Cuisine",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        ratings: 4.4,
        address: "419 Main St, Metuchen, NJ 08840, United States",
        opening: "11:30Am",
        longitude: 40.55163005193294,
        latitude: -74.36462979798516,
        menu: [{
                id: 1,
                title: "Chicken Santorini Sandwich",
                desc: "Grilled Chicken, Spicy Feta mousse, arugula, and tomatoes.",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_0609-300x247.jpg",
                price: 14,
                veg: false

            },
            {
                id: 2,
                title: "Lobster Gyro",
                desc: "Lettuce, tomatoes, onions and Tzatziki sauce on pita.",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9211-120x120.jpg",
                price: 24,
                veg: false

            },
            {
                id: 3,
                title: "Lamburger",
                desc: "Grilled seasoned ground lamb, goat cheese, arugula, tomatoes and pickled onions.",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9233-120x120.jpg",
                price: 16,
                veg: false

            },
            {
                id: 4,
                title: "Chicken Souvlaki",
                desc: "Marinated skewered chicken served with pita bread, garden salad, fries and tzatziki sauce.",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9265-120x120.jpg",
                price: 14,
                veg: false

            },
            {
                id: 5,
                title: "Gigantes",
                desc: "Giant lima beans, baked with tomatoes and fresh herbs. V-GF.",
                img: "https://thegreekonmain.com/wp-content/uploads/Gigantes.-Baked-giant-Lima-beans-120x120.jpg",
                price: 10,
                veg: false

            },
            {
                id: 6,
                title: "Dolmates",
                desc: "Stuffed grape leaves with rice and resh herbs. V-GF",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9154-120x120.jpg",
                price: 10,
                veg: true
            },
            {
                id: 7,
                title: "Drunken Clams and Mussels",
                desc: "With tomatoes, garlic, fresh herbs and ouzo. GF.",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9154-120x120.jpg",
                price: 18,
                veg: true

            },
            {
                id: 8,
                title: "Baklava",
                desc: "Flaky filo dough layers of walnuts thyme honey syrup.",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_6648-120x120.jpg",
                price: 8,
                veg: true

            },
            {
                id: 9,
                title: "Galaktoboureko",
                desc: "Baked custard with fillo, cinnamon and thyme honey syrup.",
                img: "https://thegreekonmain.com/wp-content/uploads/galaktoboureko-1-120x120.jpg",
                price: 10,
                veg: true

            },
        ]
    },
    {
        id: 2,
        name: "Clarks's",
        desc: "Greek & American comfort food in a casual, neighborhood dinner setting that buzzes at breakfase",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
        ratings: 4.4,
        address: "80 Clark St, Brooklyn, NY 11201, United States",
        opening: "12:30Am",
        longitude: 40.722537869392475,
        latitude: -74.00070769373895,
        menu: [{
                id: 1,
                title: "Grilled Chicken Breast & Bacon Club with Fries",
                desc: "Grilled Chicken Breast & Bacon Club with Fries",
                img: "https://images.unsplash.com/photo-1592011432621-f7f576f44484?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                price: 15,
                veg: false

            },
            {
                id: 2,
                title: "Philly Cheese Steak",
                desc: " sliced steak,onions, peppers, cheese on roll, fries",
                img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhpbGx5JTIwY2hlZXNlJTIwc3RlYWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                price: 24,
                veg: false

            },
            {
                id: 3,
                title: "Lamburger",
                desc: "Grilled seasoned ground lamb, goat cheese, arugula, tomatoes and pickled onions.",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9233-120x120.jpg",
                price: 16,
                veg: false

            },
            {
                id: 4,
                title: "Chicken Souvlaki",
                desc: "Marinated skewered chicken served with pita bread, garden salad, fries and tzatziki sauce.",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9265-120x120.jpg",
                price: 14,
                veg: false

            },
            {
                id: 5,
                title: "Chicken Masala",
                desc: " marsala wine, mushroom, rice .-Baked-giant-Lima-beans-120x120.jpg",
                img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMG1hc2FsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                price: 21,
                veg: false

            },
            {
                id: 6,
                title: "Pie",
                desc: "apple, blueberry- with ice cream (ala mode) ",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9154-120x120.jpg",
                price: 5,
                veg: true
            },


        ]
    },
    {
        id: 3,
        name: "Pauline's Italian Cuisine",
        desc: "DineIN,Delivery,TakeAway",
        image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
        ratings: 4.4,
        address: "765 NJ-34, Matawan, NJ 07747, United States",
        opening: "12:30Am",
        longitude: 40.451196003567716,
        latitude: -74.2548744181148,
        menu: [{
                id: 1,
                title: "Mozzarella Capressa",
                desc: "Fresh mozzarella, tomato & roasted peppers",
                img: "https://images.unsplash.com/photo-1490716961549-5dbd18f53101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW96emFyZWxsYSUyMGNhcHJlc3NhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 12,
                veg: true

            },
            {
                id: 2,
                title: "BakedClams",
                desc: "",
                img: "https://media.istockphoto.com/photos/lobster-bake-picture-id1149325177?b=1&k=20&m=1149325177&s=170667a&w=0&h=vPvN9F0CjzJBZy16dnp6xde20ZbFHHcOhRNaDuCVQOA=",
                price: 12,
                veg: true

            },
            {
                id: 3,
                title: "Pappadelle",
                desc: "Served with filet mignon & shrimp in light red sauce",
                img: "https://media.istockphoto.com/photos/man-eating-italian-braised-beef-ragu-with-pappardelle-picture-id1366239050?b=1&k=20&m=1366239050&s=170667a&w=0&h=bBRNTu4PIOBEk_VgHUXnmnhuOVyxHTrN15NyPx0e1s4=",
                price: 30,
                veg: false

            },
            {
                id: 4,
                title: "Black Linguini",
                desc: "Served with calamari in fra diavolo sauce",
                img: "https://chefjar.com/wp-content/uploads/2017/03/2-4.jpg",
                price: 30,
                veg: true
            },
            {
                id: 5,
                title: "Chicken Parmigiana",
                desc: "",
                img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHBhcm1pZ2lhbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
                price: 22,
                veg: false
            },
            {
                id: 6,
                title: "Pauline's Salad for 2",
                desc: "Spring mixed lettuce, tomato, onion, artichoke hearts, roasted peppers, olives, with shaved provolone and mozzarella cheese",
                img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGF1bGluZSdzJTIwc2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
                price: 12,
                veg: true
            },


        ]
    },
    {
        id: 4,
        name: "Mario's Restaurant",
        desc: "Large family-owned Neapolitan-Italian restaurant serving red-sauce fare sicne 1919",
        image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ratings: 4.5,
        address: "2342 Arthur Ave, The Bronx, NY 10458, United States",
        opening: "10:30Am",
        longitude: 40.87312183096737,
        latitude: -73.8877744028703,
        menu: [{
                id: 1,
                title: "Grilled Chicken Breast & Bacon Club with Fries",
                desc: "Grilled Chicken Breast & Bacon Club with Fries",
                img: "https://images.unsplash.com/photo-1592011432621-f7f576f44484?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                price: 15,
                veg: false

            },
            {
                id: 4,
                title: "Chicken Souvlaki",
                desc: "Marinated skewered chicken served with pita bread, garden salad, fries and tzatziki sauce.",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9265-120x120.jpg",
                price: 14,
                veg: false

            },
            {
                id: 5,
                title: "Chicken Masala",
                desc: " marsala wine, mushroom, rice .-Baked-giant-Lima-beans-120x120.jpg",
                img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMG1hc2FsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                price: 21,
                veg: false

            },
            {
                id: 6,
                title: "Pie",
                desc: "apple, blueberry- with ice cream (ala mode) ",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9154-120x120.jpg",
                price: 5,
                veg: true
            },


        ]
    },
    {
        id: 5,
        name: "Belleville Bites",
        desc: "Greek & American comfort food in a casual, neighborhood dinner setting that buzzes at breakfase",
        image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
        ratings: 4,
        address: "500 Cortlandt St, Belleville, NJ 07109, United States",
        opening: "12:30Am",
        longitude: 40.821595039402546,
        latitude: -74.14887245433324,
        menu: [{
                id: 1,
                title: "Grilled Chicken Breast & Bacon Club with Fries",
                desc: "Grilled Chicken Breast & Bacon Club with Fries",
                img: "https://images.unsplash.com/photo-1592011432621-f7f576f44484?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                price: 15,
                veg: false

            },
            {
                id: 4,
                title: "Chicken Souvlaki",
                desc: "Marinated skewered chicken served with pita bread, garden salad, fries and tzatziki sauce.",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9265-120x120.jpg",
                price: 14,
                veg: false

            },
            {
                id: 5,
                title: "Chicken Masala",
                desc: " marsala wine, mushroom, rice .-Baked-giant-Lima-beans-120x120.jpg",
                img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMG1hc2FsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                price: 21,
                veg: false

            },
            {
                id: 6,
                title: "Pie",
                desc: "apple, blueberry- with ice cream (ala mode) ",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9154-120x120.jpg",
                price: 5,
                veg: true
            },


        ]
    },

    {
        id: 6,
        name: "Peaches",
        desc: "Modern spin on southern comfort food plus brunch & a full bar in a historic browstone neighborhood",
        image: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ratings: 4.3,
        address: "393 Lewis Ave, Brooklyn, NY 11233, United States",
        opening: "12:30Am",
        longitude: 40.724236859353375,
        latitude: -73.87579032365674,

        menu: [{
                id: 1,
                title: "Blacks Killet Trout",
                desc: "artichokes, grape tomatoes, black olives, spinach, lemon",
                img: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaCUyMGRpc2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
                price: 16,
                veg: true
            },
            {
                id: 4,
                title: "Hand Dipped Flounder",
                desc: "barbecue fries, peaches barbecue aioli",
                img: "https://images.unsplash.com/photo-1611695500858-e6ac19b1ca55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmlzaCUyMGRpc2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
                price: 14.50,
                veg: false

            },
            {
                id: 5,
                title: "Brickhouse Roasted Half Chicken",
                desc: "tyrones mashed potatoes, parmesan and truffle oil",
                img: "https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cm9hc3RlZCUyMGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
                price: 14.50,
                veg: false

            },
            {
                id: 6,
                title: "Turkey Meat Loaf",
                desc: "tyrones mashed potatoes, creamy mushroom gravy",
                img: "https://images.unsplash.com/photo-1585658930672-bbee7a596e2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVhdCUyMGxvYWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
                price: 13,
                veg: false
            },
            {
                id: 7,
                title: "Pearl Pasta",
                desc: "sweet corn, market mushrooms, asparagus, cherry tomatoes, parmesan",
                img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVhcmwlMjBwYXN0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
                price: 14,
                veg: true
            },


        ]
    },
    {
        id: 7,
        name: "Junior's Restaurant & Bakery",
        desc: "New York-style cheesecake is the thing to order at this essential Brooklyn diner",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        ratings: 4.4,
        address: "386 Flatbush Ave Ext, Brooklyn, NY 11201, United States",
        opening: "12Am",
        longitude: 40.69421299660157,
        latitude: -73.98296665794126,

        menu: [{
                id: 1,
                title: "Disco Fries",
                desc: "Melted Mozzarella, Mushroom Gravy",
                img: "https://images.unsplash.com/photo-1615485290836-4ebcebf44aaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
                price: 8.95,
                veg: true

            },
            {
                id: 2,
                title: "Loaded Potato Pancake",
                desc: "Melted Cheddar, Crumbled Bacon, Sour Cream",
                img: "https://images.unsplash.com/photo-1544726982-b414d58fabaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
                price: 10.50,
                veg: true

            },
            {
                id: 3,
                title: "Classic Buffalo Wings",
                desc: "Fresh Wings Tossed in our Special Wing Sauce. Served with Homemade Bleu Cheese Dressing",
                img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 16,
                veg: false

            },
            {
                id: 4,
                title: "Thai Ginger BBQ Wings",
                desc: "Slightly Spicy Soy, Citrus & Ginger BBQ Sauce",
                img: "https://images.unsplash.com/photo-1585703900468-13c7a978ad86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 16,
                veg: false

            },
            {
                id: 5,
                title: "Fried Shrimp",
                desc: "Homemade Tartar Sauce, or Buffalo Style with Bleu Cheese Dressing",
                img: "https://images.unsplash.com/photo-1579887829114-282b4fa31072?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZWQlMjBzaHJpbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
                price: 17.25,
                veg: false

            },
            {
                id: 6,
                title: "Scoop Salad",
                desc: "Garden Salad with Creamy Cole Slaw, Potato Salad and choice of Tuna, Chicken, or Egg Salad",
                img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nvb3AlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
                price: 10,
                veg: true
            },
            {
                id: 7,
                title: "Drunken Clams and Mussels",
                desc: "With tomatoes, garlic, fresh herbs and ouzo. GF.",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_9154-120x120.jpg",
                price: 18,
                veg: true

            },
            {
                id: 8,
                title: "Baklava",
                desc: "Flaky filo dough layers of walnuts thyme honey syrup.",
                img: "https://thegreekonmain.com/wp-content/uploads/IMG_6648-120x120.jpg",
                price: 8,
                veg: true

            },
            {
                id: 9,
                title: "Galaktoboureko",
                desc: "Baked custard with fillo, cinnamon and thyme honey syrup.",
                img: "https://thegreekonmain.com/wp-content/uploads/galaktoboureko-1-120x120.jpg",
                price: 10,
                veg: true

            },
        ]
    },
    {
        id: 8,
        name: "Tom’s Restaurant",
        desc: "Enduring diner dishing up breakfast & lunch classics in an old-fashioned atmosphere.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        ratings: 4.4,
        address: "782 Washington Ave, Brooklyn, NY 11238, United States",
        opening: "12Am",
        longitude: 40.68486452157106,
        latitude: -73.96361776883862,

        menu: [{
                id: 1,
                title: "Tom Burger",
                desc: "Grilled freshly ground 100% pure chopped beef",
                img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 4,
                veg: false

            },
            {
                id: 2,
                title: "Tom Burger Deluxe",
                desc: "With golden french fries, crisp lettuce and tomato",
                img: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 8,
                veg: true

            },
            {
                id: 3,
                title: "Cheese Burger",
                desc: "Topped with melted american cheese",
                img: "https://images.unsplash.com/photo-1605789538467-f715d58e03f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 5,
                veg: true
            },

            {
                id: 4,
                title: "Chili Burger Deluxe",
                desc: "Served french fries, crisp lettuce and tomato",
                img: "https://images.unsplash.com/photo-1587382397340-05976129ffb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGxpJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 9,
                veg: true

            },
            {
                id: 5,
                title: "Chili Cheese Burger Deluxe",
                desc: "Topped with melted cheese, served with golden french fries, crisp lettuce and tomato",
                img: "https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGxpJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 10,
                veg: true
            },
            {
                id: 6,
                title: "Cheese Omelet",
                desc: "Choice of american, swiss, mozzarella, cheddar or feta",
                img: "https://images.unsplash.com/photo-1510923289510-6f9336deefa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b21sZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
                price: 6.50,
                veg: true
            },
            {
                id: 7,
                title: "Root Beer",
                desc: "",
                img: "https://images.unsplash.com/photo-1567099058592-19a2a2bf5fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vdCUyMGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
                price: 3,
                veg: true

            },

        ]
    },
    {
        id: 9,
        name: "SOUTHGATE Bar & Restaurant",
        desc: "Locally sourced, upmarket American dishes served in a shiny, modern room with Central Park views.",
        image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        ratings: 4.4,
        address: "154 Central Park S, New York, NY 10019, United States",
        opening: "12Am",
        longitude: 40.795116982472074,
        latitude: -73.97874726268816,

        menu: [{
                id: 1,
                title: "Tom Burger",
                desc: "Grilled freshly ground 100% pure chopped beef",
                img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 4,
                veg: false

            },
            {
                id: 2,
                title: "Tom Burger Deluxe",
                desc: "With golden french fries, crisp lettuce and tomato",
                img: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 8,
                veg: true

            },
            {
                id: 3,
                title: "Cheese Burger",
                desc: "Topped with melted american cheese",
                img: "https://images.unsplash.com/photo-1605789538467-f715d58e03f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 5,
                veg: true
            },

            {
                id: 4,
                title: "Chili Burger Deluxe",
                desc: "Served french fries, crisp lettuce and tomato",
                img: "https://images.unsplash.com/photo-1587382397340-05976129ffb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGxpJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 9,
                veg: true

            },
            {
                id: 5,
                title: "Chili Cheese Burger Deluxe",
                desc: "Topped with melted cheese, served with golden french fries, crisp lettuce and tomato",
                img: "https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGxpJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 10,
                veg: true
            },
            {
                id: 6,
                title: "Cheese Omelet",
                desc: "Choice of american, swiss, mozzarella, cheddar or feta",
                img: "https://images.unsplash.com/photo-1510923289510-6f9336deefa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b21sZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
                price: 6.50,
                veg: true
            },
            {
                id: 7,
                title: "Root Beer",
                desc: "",
                img: "https://images.unsplash.com/photo-1567099058592-19a2a2bf5fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vdCUyMGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
                price: 3,
                veg: true

            },

        ]
    },
    {
        id: 10,
        name: "Hudson Hound",
        desc: "This homey pub with a fireplace & tin ceiling boasts a cut-above-the-usual American-Irish menu.",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ratings: 4.3,
        address: "575 Hudson St, New York, NY 10014, United States",
        opening: "12Am",
        longitude: 40.7371170824635,
        latitude: -74.00352585412901,
        menu: [{
                id: 1,
                title: "Roast Sirloin of Beef",
                desc: "Yorkshire Pudding, Horseradish Cream, Guinness Gravy and All The Trimmings-Dripping Roast Potatoes, Champ Potatoes, Carrots, Haricot Vert",
                img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9hc3QlMjBiZWVmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 28,
                veg: false

            },
            {
                id: 2,
                title: "Organic Roast Half Chicken",
                desc: "Brioche & Irish Sausage Stuffing, Guinness Gravy and All The Trimmings-Dripping Roast Potatoes, Champ Potatoes, Carrots, Haricot Vert",
                img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9hc3QlMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 24,
                veg: false

            },
            {
                id: 3,
                title: "Burrata Pizza",
                desc: "Roasted Cherry Tomatoes, Burrata, Tomato Sauce, Baby Arugula, Basil, Balsamic",
                img: "https://images.unsplash.com/photo-1562634287-37c0e7ca8c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVycmF0YSUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 15,
                veg: false
            },

            {
                id: 4,
                title: "Asian Spiced Salmon Burger",
                desc: "Ginger, Garlic, Scallions, Chilies, Chipotle Mayo, Pickled Carrot, Daikon, Bibb Lettuce, Tomato, Brioche Bun. Fries or Salad",
                img: "https://images.unsplash.com/photo-1559848062-6b79bcad91bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsbW9uJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 22,
                veg: true

            },
            {
                id: 5,
                title: "NUTRL Vodka Soda",
                desc: "NUTRL Vodka Soda",
                img: "https://images.unsplash.com/photo-1617641357511-2c8d5078aa35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dm9ka2ElMjBzb2RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                price: 9,
                veg: true
            },
            {
                id: 6,
                title: "Lost Irish",
                desc: "Irish Whiskey. Triple Distilled. Six Worlds: Finished in casks from six continents for maximum flavour",
                img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpc2tleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
                price: 14,
                veg: true
            },
            {
                id: 7,
                title: "Grand Old Parr",
                desc: "Speyside Blended Malt Scotch Whisky. A stunning blend of no fewer than eight single malts. Born in Speyside, the largest whiskey region in Scotland and home to The Craigellachie Hotel.",
                img: "https://images.unsplash.com/photo-1643506926423-ba467010591c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NvdGNoJTIwd2hpc2tleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
                price: 14,
                veg: true

            },

        ]
    },
]


module.exports = restaurants