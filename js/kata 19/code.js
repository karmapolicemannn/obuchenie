const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (distanceToPump / mpg) <= fuelLeft ? true : false;
};

// варианта лучше нет, есть вариант с другим расчётом просто
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump;
};