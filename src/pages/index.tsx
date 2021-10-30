import { GetStaticProps } from 'next';

import { Home } from '../templates/Home';

import { fetchEmployees } from '../api/fetchEmployees';
import { IEmployee } from '../../types/employee';
import { IDefaultProps } from '../../types/default';

type IndexProps = IDefaultProps;

export default function Index({ employees }: IndexProps) {
  return <Home employees={employees} />;
}

export const getStaticProps: GetStaticProps = async () => {
  let data: IEmployee[];

  try {
    data = await fetchEmployees();
  } catch (error) {
    data = null;
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      employees: data,
    },
  };
};
