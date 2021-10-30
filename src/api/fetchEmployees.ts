import { IEmployee } from '../../types/employee';
import config from '../config';

export async function fetchEmployees(query = '') {
  const data = await fetch(`${config.API_URI}/employees${query}`);
  const result: IEmployee[] = await data.json();

  return result;
}
