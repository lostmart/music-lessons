import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import React from "react"
import googleReviewsImg from "../../public/imgs/google-reviews.png"
import Image from "next/image"


const Testimonials = () => {
	return (
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
			<Grid
				spacing={3}
				mt={2}
				container
				style={{ gap: "1em" }}
				justifyContent="center"
				alignItems="center"
			>
				<Card sx={{ maxWidth: 380 }}>
					<CardContent sx={{ display: "flex", flexDirection: "column" }}>
						<a
							href="https://g.page/r/CVNLB3lsby3wEAE/review"
							target="_blank"
							style={{ color: "#1976d2", textDecoration: "none" }}
						>
							<Image src={googleReviewsImg} alt="Google Reviews" />
						</a>
						<Typography variant="h6" fontStyle="italic">
							Review on Google
						</Typography>
						<Button>
							<a
								href="https://g.page/r/CVNLB3lsby3wEAE/review"
								target="_blank"
								style={{ color: "#1976d2", textDecoration: "none" }}
							>
								Read more
							</a>
						</Button>
					</CardContent>
				</Card>
				<Card sx={{ maxWidth: 380 }}>
					<CardContent>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.559700454499!2d1.9025301000000001!3d48.961869199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6931495dc49bf%3A0xf02d6f6c79074b53!2sMusic%20Martin!5e0!3m2!1sen!2sfr!4v1739800950781!5m2!1sen!2sfr"
							width="600"
							height="450"
							style={{ border: 0 }}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</CardContent>
				</Card>
			</Grid>
		</Box>
	)
}

export default Testimonials
