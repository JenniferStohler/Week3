class Bear {
  constructor(
    name = '',
    color = '',
    age = 0,
    gender = ''
  ){
    this.name = name;
    this.color = color;
    this.age = age;
    this.gender = gender;
  }
eat(food){
  console.log(`Rumbly in ${this.constructor.name}'s tummy for ${food}!`)
}
speak(noise){
  alert(`Hear ${this.constuctor.name}'s roar!`)
}
}
export default Bear;