(() => {
  class e {constructor(e, s) { if (!(e.length >= 2 && e.length <= 10)) throw new Error('the name must contain from 2 to 10 characters'); if (this.name = e, !t.some(((e) => e === s.toLowerCase()))) throw new Error('a non-existent game character'); this.type = s, this.health = 100, this.level = 1; }} const t = ['bowerman', 'swordsman', 'magician', 'undead', 'zombie', 'daemon']; const s = new class extends e {constructor(e, t, s, a) { super(e, t, s, a), this.attack = 25, this.defence = 25; }}('Valdemar', 'Bowerman'); console.log(s);
})();
