# Understanding TypeScript's Type Inference

TypeScript is a developer favorite — and for good reason. It adds type safety to JavaScript, improves tooling, and makes refactoring a breeze. But here’s a common misconception: that you have to explicitly annotate every variable or function. Nope. That’s where **type inference** steps in.

## What is Type Inference?

Type inference is TypeScript’s ability to guess the type of a variable based on how you define or use it — no need to write it out yourself.

### Example:

```ts
let message = "Hello, world!";
```

You never said `message` is a `string`, but TypeScript knows. Why? Because you assigned a string.


##  Why Type Inference Is Helpful

### 1. **Less Boilerplate

You don’t have to waste time writing types that TypeScript can figure out on its own:

```ts
// This is redundant:
let count: number = 5;

// This is clean:
let count = 5;
```

### 2. Smarter Autocomplete & Tooling

Even without manual types, the IDE still gives you suggestions, documentation, and real-time errors:

```ts
const colors = ["red", "green", "blue"];
colors.map(color => color.toUpperCase()); // color is inferred as string
```

### 3. Early Error Detection

Inference also prevents mistakes:

```ts
let age = 25;
age = "twenty-five"; // ❌ Error: Type 'string' is not assignable to type 'number'
```

You didn’t declare `age` as a number, but TypeScript inferred it — and still caught the bug.

---

### 4. Return Types — Use With Intention

TypeScript can infer return types from functions too:

```ts
function multiply(a: number, b: number) {
  return a * b; // inferred as number
}
```

This is usually fine, especially in small apps. But in libraries or shared codebases, being explicit can help future developers (or your future self) understand your intent.

##  When to Use Explicit types:

Go with inference when the type is crystal clear. But use explicit types when:

1. You’re exporting stuff (functions, constants, etc.)
2. You’re building for other devs
3. You want code to serve as self-documenting
4. You’re dealing with generics, unions, or more advanced types


<!-- ---------------------------------------------------------->

# What Are Enums in TypeScript?
**Enums (short for “enumerations”) let you define a set of named constants.** They're useful when you want to work with a group of related values — like directions, days, or roles — and want the benefits of autocompletion, type safety, and clear intent.

Instead of using loose strings or numbers, enums give names to values you care about.

## Numeric Enum:
TypeScript enums are numeric by default. The first member starts at 0, and each next one increments by 1 unless you specify otherwise.
```ts
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}


const move: Direction = Direction.Left;
console.log(move); // Output: 2
```

You can also manually assign numbers:
```ts
enum Status {
  Idle = 1,
  Loading = 3,
  Success = 5,
  Error = 7
}

console.log(Status.Success); // Output: 5
```

## String Enum
With string enums, each value must be explicitly initialized with a string. These are great for readability, logging, or when you care about the exact output.

```ts
enum LogLevel {
  Info = "INFO",
  Warn = "WARN",
  Error = "ERROR"
}

const level: LogLevel = LogLevel.Warn;
console.log(level); // Output: "WARN"
```

## When to Use Enums
Use enums when:
1. You want a clear set of related options
2. You want type safety with readable values
3. You want autocomplete and prevent typos
4. Enums give your values structure, meaning, and safety — all in one shot.