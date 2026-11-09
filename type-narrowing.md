# Type Narrowing in TypeScript

## Introduction

Type Narrowing is a technique in TypeScript that helps developers reduce a variable's type to a more specific type. It allows TypeScript to understand what type of value we are working with inside a particular condition. This helps prevent type-related errors and makes code safer.

## Detailed Discussion

### 1. Using typeof

The `typeof` operator checks the type of primitive values, such as strings, numbers, and booleans.

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Here, TypeScript knows that `value` is a string inside the `if` block and a number inside the `else` block.

### 2. Using instanceof

The `instanceof` operator checks whether an object belongs to a particular class.

```ts
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

TypeScript identifies the object's class and allows access to its specific methods.

### 3. Using the in Operator

The `in` operator checks whether a property exists in an object.

```ts
type Admin = { name: string; role: string };
type User = { name: string; email: string };

function getDetails(person: Admin | User) {
  if ("role" in person) {
    console.log(person.role);
  } else {
    console.log(person.email);
  }
}
```

Here, TypeScript uses the `role` property to identify the correct object type.

## Conclusion

Type Narrowing is an important TypeScript feature that helps developers work safely with union types. By using `typeof`, `instanceof`, and the `in` operator, we can check values and access their properties or methods without unnecessary type errors.