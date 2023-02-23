export interface Dish {
    course: Course,
    name: string,
    description: string,
    price: number
}

export interface Course {
    name: string
}

export const Courses: Course[] = [
    {
        name: "Intro"
    },
    {
        name: "Entrées"
    },
    {
        name: "Main Courses"
    },
    {
        name: "Deserts"
    },
    {
        name: "Soft Drinks"
    },
    {
        name: "Cocktails"
    },
    {
        name: "Wine List"
    }
]

export const Entrees: Dish[] = [
    {
        course: Courses[1],
        name: "Bruschetta",
        description: "Crispy baguette topped with fresh tomato, basil, and balsamic glaze",
        price: 11
    },
    {
        course: Courses[1],
        name: "Caprese Salad",
        description: "Sliced fresh mozzarella, tomatoes, and basil with a balsamic glaze",
        price: 12
    },
    {
        course: Courses[1],
        name: "Garlic Shrimp",
        description: "Tiger shrimp sautéed in garlic and white wine served with crostini",
        price: 14
    },
    {
        course: Courses[1],
        name: "Fried Calamari",
        description: "Crispy fried calamari served with lemon aioli and marinara sauce",
        price: 12
    },
    {
        course: Courses[1],
        name: "Stuffed Mushrooms",
        description: "Button mushrooms stuffed with a mixture of breadcrumbs, herbs, and cheese",
        price: 10
    }
]

export const Mains: Dish[] = [
    {
        course: Courses[2],
        name: "Grilled Rib Eye Steak",
        description: "12 oz. rib eye steak grilled to perfection and served with garlic mashed potatoes and seasonal vegetables",
        price: 35
    },
    {
        course: Courses[2],
        name: "Pan-Seared Salmon",
        description: "Wild-caught salmon seared with lemon and herbs, served with quinoa and steamed greens",
        price: 28
    },
    {
        course: Courses[2],
        name: "Chicken Parmesan",
        description: "Breaded chicken cutlets topped with marinara sauce and melted mozzarella cheese, served with spaghetti marinara",
        price: 22
    },
    {
        course: Courses[2],
        name: "Shrimp Scampi",
        description: "Tiger shrimp sautéed with garlic, white wine, and lemon, served over linguine pasta",
        price: 25
    },
    {
        course: Courses[2],
        name: "Vegetable Lasagna",
        description: "Layers of pasta, seasonal vegetables, marinara sauce, and melted mozzarella cheese",
        price: 20
    }
]

export const Deserts: Dish[] = [
    {
        course: Courses[3],
        name: "Tiramisu",
        description: "Classic Italian dessert made with espresso-soaked ladyfingers and mascarpone cream",
        price: 8
    },
    {
        course: Courses[3],
        name: "Crème Brûlée",
        description: "Vanilla custard topped with a caramelized sugar layer",
        price: 9
    },
    {
        course: Courses[3],
        name: "Chocolate Mousse",
        description: "Light and fluffy chocolate mousse made with dark chocolate and whipped cream",
        price: 8
    },
    {
        course: Courses[3],
        name: "Cheesecake",
        description: "Classic New York-style cheesecake with a graham cracker crust",
        price: 9
    },
    {
        course: Courses[3],
        name: "Warm Apple Crisp",
        description: "Warm apples topped with a cinnamon and brown sugar crumble, served with vanilla ice cream",
        price: 9
    }
]

export const SoftDrinks: Dish[] = [
    {
        course: Courses[4],
        name: "Coke",
        description: "Coca-Cola classic / Zero / Diet",
        price: 3
    },
    {
        course: Courses[4],
        name: "Sprite",
        description: "Lemon-lime soda",
        price: 3
    },
    {
        course: Courses[4],
        name: "Fanta Orange",
        description: "Orange-flavored soda",
        price: 3
    },
    {
        course: Courses[4],
        name: "Iced Tea",
        description: "Homemade green tea with lemon and peach",
        price: 5
    },
    {
        course: Courses[4],
        name: "Lemonade",
        description: "Freshly squeezed house lemonade",
        price: 5
    },
    {
        course: Courses[4],
        name: "Still Water",
        description: "Evian",
        price: 2
    },
    {
        course: Courses[4],
        name: "Sparkling Water",
        description: "St. Pelegrino",
        price: 2
    }
]

export const Cocktails: Dish[] = [
    {
        course: Courses[5],
        name: "Vodka Martini",
        description: "Vodka stirred with vermouth and garnished with an olive",
        price: 12
    },
    {
        course: Courses[5],
        name: "Old Fashioned",
        description: "Whiskey muddled with sugar, bitters, and a citrus wedge, served on the rocks",
        price: 13
    },
    {
        course: Courses[5],
        name: "Gin and Tonic",
        description: "Gin mixed with tonic water and garnished with a lime wedge",
        price: 12
    },
    {
        course: Courses[5],
        name: "Manhattan",
        description: "Whiskey, vermouth, and bitters stirred and served up with a cherry",
        price: 14
    },
    {
        course: Courses[5],
        name: "Mojito",
        description: "Rum, mint, lime, sugar, and soda water",
        price: 12
    }
]

export const Wines: Dish[] = [
    {
        course: Courses[6],
        name: "Chianti Classico Riserva, Castello di Querceto",
        description: "A full-bodied red wine with notes of cherry and leather",
        price: 14
    },
    {
        course: Courses[6],
        name: "Barolo, Aldo Conterno",
        description: "A full-bodied red wine with notes of rose petal and tar",
        price: 16
    },
    {
        course: Courses[6],
        name: "Bordeaux, Château La Tour Blanche",
        description: "A full-bodied red wine with notes of blackcurrant and cedar",
        price: 18
    },
    {
        course: Courses[6],
        name: "Sancerre, Domaine Vacheron",
        description: "A crisp white wine with notes of gooseberry and flint",
        price: 16
    },
    {
        course: Courses[6],
        name: "Champagne, Veuve Clicquot",
        description: "A sparkling wine with notes of baked bread and citrus",
        price: 22
    }
]

export interface FullMenu {
    name: Course,
    dishes: Dish[] | undefined
}

export const FullMenu: FullMenu[] = [
    {
        name: Courses[0],
        dishes: undefined
    },
    {
        name: Courses[1],
        dishes: Entrees
    },
    {
        name: Courses[2],
        dishes: Mains
    },
    {
        name: Courses[3],
        dishes: Deserts
    },
    {
        name: Courses[4],
        dishes: SoftDrinks
    },
    {
        name: Courses[5],
        dishes: Cocktails
    },
    {
        name: Courses[6],
        dishes: Wines
    }
]