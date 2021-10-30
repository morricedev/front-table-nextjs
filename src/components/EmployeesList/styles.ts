import styled, { css } from 'styled-components';

export const EmployeesListContainer = styled.div`
  ${({ theme }) => css`
    overflow-x: auto;

    margin-top: 3.5rem;
    border: 0.1rem solid ${theme.colors.gray100};
    border-radius: 0.4rem 0.4rem 0 0;
  `}
`;

export const EmployeesTable = styled.table`
  ${({ theme }) => css`
    border-collapse: collapse;
    width: 100%;

    & tr {
      transform: scale(1);
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.2);
    }

    & thead th {
      padding: 1.5rem 0;

      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};

      font-weight: 500;
      text-transform: uppercase;
    }

    th,
    td {
      border-bottom: 0.1rem solid ${theme.colors.gray100};
      text-align: center;
      font-size: 1.6rem;
    }

    td {
      background-color: ${theme.colors.white};
      padding: 0.5rem 1rem;
      font-weight: 400;
      font-color: ${theme.colors.black};

      &[colspan='5'] {
        padding: 1.5rem;
      }

      & img {
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 100%;
      }
    }

    @media only screen and ${theme.breakpoints.small} {
      & td {
        padding: 0.8rem 2rem;
      }

      & thead th {
        padding: 0.8rem;
      }
    }
  `}
`;
