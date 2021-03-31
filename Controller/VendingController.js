//import { ProxyState } from '..Models/AppState.js'
import { vendingService } from '../VendingService/VendingService.js'


function _draw() {
  let snacks = ProxyState.snacks
  let chips = ProxyState.chips
  let candy = ProxyState.candy
  let drinks = ProxyState.drinks
  
  document.getElementById('snacks').innerHTML = `
  <div id="snacks" class="col-md-4">
    <button id="chips" onclick="app.vendingController.chips()">Buy Chips</button>
    <button id="candy" onclick="candy()">Buy Candy</button>
    <button id="drinks" onclick="drinks()">Buy Drinks</button>

    ${template}
  </div>
  `
}

export default class VendingController {
  constructor() {
   
    //ProxyState.on('snacks', _draw)
    
    // _draw()
  }



  chips(){
    console.log('buying chips')
    vendingService.chips()
  }

  candy(){
    vendingService.candy()
  }

  drinks(){
    vendingService.drinks()
  }

}

