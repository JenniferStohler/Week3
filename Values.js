export default class Value {
  constructor(data){
    console.log()
    this.title = data.title
  }

  get Template() {
     return /*html*/`
     <div class= "card p-2 value">
      ${this.title}
    </div>

    `
  }

  
}