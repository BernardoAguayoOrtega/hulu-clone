//import React
import React from 'react';
//import icons
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutLineIcon from '@material-ui/icons/PersonOutline';
//import styles
import './styles.css';

//create and export header component
export const Header = () => {
	return (
		<header className={'header'}>
			{/*'the icons of the header'*/}
			<div className='header__icons'>
				<HomeIcon />
				<FlashOnIcon />
				<LiveTvIcon />
				<VideoLibraryIcon />
				<SearchIcon />
				<PersonOutLineIcon />
			</div>
		</header>
	);
};
