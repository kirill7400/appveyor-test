import healthStatus, { sorting } from './game/healthLogics';
import getLevel from './game/getLevel';

console.log(healthStatus({ name: 'Маг', health: 90 }));

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

console.log(sorting(heroes));

console.log(getLevel(1));
