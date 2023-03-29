import Math from './math';

export default class Daemon extends Math {
  constructor(name, type, health, level) {
    super(name, type, health, level);

    this._attack = 10;
    this.defence = 40;
  }
}
