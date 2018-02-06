const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var aKitten = [...kittens, name]
  return aKitten
} 

<<<<<<< HEAD
function prependKitten(name) {
  var pKitten = [name, ...kittens]
  return pKitten
}

function removeLastKitten() {
  var slkitten = kittens.slice(0, kittens.length - 1)
  return slkitten
}

function removeFirstKitten() {
  var fikitten = kittens.slice(1)
  return fikitten
}
=======
function 
>>>>>>> 15d9ad130ad24dcb4e8b9f3e1848616b85b4b97c
