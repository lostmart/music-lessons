"use client"

import { useState } from "react"
import { TextField, Button, Box } from "@mui/material"

export default function ContactForm() {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" })
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)

		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		})

		if (res.ok) {
			setSuccess("Message envoyé !")
			setFormData({ name: "", email: "", message: "" })
		} else {
			setSuccess("Erreur, veuillez réessayer.")
		}

		setLoading(false)
	}

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
				maxWidth: 500,
				margin: "auto",
				mt: 3,
			}}
		>
			<TextField
				label="Nom"
				variant="outlined"
				required
				value={formData.name}
				onChange={(e) => setFormData({ ...formData, name: e.target.value })}
			/>
			<TextField
				label="Email"
				variant="outlined"
				type="email"
				required
				value={formData.email}
				onChange={(e) => setFormData({ ...formData, email: e.target.value })}
			/>
			<TextField
				label="Message"
				variant="outlined"
				multiline
				rows={4}
				required
				value={formData.message}
				onChange={(e) => setFormData({ ...formData, message: e.target.value })}
			/>
			<Button
				variant="contained"
				color="primary"
				type="submit"
				disabled={loading}
			>
				{loading ? "Envoi..." : "Envoyer"}
			</Button>
			{success && <p>{success}</p>}
		</Box>
	)
}
