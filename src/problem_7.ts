// Problem number 7 :

class Car {
    make: string;
    model: string;
    year: number

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge(): number | string {
        const presentYear = new Date().getFullYear()
        const year = presentYear - this.year
        return `${year} (assuming current year is ${presentYear})`
    }
}

const car = new Car("Honda", "Civic", 2018)
console.log(car.getCarAge());