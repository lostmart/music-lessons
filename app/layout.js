import Providers from "./providers"

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<head>
				{/* Primary Meta Tags */}
				<title>Martin Musique - Apprenez & Jouez 🎵</title>
				<meta
					name="description"
					content="Découvrez Martin Musique - Apprenez & Jouez ! Cours de musique personnalisés pour enfants et adultes : piano, guitare, chant et bien plus encore. Apprenez avec plaisir !"
				/>
				<meta
					name="keywords"
					content="école de musique, cours de piano, cours de guitare, apprendre la musique, chant, Martin Musique, musique à domicile, prof de musique"
				/>
				<meta name="author" content="Martin Musique" />
				<meta name="robots" content="index, follow" />

				{/* Open Graph Meta Tags (Facebook, LinkedIn) */}
				<meta
					property="og:title"
					content="Martin Musique - Apprenez & Jouez 🎵"
				/>
				<meta
					property="og:description"
					content="Des cours de musique sur mesure pour tous les âges. Venez apprendre avec Martin Musique !"
				/>
				<meta property="og:image" content="/icons/music-mart.webp" />
				<meta property="og:url" content="https://musicmartin.site" />
				<meta property="og:type" content="website" />

				{/* Twitter Card Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Martin Musique - Apprenez & Jouez 🎵"
				/>
				<meta
					name="twitter:description"
					content="Apprenez la musique facilement avec Martin Musique ! Cours de piano, guitare, chant et plus encore."
				/>
				<meta name="twitter:image" content="/icons/music-mart.webp" />

				{/* Favicon */}
				<link rel="icon" href="/icons/favicon.ico" />
				<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
				<link rel="manifest" href="icons/site.webmanifest" />
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
