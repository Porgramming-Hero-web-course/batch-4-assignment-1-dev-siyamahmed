
// Problem number 5 :

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}
const person = { name: "Alice", age: 30 };
const userInfo = getProperty(person, "name");
console.log(userInfo);

