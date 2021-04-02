import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  money = 0

  /**@type {FoodItem[]} */
  items = [new FoodItem({name: "Cheetos", price: 1, quantity: 5}), new FoodItem({name: "Milky Way", price: 2, quantity: 11}), new FoodItem({name: "Mountain Dew", price: 2, quantity: 20})]

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
