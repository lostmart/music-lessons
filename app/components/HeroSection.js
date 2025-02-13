import { Box, Button, Link, Typography } from "@mui/material"
import React from "react"
import Image from "next/image"

const HeroSection = () => {
	return (
		<Box
			textAlign="center"
			py={6}
			sx={{ backgroundColor: "#f5f5f5", borderRadius: 2, position: "relative" }}
			id="accueil"
		>
			<Box
				sx={{ position: "absolute", left: "5%", top: "60px" }}
				className="floatAnimation"
			>
				<Image
					// loader={myLoader}
					src="/imgs/note-5.png"
					alt="Picture of the author"
					width={30}
					height={30}
					/*
                position: absolute;
                left: 5%;
                top: 60px;
                transform: rotate(18deg);
                */
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
