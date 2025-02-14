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

export default function Home() {
	return (
		<div>
			<main>
				<HeroSection />
				<Container maxWidth="lg">
					<BenefitsSection />

					{/* TESTIMONIALS SECTION */}
					<Box component="section" my={6} textAlign="center" id="témoignages">
						<Typography variant="h4" sx={{ fontFamily: "Barriecito, cursive" }}>
							Ce que disent nos élèves
						</Typography>
						<Grid container spacing={3} mt={2}>
							{[
								{
									quote:
										"Mon fils adore ses cours de piano ! Il progresse rapidement et s’amuse beaucoup.",
									author: "Sophie, maman de Lucas (9 ans)",
								},
								{
									quote:
										"Grâce aux cours de guitare, j’ai enfin réalisé mon rêve de jouer mes chansons préférées !",
									author: "Antoine, 34 ans",
								},
							].map((testimonial, index) => (
								<Grid item xs={12} md={6} key={index}>
									<Card>
										<CardContent>
											<Typography variant="body1" fontStyle="italic">
												“{testimonial.quote}”
											</Typography>
											<Typography
												variant="caption"
												display="block"
												mt={1}
												color="textSecondary"
											>
												- {testimonial.author}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					</Box>

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
			{/* FOOTER */}
			<footer>
				<Box
					textAlign="center"
					py={4}
					sx={{
						backgroundColor: "#212121",
						color: "#fff",
					}}
				>
					<Typography variant="body2">
						&copy; 2025 École de Musique - Tous droits réservés
					</Typography>
					<Typography variant="body2">
						📞 07 61 72 69 88 | 📧 musicmartin78@gmail.com |
					</Typography>
				</Box>
			</footer>
		</div>
	)
}
