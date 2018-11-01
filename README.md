# Unsafe

A lil library of mutating functions to use in reducers!

`npm install unsafe`

## Just why?

- **Declarative:** It's pretty nice to have the mutation inside its own function that returns the new state.
- **Performance:** It feels good to win performance tests.
- **Awkwardness:** Mutating functions should probably come with a warning, and `unsafe` fits nicely.

## When... why would I want this?

You're writing a reducing function and you're a little annoyed that it looks like this:

```javascript
function map (f, list) {
  return list.reduce((acc, item) => {
    acc.push(f(item))
    return acc
  }, [])
}
```

You'd rather use it like this:

```javascript
function map (f, list) {
  return list.reduce((acc, item) => {
    return [...acc, f(item)]
  }, [])
}
```

But you don't want to lose the performance of the former, so...

```javascript
function map (f, list) {
  return list.reduce((acc, item) => {
    return unsafe.append(acc, f(item))
  }, [])
}
```

## API

### append

Adds an item to the end of a list, using a `push`.

```javascript
unsafe.append([1, 2, 3], 4) //=> [1, 2, 3, 4]
```

### assign

Merges two objects using Object.assign, mutating the first argument.

```javascript
unsafe.assign({ a: 1, b: 2 }, { b: 3 }) //=> { a: 1, b: 3 }
```

### assoc

Sets a key and a value to an object.

```javascript
unsafe.assoc({ a: 1, b: 2 }, 'a', 0) //=> { a: 0, b: 2 }
```

### dissoc

Removes a key from an object.

```javascript
unsafe.dissoc({ a: 1, b: 2 }, 'a') //=> { b: 2 }
```

### prepend

Adds an item to the beginning of a list, using an `unshift`.

```javascript
unsafe.prepend([2, 3, 4], 1) //=> [1, 2, 3, 4]
```
