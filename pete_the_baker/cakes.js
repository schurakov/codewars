// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
 */

function cakes(recipe, available) {
    let _available = {...available};
    let counter = 0;

    const isUpperZero = (obj) => {
    let flag = true;
    for (let key in obj) {
        if (obj[key] < 0) {
            flag = false;
        }
    }
    return flag;
}

    while(isUpperZero(_available)) {
        for (let item in recipe) {
            if (!_available[item]) {
                _available[item] = 0;
            }
            _available[item] -= recipe[item];
        }
        if (isUpperZero(_available)) {
            counter += 1;
        }
    }

    return counter;
}

console.log(cakes({"cream":1,"flour":3,"sugar":1,"milk":1,"oil":1,"eggs":1},
    {"sugar":1,"eggs":1,"flour":3,"cream":1,"oil":1,"milk":1})); // 1
