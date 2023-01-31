import fetchData from '../game/http';
import getLevel from '../game/getLevel';

jest.mock('../game/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel test error response', () => {
  fetchData.mockReturnValue(new Error('Mock this!'));

  const response = getLevel(1);
  expect(response).toEqual('Информация об уровне временно недоступна');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('getLevel test success', () => {
  fetchData.mockReturnValue({ status: 'ok', level: '2' });

  const response = getLevel(2);
  expect(response).toEqual('Ваш текущий уровень: 2');
  expect(fetchData).toBeCalledWith('https://server/user/2');
});
