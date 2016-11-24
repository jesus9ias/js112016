
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
    if (this.alive === true) {
      this.energy++;
      console.log(this.energy);
    } else {
      this._deathMessage();
    }
  }

  move() {
    this.energy--;
    if (this.energy <= 0) {
      this.kill();
    }
  }

  kill() {
    this.alive = false;
    this._deathMessage();
  }

  static sleep() {
    console.log(this.name + ' is slepping');
  }
}

let pet = new animal('Pinki');

console.log(pet.myName());
// console.log(pet.name);

pet.eat();
pet.move();
pet.move();
pet.eat();

animal.sleep();

class cat extends animal {
  constructor(name) {
    super(name);
    this.lifes = 7;
  }

  meow() {
    console.log('meooow!!');
  }

  move() {
    this.energy--;
    if (this.energy <= 0 && this.lifes <= 0) {
      this.kill();
    }
  }

  kill() {
    this.lifes--;
    if (this.lifes > 0) {
      console.log(`${this.name} has ${this.lifes} lifes yet`);
    } else {
      this.alive = false;
      this._deathMessage();
    }
  }
}

let myCat = new cat('Pushen');
console.log(myCat.energy);
myCat.meow();
myCat.eat();
myCat.move();
myCat.move();
myCat.move();
myCat.move();
myCat.move();
myCat.move();
myCat.move();
myCat.eat();
myCat.eat();
myCat.eat();
myCat.eat();
myCat.eat();

myCat.move();
//myCat.kill();
