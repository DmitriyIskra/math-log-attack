import Character from './character';

export default class _Math extends Character {
  constructor(name, type) {
    super(name, type);
    this.powerAttack = [100, 90, 80, 70];
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) { // может быть передано true
    this._stoned = value;
  }

  get attack() {
    return this._attack;
  }

  set attack(x) {
    if (this._stoned) {
      this._attack = (this._attack * this.powerAttack[x - 1]) / 100 - Math.log2(x) * 5;
      return;
    }
    this._attack = (this._attack * this.powerAttack[x - 1]) / 100;
  }
}
