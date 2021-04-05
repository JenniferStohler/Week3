  
// import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import FoodItem from "./Models/FoodItem.js"

class AppState extends EventEmitter {
  // /** @type {Value[]} */
  values = []

  money = 0

  /** @type {FoodItem[]} */
  items = [new FoodItem({name: "Cheetos", price: 1, quantity: 20}), new FoodItem({name: "Candy", price: 1, quantity: 20}), new FoodItem({name: "Donuts", price: 4, quantity: 20})]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    // trigger listeners
    target.emit(prop, value)
    return true
  }
})





// state = {
//   currentTransaction: 0,
//   snacks: [new Snack(1, 'cheetos', '....')],
//   lastVended: null
// }


// class snack {
//   id: 13323
//   price= price
//   name= name
//   imgUrl= imgUrl
// }