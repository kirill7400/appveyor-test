export default function fetchData(url) {
  if (url === 2) {
    return { status: 'ok', level: '2' };
  }
  throw new Error('Mock this!');
}
