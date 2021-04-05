
class Tiger {
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
    console.log(`Time for ${food}!`)
  }
  speak(noise){
    alert(`${this.constructor.name}'s ${noise}`)
  }
}
export default Tiger;