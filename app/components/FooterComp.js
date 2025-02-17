import { Box, Button, Typography } from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import PhoneIcon from "@mui/icons-material/Phone"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"

const FooterComp = () => {
	return (
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
					<Button
						variant="contained"
						startIcon={<AlternateEmailIcon />}
						href="mailto:musicmartin78@gmail.com"
						sx={{ mt: 2, mx: 1 }}
						color="success"
					>
						Mail
					</Button>
					<Button
						variant="contained"
						startIcon={<PhoneIcon />}
						href="tel:+33761726988"
						sx={{ mt: 2, mx: 1 }}
						color="success"
					>
						Appeler
					</Button>
					<Button
						variant="contained"
						color="success"
						startIcon={<WhatsAppIcon />}
						href="https://wa.me/33617226988"
						target="_blank"
						rel="noopener noreferrer"
						sx={{ mt: 2 }}
					>
						WhatsApp
					</Button>
				</Typography>
			</Box>
		</footer>
	)
}

export default FooterComp
