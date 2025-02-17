"use client"
import {
	Box,
	Container,
	Typography,
	Card,
	CardContent,
	Link,
} from "@mui/material"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import HeroSection from "./components/HeroSection"
import BenefitsSection from "./components/BenefitsSection"

import Testimonials from "./components/Testimonials"
import FooterComp from "./components/FooterComp"

export default function Home() {
	return (
		<div>
			<main>
				<HeroSection />
				<Container maxWidth="lg">
					<BenefitsSection />
					<Testimonials />

					<Box component="section" id="services" my={6} textAlign="center">
						<Typography variant="h4" sx={{ fontFamily: "Barriecito, cursive" }}>
							Services
						</Typography>
					</Box>

					{/* CALL TO ACTION SECTION */}
					<Box
						textAlign="center"
						my={6}
						py={4}
						sx={{ backgroundColor: "#e3f2fd", borderRadius: 2 }}
					>
						<Typography variant="h4">
							Prêt à commencer votre voyage musical ?
						</Typography>
						<Typography variant="h6" color="textSecondary">
							Réservez votre premier cours gratuit dès maintenant !
						</Typography>
						<Button
							variant="contained"
							color="primary"
							href="#contact"
							sx={{ mt: 2 }}
						>
							Je veux apprendre la musique
						</Button>
					</Box>

					{/* FAQ SECTION */}
					<Box my={6}>
						<Typography
							variant="h4"
							sx={{ fontFamily: "Barriecito, cursive" }}
							textAlign="center"
						>
							Questions Fréquentes
						</Typography>
						{[
							{
								question: "Quel âge faut-il avoir pour commencer ?",
								answer:
									"Les cours sont ouverts aux enfants dès 9 ans ainsi qu’aux adultes.",
							},
							{
								question: "Quels instruments sont disponibles ?",
								answer:
									"Nous proposons des cours de piano, guitare et batterie, mais d’autres instruments sont possibles sur demande.",
							},
							{
								question: "Comment réserver un cours ?",
								answer:
									"Réservations selon disponibilités. N’hésitez pas à me contacter par téléphone: Martin.",
							},
						].map((faq, index) => (
							<Box key={index} mt={3}>
								<Typography variant="h6" fontWeight="bold">
									{faq.question}
								</Typography>
								<Typography variant="body1">{faq.answer}</Typography>
							</Box>
						))}
					</Box>

					{/* CONTACT SECTION */}
					<Box id="contact" my={6}>
						<Typography
							variant="h4"
							sx={{ fontFamily: "Barriecito, cursive" }}
							textAlign="center"
						>
							Contactez-nous
						</Typography>
						<Button
							variant="contained"
							color="primary"
							sx={{ mt: 2, mx: "auto", display: "block" }}
						>
							<Link
								href="mailto:martinpedraza1979@gmail.com"
								sx={{ color: "#fff", textDecoration: "none" }}
							>
								CONTACT
							</Link>
						</Button>
					</Box>
				</Container>
			</main>
			<FooterComp />
		</div>
	)
}
