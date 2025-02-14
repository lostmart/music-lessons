"use client"

import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Image from "next/image"
import { Link } from "@mui/material"
import theme from "../theme"

const drawerWidth = 240
const navItems = ["Accueil", "Témoignages", "Services"]

function DrawerAppBar(props) {
	const { window } = props
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState)
	}

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: "center" }}
			role="presentation"
			aria-labelledby="drawer-title"
		>
			<Box sx={{ pt: 2 }}>
				<Image
					src="/icons/android-chrome-192x192.png"
					alt="logo Martin Music"
					width={30}
					height={30}
				/>
			</Box>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }} tabIndex={0}>
							<a
								href={`#${item.toLowerCase()}`}
								style={{ color: "#000", textDecoration: "none" }}
							>
								{item}
							</a>

							{/* <ListItemText primary={item} /> */}
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Link
				href="mailto:martinpedraza1979@gmail.com"
				sx={{ color: "#000", textDecoration: "none" }}
			>
				CONTACT
			</Link>
		</Box>
	)

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar component="nav">
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						aria-controls="drawer"
						aria-expanded={mobileOpen}
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "block" },
							maxWidth: "32px",
						}}
					>
						<Image
							src="/icons/android-chrome-192x192.png"
							alt="logo Martin Music"
							width={30}
							height={30}
						/>
					</Box>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{navItems.map((item) => (
							<Button key={item} sx={{ color: "#fff" }} tabIndex={0}>
								<a
									href={`#${item.toLowerCase()}`}
									style={{ color: "#fff", textDecoration: "none" }}
								>
									{item}
								</a>
							</Button>
						))}
					</Box>
					<Box>
						<Link
							href="mailto:martinpedraza1979@gmail.com"
							sx={{ color: "#fff", textDecoration: "none" }}
						>
							CONTACT
						</Link>
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					id="drawer"
				>
					{drawer}
				</Drawer>
			</nav>
			<Box component="main">
				<Toolbar />
			</Box>
		</Box>
	)
}

export default DrawerAppBar
