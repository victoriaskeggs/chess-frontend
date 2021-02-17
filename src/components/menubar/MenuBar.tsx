import { AppBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const MenuBar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton className="MenuButton" edge="start" color="inherit" aria-label="menu" >
					<MenuIcon />
				</IconButton>
				<Typography className="MenuText" variant="h6">News</Typography>
				<Button className="LoginButton" color="inherit" >Login</Button>
			</Toolbar>
		</AppBar>
	);
};

export default MenuBar;