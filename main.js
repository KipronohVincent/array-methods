    const objects = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200   },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5   },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keybord', price: 25 }
    ]
    // Using some of the Array methods
    // Using .filter method 
    const filterObjects = objects.filter((object) => {
        return object.price <= 100;
    });

    // console.log(filterObjects);
    //  Using .map method

    const mappedObjects = objects.map((Object) => {
        return Object.price;
    });
    // console.log(mappedObjects);

    // Using .find method
    const founditems = objects.find((keen) => {
        return keen.name === 'Album';
    });
    // console.log(founditems);

    // Using .forEach method
    objects.forEach((object) => {
        // console.log(object.name);
    });

    // Using .some method in array it returns a boolean result
    const hasInexpensiveObjects = objects.some((object) => {
        return object.price <= 0;
    });
    // console.log(hasInexpensiveObjects);

    //  Using reduce method to sum the total number of objects in the Array.
    const sum = objects.reduce((currentValue, object) => {
        return object.price + currentValue;
    }, 0)

    // console.log(sum);

    // Using .includes method in Arrays to returns a boolean result, when a number is passed to includes

    const numbers = [1, 2, 3, 4, 5]

    const includesArr = numbers.includes(3);

    // console.log(includesArr);
