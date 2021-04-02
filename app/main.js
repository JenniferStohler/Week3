import VendingController from "../Controller/VendingController.js"

class App {
  vendingController = new VendingController()

}

window["app"] = new App();
