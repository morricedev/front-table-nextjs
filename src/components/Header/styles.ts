import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    height: 6rem;
    display: flex;
    align-items: center;
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.2);
  `}
`;

export const Logo = styled.img`
  margin-left: 3.2rem;
`;
