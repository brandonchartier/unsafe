// Mutating functions. --
// Use inside reducers where the initail value is empty.
function append (acc, val) {
  acc.push(val)
  return acc
}

function assign (acc, kvs) {
  return Object.assign(acc, kvs)
}

function assoc (acc, key, val) {
  acc[key] = val
  return acc
}

function dissoc (acc, key) {
  delete acc[key]
  return acc
}

function prepend (acc, val) {
  acc.unshift(val)
  return acc
}

module.exports = {
  append,
  assign,
  assoc,
  dissoc,
  prepend
}
