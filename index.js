// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];
function cats(cats){
  return cats
}
// cats.push['Milo', 'Otis', 'Garfield'];

var name = "Ralph";
function destructivelyAppendCat(name)
{
     cats.push(name);
     console.log(cats)
     return cats;
}

var name="Bob";
function destructivelyPrependCat(name)
{
     cats.unshift(name);
     return cats;
}

function destructivelyRemoveLastCat()
{
    cats.pop();
    return cats;
}

function  destructivelyRemoveFirstCat()
{
    cats.shift();
    return cats;
}

var name="Broom";
function appendCat(name)
{
    var cats1 = [...cats];
    cats1.push(name);
    return cats1;
}

var name="Arnold";
function prependCat(name)
{
    var cats1 = [...cats];
    cats1.unshift(name);
    return cats1;
}


function removeLastCat()
{
    var cats1 = [...cats];
    cats1.pop();
    return cats1;
}


function removeFirstCat()
{
    var cats1 = [...cats];
    cats1.shift();
    return cats1;
}
