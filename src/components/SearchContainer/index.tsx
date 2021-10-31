import { useRouter } from 'next/router';
import { useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

import * as S from './styles';

export function SearchContainer() {
  const router = useRouter();
  const searchInput = useRef<HTMLInputElement | null>(null);

  const handleSearch = () => {
    const inputValue = searchInput.current?.value.trim();
    if (!inputValue) return;

    router?.push({
      pathname: '/search/',
      query: { q: inputValue },
    });
  };

  const handleResetSearch = () => {
    router?.push({
      pathname: '/',
    });
  };

  return (
    <S.SearchContainer>
      <S.Heading>Funcionários</S.Heading>

      <S.Search>
        <S.SearchInput ref={searchInput} type="text" placeholder="Pesquisar" />

        <S.SearchButton
          onClick={handleSearch}
          aria-label="Pesquisar"
          title="Pesquisar"
        >
          <FaSearch />
        </S.SearchButton>

        {router?.query.q && (
          <S.ResetSearchButton
            onClick={handleResetSearch}
            aria-label="Redefinir pesquisa"
            title="Redefinir pesquisa"
          >
            <FaTimes />
          </S.ResetSearchButton>
        )}
      </S.Search>
    </S.SearchContainer>
  );
}
