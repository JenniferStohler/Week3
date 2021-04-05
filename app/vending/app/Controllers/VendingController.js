import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";


//Private
function _drawMoney(){
  document.getElementById('currency').innerHTML=ProxyState.money.toString()
}
function _draw() {
  let values = ProxyState.items;
  let template = ''
  values.forEach(i => template += i.Template)
  document.getElementById("items").innerHTML = template
}

//Public
export default class VendingController {
  constructor() {
    ProxyState.on("moeny", _drawMoney);
    ProxyState.on('money', _draw)
    ProxyState.on('items', _draw)
    _draw()
  }

  addMoney() {
    vendingService.addMoney()
  }

  buyItem(name){
    vendingService.buyItem(name)
  }

}
