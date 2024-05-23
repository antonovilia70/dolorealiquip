// Tuple representing a string, a number, and a boolean
type MyTuple = [string, number, boolean];

// Function to create a tuple
function createTuple(a: string, b: number, c: boolean): MyTuple {
  return [a, b, c];
}

// Example usage of the createTuple function
const myTuple = createTuple("hello", 143, false);
