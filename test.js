/*
var yourObj = {
  name: 'Aouk',
  getName: function () { console.log(this.name) }
};

var newObj = { name: 'Rou' };
newObj.getName = yourObj.getName;

var getName = yourObj.getName;


console.log('yourObj.getName();')
console.info('Aouk')
console.error(yourObj.getName())

console.log('newObj.getName();')
console.info('Rou')
console.error(newObj.getName())

console.log('getName();')
console.info(undefined)
console.error(getName())*/

/*
const x = {
  n: 'name',
  g: () => {
    this.x.n
  }
}

console.log(x)*/


/*
const a = [1,2,3]

function getValueWithDelay(arr, delay) {
  let i = 0

  const ivl = setInterval(() => {
    console.log(arr[i])
    i++

    if (i >= arr.length) {
      clearInterval(ivl)
    }
  }, delay)
}

getValueWithDelay(a, 3000)*/
/*

var fruit = 'apple'

{
  var fruit = 'orange'
  console.log(fruit) // ??
}

console.log(fruit) // ??

var fruit = 'apple'

function gimmeFruit() {
  var fruit = 'orange'
  console.log(fruit) // ??
}

console.log(fruit) // ??
gimmeFruit()

let fruit = 'apple'

{
  let fruit = 'orange'
  console.log(fruit) // ??
}

console.log(fruit) // ??


let fruit = 'apple'
let fruit = 'orange'
console.log(fruit)

var fruit = 'apple'
var fruit = 'orange'

b = 25
var b
console.log(b) // ??

console.log(bar) // ??
var bar = 111
console.log(bar) // ??

var bar
console.log(bar) // ??
bar = 111
console.log(bar) // ??

const fruit = 'apple'

{
  const fruit = 'orange'
  console.log(fruit) // ??
}

console.log(fruit) // ??


{
  const fruit = 'apple'
  fruit = 'orange'
  console.log(fruit)
}

const fruit = {}
fruit.color = 'red'


function doSomething() {
  var myVar = 1;
  if (true) {
    var myVar = 2;
    console.log(myVar);
  }
  console.log(myVar);
}

doSomething();


function doSomething() {
  let myVar = 1;
  if (true) {
    console.log(myVar);
    let myVar = 2;
    console.log(myVar);
  }
}

doSomething();

var var1;
console.log(var1);

console.log(var2);
var var2 = 1;


let var1;
console.log(var1);

console.log(var2);
let var2 = 1;


var myVar = 1;

function myFunction() {
  var myVar = 2;
  console.log(myVar); // 2
  console.log(window.myVar); // 1
}*/