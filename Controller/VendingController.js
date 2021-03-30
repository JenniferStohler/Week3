import { ProxyState } from '../AppState.js'
import { VendingService } from '../VendingService/VendingService.js'

/** Renders Snacks to the page */
function _draw() {
  let snacks = ProxyState.snacks
  let chips = ProxyState.chips
  let candy = ProxyState.candy
  let drinks = ProxyState.drinks
  // NOTE whenever a event needs to trigger a controller action
  // the whole path of app.controllerName.methodName must be provided
  document.getElementById('snacks').innerHTML = `
  <div id="snacks" class="col-md-4">
    <button id="chips" onclick="chips()">Buy Chips</button>
    <button id="candy" onclick="candy()">Buy Candy</button>
    <button id="drinks" onclick="drinks()">Buy Drinks</button>
    </div>
  `
}

export default class GameController {
  constructor() {
    // NOTE at the start of creating a controller register all the listeners for that controller
    // NOTE ProxyState.on takes the name of the property to watch, and method to run when it changes
    // this method should not be envoked only passed
    ProxyState.on('enemy', _draw)
    // then call any immediate function calls
    _draw()
  }