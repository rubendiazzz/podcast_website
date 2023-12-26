import React, { useState } from 'react';
import styled from 'styled-components';
import {
	HomeRounded,
	CloseRounded,
	SearchRounded,
	FavoriteRounded,
	UploadRounded,
	LightModeRounded,
	LogoutRounded,
} from '@mui/icons-material';
import LogoImage from '../Images/Logo.png';
import { Link } from 'react-router-dom';

// Updated styles with more decoration
const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  border-right: 1px solid ${({ theme }) => theme.soft};
  position: fixed;
  z-index: 10;
  width: 250px;
  transition: 0.3s ease-in-out;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  }
`;

const Logo = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 24px;
  padding: 16px 0px;
  background-color: ${({ theme }) => theme.bg};
  margin-bottom: 20px;
`;

const CloseIcon = styled(CloseRounded)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

const Elements = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.hover};
    color: ${({ theme }) => theme.primary};
  }
`;

const NavText = styled.span`
  font-size: 16px;
`;

const Image = styled.img`
  height: 40px;
`;

const menuItems = [
	{
		link: "/",
		name: "Dashboard",
		icon: <HomeRounded />
	},
	{
		link: "/search",
		name: "Search",
		icon: <SearchRounded />
	},
	{
		link: "/favorites",
		name: "Favorites",
		icon: <FavoriteRounded />
	}
];

const buttons = [
	{
		fun: () => console.log("Upload"),
		name: "Upload",
		icon: <UploadRounded />
	},
	{
		fun: () => console.log("Light Theme"),
		name: "Theme",
		icon: <LightModeRounded />
	},
	{
		fun: () => console.log("Logout"),
		name: "Logout",
		icon: <LogoutRounded />
	}
];

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<MenuContainer isOpen={isOpen}>
			<Logo>
				<Image src={LogoImage} alt="Logo" />
				Podcast
				<CloseIcon onClick={toggleSidebar} />
			</Logo>
			{menuItems.map((item, index) => (
				<Link to={item.link} key={index} style={{ textDecoration: 'none' }}>
					<Elements>
						{item.icon}
						<NavText>{item.name}</NavText>
					</Elements>
				</Link>
			))}
			{buttons.map((item, index) => (
				<Elements key={index} onClick={item.fun}>
					{item.icon}
					<NavText>{item.name}</NavText>
				</Elements>
			))}
		</MenuContainer>
	);
};

export default Sidebar;