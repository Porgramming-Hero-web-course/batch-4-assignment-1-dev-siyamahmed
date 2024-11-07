{

    // problem number 1 :

    // start 

    function sumArray(num: number[]): number {
        return num.reduce((accumulator, num) => accumulator + num, 0)
    }
    const sumArrayResult = sumArray([1, 2, 3, 4, 5,])
    // console.log(sumArrayResult);

    //  end 

    // ------------->

    // problem number 2 :

    function removeDuplicates(num: number[]): number[] {
        return Array.from(new Set(num))
    }

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    // console.log(result);


    // ------------>

    // problem number 3 : 






    // ---------------->

    // Problem number 4 :


    type Circle = {
        shape: "circle";
        radius: number;
    };

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };

    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius
        } else if (shape.shape === "rectangle") {
            return shape.height * shape.width
        }
        return 0
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // console.log(circleArea);

    const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
    // console.log(rectangleArea);


    // ----------->

    // Problem number 5 :


    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key]
    }
    const person = { name: "Alice", age: 30 };
    const userInfo = getProperty(person, "name");
    console.log(userInfo);



    // ---------->


    // Problem number 6 : 

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(profile: Profile, updateProfile: Partial<Profile>): Profile {
        const updatedProfile = { ...profile, ...updateProfile };
        return updatedProfile;
    }

    const myProfile: Profile = {
        name: "siyam ahmed",
        age: 21,
        email: "dev.siyamahmed@gmail.com"
    }

    const updateInfo = updateProfile(myProfile, { age: 19 });
    console.log(updateInfo);



    // ------------->

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

        getCarAge(currentYear: number): number {
            return currentYear - this.year
        }
    }

    const car = new Car("Toyota", "TY79", 2018)
    console.log(car.getCarAge(2024));






}