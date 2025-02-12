"use client" // Mark this as a Client Component
import { Container } from "@mui/material"
import Button from "@mui/material/Button"

export default function Home() {
	return (
		<div>
			<main>
				<Container>
					<h1 className="">Hello now</h1>
					<Button variant="contained" color="primary">
						Nunca temas a la noche
					</Button>
				</Container>
			</main>
			<footer>this is the footer !!!</footer>
		</div>
	)
}
