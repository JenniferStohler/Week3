import { ProxyState } from "../AppState.js";
import { vendingService } from "../Models/VendingService.js";

function draw() {
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
export default class VendingController{
  
}