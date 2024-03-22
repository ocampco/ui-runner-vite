import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('should render time', async () => {
    const time = '13:42:33 GMT+1100 (Australian Eastern Daylight Time)';

    render(<App time={time} />);

    expect(await screen.getByText(time, { exact: false })).toBeVisible();
  });
});
