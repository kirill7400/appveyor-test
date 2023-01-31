function healthStatus(obj) {
  if (obj.health > 50) {
    return 'healthy';
  }
  if (obj.health < 50 && obj.health > 15) {
    return 'wounded';
  }
  return 'critical';
}

export function sorting(array) {
  return array.sort((a, b) => {
    if (a.health < b.health) {
      return 1;
    }
    if (a.health > b.health) {
      return -1;
    }
    return 0;
  });
}

// console.log(healthStatus({ name: 'маг', health: 90 }));

export default healthStatus;
