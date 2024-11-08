
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

const isTypeGuirdCircle = (shape : Shape) : shape is Circle =>{
return shape.shape === "circle"
}
const isTypeGuirdRectangle = (shape : Shape) : shape is Rectangle =>{
return shape.shape === "rectangle"
}

function calculateShapeArea(shape: Shape): number {
    if (isTypeGuirdCircle(shape)) {
        const result = Math.PI * shape.radius * shape.radius
        return parseFloat(result.toFixed(2))
    } else if (isTypeGuirdRectangle(shape)) {
        return shape.height * shape.width
    }
    return 0
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
console.log(rectangleArea);
