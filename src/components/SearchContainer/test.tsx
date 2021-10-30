/* eslint-disable @typescript-eslint/no-var-requires */
import { screen, fireEvent } from '@testing-library/react';

import { SearchContainer } from '.';
import { renderTheme } from '../../styles/render-theme';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('<SearchContainer />', () => {
  it('should render input and heading', () => {
    renderTheme(<SearchContainer />);

    expect(
      screen.getByRole('heading', { name: 'Funcionários' }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Pesquisar')).toBeInTheDocument();
  });

  it('should search on button click', () => {
    const push = jest.fn();
    useRouter.mockImplementationOnce(() => ({ push, query: 'q' }));

    const { container } = renderTheme(<SearchContainer />);

    const input = container.querySelector('input');
    input.value = '?q=maria';

    const searchButton = screen.getByRole('button', { name: 'Pesquisar' });
    fireEvent.click(searchButton);
    expect(push).toHaveBeenCalledWith({
      pathname: '/search/',
      query: { q: '?q=maria' },
    });
  });

  it('should not search on button click when input is empty', () => {
    const push = jest.fn();
    useRouter.mockImplementationOnce(() => ({ push, query: 'q' }));

    renderTheme(<SearchContainer />);

    const searchButton = screen.getByRole('button', { name: 'Pesquisar' });
    fireEvent.click(searchButton);
    expect(push).not.toHaveBeenCalled();
  });

  it('should reset search on button click', () => {
    const push = jest.fn();
    useRouter.mockImplementationOnce(() => ({
      push,
      query: { q: '?q=maria' },
    }));

    renderTheme(<SearchContainer />);

    const resetSearchButton = screen.getByRole('button', {
      name: 'Redefinir pesquisa',
    });
    fireEvent.click(resetSearchButton);

    expect(push).toBeCalledWith({ pathname: '/' });
  });
});
