import { screen } from '@testing-library/react';
import { EmployeesList } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<EmployeesList />', () => {
  it('should render table with not found message', () => {
    const { container } = renderTheme(<EmployeesList employees={[]} />);

    expect(
      screen.getByText('Funcionários não foram encontrados'),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render table with three employees', () => {
    const { container } = renderTheme(<EmployeesList employees={mock} />);

    const tbodyTrs = container.querySelector('tbody').querySelectorAll('tr');

    expect(
      screen.queryByText('Funcionários não foram encontrados'),
    ).not.toBeInTheDocument();
    expect(tbodyTrs).toHaveLength(mock.length);
    expect(container).toMatchSnapshot();
  });
});
