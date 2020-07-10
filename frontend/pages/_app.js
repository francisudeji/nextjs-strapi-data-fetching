import 'tailwindcss/dist/tailwind.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return (
		<>
			<html lang='en'>
				<Head>
					<link rel='icon' href='/favicon.ico' />
					<title>App</title>
				</Head>
			</html>
			<Component {...pageProps} />
		</>
	)
}
