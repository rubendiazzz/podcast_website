import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchRounded, AccountCircleRounded, MenuRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 30;
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const MenuIcon = styled(MenuRounded)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 5px 15px;
  border-radius: 30px;
  width: 40%;
  max-width: 500px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  width: 100%;
  margin-left: 10px;
  font-size: 16px;
`;

const UserAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 500;
`;

const Navbar = ({ toggleSidebar }) => {
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]); // State to store search results

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};

	const handleSearch = async () => {
		if (!search.trim()) return; // Avoid empty searches
		try {
			const response = await fetch(`/api/search?term=${encodeURIComponent(search)}`);
			if (!response.ok) throw new Error('Search failed');
			const data = await response.json();
			setSearchResults(data); // Update state with search results
			console.log('Search results:', data);
		} catch (error) {
			console.error('Search error:', error);
		}
	};

	return (
		<NavbarContainer>
			<MenuIcon onClick={toggleSidebar} />
			<Logo to="/">Podcast</Logo>
			<SearchBar>
				<SearchRounded />
				<SearchInput
					placeholder="Search..."
					value={search}
					onChange={handleSearchChange}
					onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
				/>
			</SearchBar>
			<UserAccount>
				<AccountCircleRounded />
				<span>Account</span>
			</UserAccount>
		</NavbarContainer>
	);
};

export default Navbar;