class Breakfast{
    food;
    drink;
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    };
};

class Lunch{
    salad;
    soup;
    drink;
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    };
};

class Dinner{
    soup;
    entree;
    salad;
    #desert;
    constructor(salad, soup, entree, desert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#desert = desert;
    }
}

