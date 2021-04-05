class Dingo {
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
  console.log(`${this.constructor.name}'s tummy hungry for ${food}!`)
}
speak(noise){
  alert(`Hear ${this.constuctor.name}'s bark!`)
}
}
export default Dingo;