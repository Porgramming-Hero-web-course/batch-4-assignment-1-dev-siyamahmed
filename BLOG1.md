


# TypeScript Union and Intersection Types

TypeScript is a statically typed language that helps improve the quality of our code. Two important features of TypeScript are **Union Types** and **Intersection Types**. In this document, we will discuss their significance and usage.

## Table of Contents
- [Union Types](#union-types)
- [Intersection Types](#intersection-types)
- [Union and Intersection Types - Differences](#union-and-intersection-types-differences)

## Union Types

Union types allow a variable to hold values of multiple possible types. It enables you to specify a type that can be one of several types.

### Example:

```typescript
type StringOrNumber = string | number;

```


In this case, the StringOrNumber type can be either string or number. When you use it, TypeScript will ensure that you only assign a string or number value to this variable.



## Advantages of Union Types:

- **Flexible Type Handling**:  
Union types offer enhanced flexibility in your code by allowing a single variable to accept multiple types, making it adaptable to different data scenarios.

- **Type Safety**:  
TypeScript ensures that only valid types are used with union types, which helps avoid potential runtime errors and ensures that the code remains error-free at compile time.
