class Anteater {
  constructor(
    name = '',
    color= '',
    age = 0,
    gender = ''
  ){
    this.name = name;
    this.color = color;
    this.age = age;
    this.gender = gender;
  }

eat(food){
  console.log(`Yummy ${food}!`)
}
speak(noise){
    alert(`${this.constructor.name} the Anteater says ${noise}`)
}
}
export default Anteater;

