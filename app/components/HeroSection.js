import { Box, Button, Link, Typography } from "@mui/material"
import React from "react"
import Image from "next/image"
import cloudBack from "../../public/imgs/cloudBack.png"
import cloudFront from "../../public/imgs/cloudFront.png"

const HeroSection = () => {
	return (
		<Box
			textAlign="center"
			py={6}
			px={2}
			component="section"
			sx={{
				backgroundColor: "#bbdefb",
				position: "relative",
				overflow: "hidden",
			}}
			id="accueil"
		>
			<Box
				sx={{ position: "absolute", left: "4%" }}
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
				sx={{ position: "absolute", right: "4%" }}
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
			<Box
				sx={{
					position: "relative",
					overflow: "hidden",
					width: "100%",
					maxWidth: "1200px",
					margin: "0 auto",
					minHeight: "52dvh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						width: "100%",
						"@media (min-width: 600px)": {
							maxWidth: "50%",
							display: "block",
						},
					}}
				>
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
						Cours personnalisés de piano, de guitare et de batterie pour enfants
						et adultes à Bouafle.
					</Typography>
					<Button variant="contained" color="primary" sx={{ mt: 4, mb: 5 }}>
						<Link
							href="mailto:martinpedraza1979@gmail.com"
							sx={{ color: "#fff", textDecoration: "none" }}
						>
							Réservez un cours gratuit
						</Link>
					</Button>
				</Box>
				<Box
					sx={{
						display: "none",
						"@media (min-width: 600px)": {
							display: "block",
						},
					}}
				>
					<Image
						// loader={myLoader}
						src="/imgs/boy-guitar.png"
						alt="Picture of the author"
						width={230}
						height={492}
					/>
				</Box>
			</Box>
			<Box
				sx={{
					position: "absolute",
					width: "100vw",
					bottom: "-38px",
					left: "-8px",
					zIndex: "1",
				}}
			>
				<Image
					src={cloudBack}
					alt="white clouds background"
					style={{
						objectFit: "contain",
						width: "100%",
						height: "auto",
						minWidth: "700px",
						color: "transparent",
						position: "absolute",
						top: "-6px",
						zIndex: "-1",
					}}
					width={380}
					height={42.34}
					sizes="(max-width: 490px) 100vw, 1440px"
				/>
				<Image
					src={cloudFront}
					alt="white clouds"
					style={{
						objectFit: "contain",
						width: "100%",
						height: "auto",
						minWidth: "490px",
					}}
					width={380}
					height={82.79}
					sizes="(max-width: 490px) 100vw, 1440px"
				/>
			</Box>
		</Box>
	)
}

export default HeroSection
