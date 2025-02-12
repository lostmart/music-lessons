"use client" // Mark this as a Client Component

import * as React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"

// Create an Emotion cache
const cache = createCache({
	key: "css",
	prepend: true,
})

// Create a theme instance
const theme = createTheme({
	palette: {
		mode: "light", // or 'dark'
	},
})

export default function Providers({ children }) {
	return (
		<CacheProvider value={cache}>
			<ThemeProvider theme={theme}>
				<CssBaseline /> {/* Normalize CSS and apply baseline styles */}
				{children}
			</ThemeProvider>
		</CacheProvider>
	)
}
