import { Box, Card, CardContent, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import Image from "next/image"

const BenefitsSection = () => {
	return (
		<Box component="section" my={6} sx={{ position: "relative" }}>
			<Box
				sx={{
					position: "absolute",
					width: "100vw",
					top: "-78px",
					left: "-17px",
					zIndex: "1",
				}}
			>
				<Image
					src="/imgs/cloudFront.png"
					alt="Picture of the author"
					style={{ objectFit: "contain", width: "100%", height: "100%" }}
					width={375}
					height={200}
				/>
			</Box>
			<Typography
				variant="h4"
				textAlign="center"
				sx={{ fontFamily: "Barriecito, cursive" }}
			>
				Pourquoi choisir nos cours ?
			</Typography>
			<Grid container spacing={3} mt={2}>
				{[
					{
						title: "🎸 Apprentissage ludique",
						desc: "Une méthode adaptée aux débutants et avancés pour un progrès rapide.",
					},
					{
						title: "📍 À domicile ou en ligne",
						desc: "Flexibilité totale pour apprendre où vous voulez.",
					},
					{
						title: "👨‍🎓 Enseignement personnalisé",
						desc: "Chaque élève reçoit un programme adapté à son niveau et à ses objectifs.",
					},
				].map((benefit, index) => (
					<Grid item xs={12} md={4} key={index}>
						<Card sx={{ minHeight: "100%" }}>
							<CardContent>
								<Typography variant="h6" fontWeight="bold">
									{benefit.title}
								</Typography>
								<Typography variant="body1">{benefit.desc}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default BenefitsSection
