
import { ProxyState } from "../Models/AppState.js"

class VendingService {
  chips(price){
    ProxyState.chips.price--
  }
  candy(price){
    ProxyState.candy.price--
  }
  drinks(price){
    ProxyState.drinks.price--
  }
}


  


  

