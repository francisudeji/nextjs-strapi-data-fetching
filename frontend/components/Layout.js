import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children, title, description }) {
	return (
		<>
			<Head>
				<meta name='description' content={description} />
				<title>{title}</title>
			</Head>
			<header className='bg-gray-900 border-b border-gray-700'>
				<div className='container mx-auto px-3 xl:px-20'>
					<div className='flex h-20 items-center justify-center'>
						<Link href='/'>
							<a className='text-red-500 text-4xl font-semibold'>Next Movies</a>
						</Link>
					</div>
				</div>
			</header>
			<main className='bg-gray-900 min-h-screen'>
				<div className='container mx-auto px-3 xl:px-20'>{children}</div>
			</main>
		</>
	)
}
