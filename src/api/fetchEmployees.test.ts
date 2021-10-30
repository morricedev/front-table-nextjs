import { fetchEmployees } from './fetchEmployees';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: 'João',
          job: 'Back-end',
          admission_date: '2019-12-02T00:00:00.000Z',
          phone: '5551234567890',
          image:
            'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
        },
      ]),
  }),
) as jest.Mock;

beforeEach(() => {
  (fetch as jest.Mock).mockClear();
});

describe('fetchEmployees', () => {
  it('should fetch employees', async () => {
    const data = await fetchEmployees();

    expect(data).toHaveLength(1);
  });
});
