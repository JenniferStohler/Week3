import Anteater from "./model/anteater.js"

let Aaron = new Anteater("Aaron", "Gray", "1", "Male");

Aaron.eat('ants')



console.log(Aaron)

import Bear from "./model/bear.js"

let Pooh = new Bear("Pooh", "Brown", "5", "Female");

Pooh.eat('meat')



console.log(Pooh)

import Cougar from "./model/cougar.js"

let Constantinople = new Cougar("Constantinople", "Beige", "5", "Male");

Constantinople.eat('Red Meat')



console.log(Constantinople)

import Dingo from "./model/dingos.js"

let Joker = new Dingo ("Joker", "Brown", "2", "Female");

Joker.eat('Small Animals')



console.log(Joker)

import Tiger from "./model/tiger.js"

let Tony = new Tiger("Tony", "Orange", "13", "Male");

Tony.eat('Red Meat')

console.log(Tony)

import Hyena from "./model/hyena.js"

let Lou = new Hyena("Lou", "Gray", "3", "Male");

Lou.eat('Small Animals')

console.log(Lou)


import Cage from "./model/cage.js"

let animals = [Aaron, Pooh, Constantinople, Tony, Joker, Lou]
animals.shift(Aaron)
let Pen = new Cage(animals)

console.log(Pen)

