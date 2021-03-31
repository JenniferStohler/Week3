
//import { ProxyState } from "../Models/AppState.js"

class VendingService {
  chips(price){
    ProxyState.chips.price--
  if(ProxyState.chips.price < 0){
    ProxyState.chips.price = 0
  }
  
  }
  candy(price){
    ProxyState.candy.price--
  }
  drinks(price){
    ProxyState.drinks.price--
  }
}
export const vendingService = new VendingService()

  


  

