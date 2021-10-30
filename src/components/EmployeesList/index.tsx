import * as S from './styles';

import { formatDate } from '../../utils/formatDate';
import { formatPhone } from '../../utils/formatPhone';
import { IDefaultProps } from '../../../types/default';

export type EmployeeListProps = IDefaultProps;

export function EmployeesList({ employees }: EmployeeListProps) {
  return (
    <S.EmployeesListContainer>
      <S.EmployeesTable>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Data de admissão</th>
            <th>Telefone</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan={5}>Funcionários não foram encontrados</td>
            </tr>
          ) : (
            employees.map(({ id, image, name, job, admission_date, phone }) => (
              <tr key={id}>
                <td>
                  <img src={image} alt={name} />
                </td>
                <td>{name}</td>
                <td>{job}</td>
                <td>{formatDate(admission_date)}</td>
                <td>{formatPhone(phone)}</td>
              </tr>
            ))
          )}
        </tbody>
      </S.EmployeesTable>
    </S.EmployeesListContainer>
  );
}
