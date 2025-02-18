import { Box } from "@mui/material"

const Spinner = () => {
	return (
		<Box
			sx={{
				position: "absolute",
				inset: "0",
				width: "100dvw",
				height: "90dvh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box className="spinner"></Box>
		</Box>
	)
}

export default Spinner
