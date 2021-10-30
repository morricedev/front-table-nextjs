import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Home } from '../../templates/Home';

import { IDefaultProps } from '../../../types/default';
import { IEmployee } from '../../../types/employee';
import { fetchEmployees } from '../../api/fetchEmployees';

type SearchPageProps = IDefaultProps & {
  query: string;
};

export default function SearchPage({ employees, query }: SearchPageProps) {
  return (
    <>
      <Head>
        <title>Pesquisando por: {query} </title>
      </Head>
      <Home employees={employees} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let data: IEmployee[];
  const query = ctx.query.q || '';

  if (!query) {
    return {
      notFound: true,
    };
  }

  try {
    data = await fetchEmployees(`?q=${query}`);
  } catch (error) {
    data = null;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      employees: data,
      query,
    },
  };
};
