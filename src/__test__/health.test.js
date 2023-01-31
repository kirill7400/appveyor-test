import healthStatus, { sorting } from '../game/healthLogics';

test('healthStatus healthy', () => {
  const result = healthStatus({ name: 'маг', health: 90 });

  expect(result).toBe('healthy');
});

test('healthStatus wounded', () => {
  const result = healthStatus({ name: 'варвар', health: 40 });

  expect(result).toBe('wounded');
});

test('healthStatus critical', () => {
  const result = healthStatus({ name: 'лучник', health: 5 });

  expect(result).toBe('critical');
});

const notSort = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sort = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sorting', () => {
  const result = sorting(notSort);

  expect(result).toEqual(sort);
});

const sameTest = [
  { name: 'мечник', health: 100 },
  { name: 'маг', health: 100 },
];

test('sorting same value', () => {
  const result = sorting(sameTest);

  expect(result).toEqual(sameTest);
});
