
import Daemon from '../daemon';
// import Magician from '../magician';


const daemon = new Daemon('Alena', 'daemon');

test('set stoned', () => {
  daemon.stoned = true;

  expect(daemon._stoned).toBe(true);
})

test('get stoned', () => {
  const result = daemon.stoned;

  expect(result).toBe(true);
})

test('set attack with stoned', () => {
  daemon.attack = 2;

  expect(daemon._attack).toBe(4);
})

test('set attack without stoned', () => {
  daemon._stoned = null;
  daemon._attack = 10;
  daemon.attack = 2;

  expect(daemon._attack).toBe(9);
})

test('get attack without stoned', () => {
  const result = daemon.attack;

  expect(result).toBe(9);
})