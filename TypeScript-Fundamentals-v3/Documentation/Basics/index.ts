// Explicit types" in the context of TypeScript refer to situations where you directly specify the type of a variable, function parameter, return value, or any other aspect of your code that involves type annotations. In other words, you're being clear and specific about the types you're using.

function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

const unitPrice: number = 10;
const quantity: number = 5;

const total: number = calculateTotal(unitPrice, quantity);

export{}


// noImplicitAny
// Recall that in some places, TypeScript doesn’t try to infer types for us and instead falls back to the most lenient type: any. This isn’t the worst thing that can happen - after all, falling back to any is just the plain JavaScript experience anyway.

// However, using any often defeats the purpose of using TypeScript in the first place. The more typed your program is, the more validation and tooling you’ll get, meaning you’ll run into fewer bugs as you code. Turning on the noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as any.





// strictNullChecks
// By default, values like null and undefined are assignable to any other type. This can make writing some code easier, but forgetting to handle null and undefined is the cause of countless bugs in the world - some consider it a billion dollar mistake! The strictNullChecks flag makes handling null and undefined more explicit, and spares us from worrying about whether we forgot to handle null and undefined.