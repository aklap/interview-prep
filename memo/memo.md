# Memoization

## Definition:

**Memoization** is an optimization technique or strategy that makes recursive and iterative function run faster by caching values the function returns after its initial execution.


Avoid having to execute a costly function in terms of time and resources by returning a cached value.

Essentially, memoization is:

- Creating an object
- Checking existing values that match user input OR
- Storing new key-value pairs in object

Tips: Memoize functions that are pure(always returns the same value for the same input -- ie, not random but deterministic) and are heavy, repetitive calculations.
