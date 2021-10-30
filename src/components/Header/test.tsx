import { screen } from '@testing-library/react';
import { Header } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Header />', () => {
  it('should render Header', () => {
    renderTheme(<Header />);

    expect(screen.getByRole('img', { name: 'Be mobile' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Header />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: #1c1c1c;
        height: 6rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        box-shadow: 0 0.2rem 0.8rem rgba(0,0,0,0.2);
      }

      .c1 {
        margin-left: 3.2rem;
      }

      <div>
        <header
          class="c0"
        >
          <img
            alt="Be mobile"
            class="c1"
            src="/assets/images/logo.svg"
          />
        </header>
      </div>
    `);
  });
});
