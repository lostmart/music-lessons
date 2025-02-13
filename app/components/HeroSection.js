import { Box, Button, Link, Typography } from "@mui/material"
import React from "react"
import Image from "next/image"

const HeroSection = () => {
	return (
		<Box
			textAlign="center"
			py={6}
			sx={{
				backgroundColor: "#f5f5f5",
				borderRadius: "8px",
				position: "relative",
				height: "43vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
			id="accueil"
		>
			<Box
				sx={{ position: "absolute", left: "5%", top: "110px" }}
				style={{
					animation:
						"floatAnimation .9s cubic-bezier(0.25, 1, 0.5, 1) infinite",
				}}
			>
				<Image
					// loader={myLoader}
					src="/imgs/note-5.png"
					alt="Picture of the author"
					width={30}
					height={30}
				/>
			</Box>
			<Box
				sx={{ position: "absolute", right: "5%", top: "110px" }}
				style={{
					animation:
						"floatAnimation .9s cubic-bezier(0.25, 1, 0.5, 1) infinite",
				}}
			>
				<Image
					// loader={myLoader}
					src="/imgs/note-4.png"
					alt="Picture of the author"
					width={30}
					height={30}
				/>
			</Box>
			<Typography
				variant="h3"
				fontWeight="bold"
				sx={{ fontFamily: "Barriecito, cursive" }}
			>
				Apprenez la Musique Facilement
			</Typography>
			<Typography
				variant="h6"
				color="textSecondary"
				sx={{ fontFamily: "Comic Neue, cursive", fontWeight: "bold" }}
			>
				Cours personnalisés de piano, de guitare et de batterie pour enfants et
				adultes à Bouafle.
			</Typography>
			<Button variant="contained" color="primary" sx={{ mt: 2 }}>
				<Link
					href="mailto:martinpedraza1979@gmail.com"
					sx={{ color: "#fff", textDecoration: "none" }}
				>
					Réservez un cours gratuit
				</Link>
			</Button>
		</Box>
	)
}

export default HeroSection
