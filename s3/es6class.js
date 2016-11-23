
class animal {

  constructor(name = 'noName') {
    this.name = name;
    this.alive = true;
    this.energy = 1;
  }

  _deathMessage() {
    console.log(`${this.name} is death :-(`);
  }

  myName() {
    return this.name;
  }

  eat() {
    this.energy++;
  }

  move() {
    this.energy--;
    if (this.energy === 0) {
      this.kill();
    }
  }

  kill() {
    this.alive = false;
    this._deathMessage();
  }
}

let pet = new animal();

console.log(pet.myName());
// console.log(pet.name);

pet.eat();
pet.move();
pet.move();
pet.eat();


class cat extends animal {
  constructor(name) {
    super(name);
    this.lifes = 7;
  }

  meow() {
    console.log('meooow!!');
  }

  kill() {
    this.alive = false;
    this._deathMessage();
  }
}

let myCat = new cat('Pushen');
console.log(myCat.energy);
myCat.meow();
myCat.eat();
myCat.move();
myCat.move();
myCat.move();
myCat.kill();
