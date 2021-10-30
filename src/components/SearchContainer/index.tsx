import { useRouter } from 'next/dist/client/router';
import { useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

import * as S from './styles';

export function SearchContainer() {
  const router = useRouter();
  const searchInput = useRef<HTMLInputElement | null>(null);

  const handleSearch = () => {
    const inputValue = searchInput.current?.value.trim();
    if (!inputValue) return;

    router.push({
      pathname: '/search/',
      query: { q: inputValue },
    });
  };

  const handleResetSearch = () => {
    if (searchInput.current) {
      searchInput.current.value = '';

      router.push({
        pathname: '/',
      });
    }
  };

  return (
    <S.SearchContainer>
      <S.Heading>Funcionários</S.Heading>

      <S.Search>
        <S.SearchInput ref={searchInput} type="text" placeholder="Pesquisar" />

        <S.SearchButton onClick={handleSearch}>
          <FaSearch />
        </S.SearchButton>

        {router.query.q && (
          <S.ResetSearchButton onClick={handleResetSearch}>
            <FaTimes />
          </S.ResetSearchButton>
        )}
      </S.Search>
    </S.SearchContainer>
  );
}
