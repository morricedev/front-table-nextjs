import styled, { css } from 'styled-components';

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    @media only screen and ${theme.breakpoints.small} {
      & {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }
    }
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: ${theme.font.size.medium};
  `}
`;

export const Search = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    width: 28.2rem;
    padding: 1.2rem 5rem 1.2rem 1.2rem;
    background-color: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.gray200};
    border-radius: 0.4rem;

    &::placeholder {
      font-family: ${theme.font.family.secondary};
      color: ${theme.colors.gray300};
    }
  `}
`;

export const SearchButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 9%;
    right: 0.3rem;
    z-index: 10;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    padding: 1rem;

    color: ${theme.colors.gray400};

    &:disabled {
      cursor: not-allowed;
    }

    svg {
      width: 17px;
      height: 17px;
    }
  `}
`;

export const ResetSearchButton = styled(SearchButton)`
  top: 8%;
  right: 2.5rem;
`;
