import { ProxyState } from '..Models/AppState.js'
import { VendingService } from '../Models/VendingService/VendingService.js'


function _draw() {
  let snacks = ProxyState.snacks
  let chips = ProxyState.chips
  let candy = ProxyState.candy
  let drinks = ProxyState.drinks
  
  document.getElementById('snacks').innerHTML = `
  <div id="snacks" class="col-md-4">
    <button id="chips" onclick="chips()">Buy Chips</button>
    <button id="candy" onclick="candy()">Buy Candy</button>
    <button id="drinks" onclick="drinks()">Buy Drinks</button>
    </div>
  `
}

export default class VendingController {
  constructor() {
   
    ProxyState.on('snacks', _draw)
    
     _draw()
  }



  chips(){
    VendingService.chips()
  }

  candy(){
    VendingService.candy()
  }

  drinks(){
    VendingService.drinks()
  }

}

