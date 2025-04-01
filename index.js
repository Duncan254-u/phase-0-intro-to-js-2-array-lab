const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Peaky) {
  cats.push(Peaky);
  
}
function destructivelyPrependCat(Fluffy) {
    cats.unshift(Fluffy);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat () {
    cats.shift();
}
function appendCat (Fluffy) {
    return [...cats, Fluffy];
}
function prependCat (Peaky) {
    return [Peaky, ...cats];
}
function removeLastCat (){
    return cats.slice(0, -1);
}
function removeFirstCat () {
    return cats.slice(1);
}
