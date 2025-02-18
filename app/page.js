"use client"
import {
	Box,
	Container,
	Typography,
	Card,
	CardContent,
	Link,
	CardMedia,
	ListItemText,
} from "@mui/material"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import HeroSection from "./components/HeroSection"
import BenefitsSection from "./components/BenefitsSection"

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

import Testimonials from "./components/Testimonials"
import FooterComp from "./components/FooterComp"
import Image from "next/image"

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
						<Grid container spacing={3} mt={2}>
							<Grid item xs={12} md={4}>
								<Card>
									<CardMedia
										sx={{ height: 140 }}
										image="/imgs/ground-lesson.jpg"
										title="music lesson"
									/>
									<CardContent>
										<Typography variant="h6" fontWeight="bold">
											Cours en Présentiel
										</Typography>
										<List
											sx={{
												width: "100%",
												maxWidth: 360,
												bgcolor: "background.paper",
											}}
										>
											<ListItem>
												<ListItemText primary="Cours au sol: apprentissage pratique de votre instrument" />
											</ListItem>
											<ListItem>
												<ListItemText primary="Prise de notes pour suivre votre progression" />
											</ListItem>
											<ListItem>
												<ListItemText primary="Théorie musicale et révision de morceaux" />
											</ListItem>
										</List>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={4}>
								<Card>
									<CardMedia
										sx={{ height: 140 }}
										image="/imgs/remote-lesson.jpg"
										title="remote lesson"
									/>
									<CardContent>
										<Typography variant="h6" fontWeight="bold">
											Suivi Vidéo
										</Typography>
										<List
											sx={{
												width: "100%",
												maxWidth: 360,
												bgcolor: "background.paper",
											}}
										>
											<ListItem>
												<ListItemText primary="Vidéo récapitulative courte après chaque courst" />
											</ListItem>
											<ListItem>
												<ListItemText primary="Exercices et conseils pour progresser chaque semaine" />
											</ListItem>
											<ListItem>
												<ListItemText primary=" Accès facile pour revoir les points essentiels" />
											</ListItem>
										</List>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={4}>
								<Card>
									<CardMedia
										sx={{ height: 140 }}
										image="/imgs/group-lesson.jpg"
										title="band lesson, jam session"
									/>
									<CardContent>
										<Typography variant="h6" fontWeight="bold">
											Ateliers avec d'autres musiciens
										</Typography>
										<List
											sx={{
												width: "100%",
												maxWidth: 360,
												bgcolor: "background.paper",
											}}
										>
											<ListItem>
												<ListItemText primary=" Jam session toutes les 2-3 semaines selon le nombre d’élèves" />
											</ListItem>
											<ListItem>
												<ListItemText primary="Mise en pratique collective des morceaux appris" />
											</ListItem>
											<ListItem>
												<ListItemText primary="Développement du jeu en groupe et improvisation" />
											</ListItem>
										</List>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
						<Typography variant="h6" mt={2}>
							Un apprentissage complet, du cours individuel à la pratique
							collective !
						</Typography>
					</Box>

					{/* CALL TO ACTION SECTION */}
					<Box
						textAlign="center"
						my={6}
						py={4}
						sx={{ backgroundColor: "#bbdefb" }}
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
					<Box
						id="contact"
						my={6}
						sx={{ position: "relative", minHeight: "50vh" }}
					>
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
						<Box
							sx={{
								position: "absolute",
								left: "-16px",
								top: "-10%",
								width: "100%",
								zIndex: "-1",
								background: "#e1d9bf",
							}}
						>
							<Image
								src="/imgs/piano-boy.gif"
								width={675}
								height={405}
								lazy="true"
								alt="playing the piano"
							/>
						</Box>
					</Box>
				</Container>
			</main>
			<FooterComp />
		</div>
	)
}
