import * as S from './styles';

import { IDefaultProps } from '../../../types/default';
import { EmployeesList } from '../../components/EmployeesList';
import { Header } from '../../components/Header';
import { SearchContainer } from '../../components/SearchContainer';

export function Home({ employees }: IDefaultProps) {
  return (
    <>
      <Header />
      <S.Wrapper>
        <SearchContainer />
        <EmployeesList employees={employees} />
      </S.Wrapper>
    </>
  );
}
