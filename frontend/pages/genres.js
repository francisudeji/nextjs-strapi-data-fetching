import Layout from '../components/Layout'
import { fetchQuery } from '../utils'
import Link from 'next/link'

export default function Genres({ genres }) {
	return (
		<>
			<Layout
				title='Movies Genres'
				description={`Watch your next movies from ${genres.length} genres`}>
				<div className='pt-6 flex items-center space-x-3'>
					<Link href='/'>
						<a className='text-red-500'>&larr; Back to home</a>
					</Link>
				</div>

				<section className='grid grid-cols-1 space-y-6 sm:space-y-0 sm:grid-cols-2 py-10 gap-1 sm:gap-6 lg:gap-10 items-stretch md:grid-cols-3 lg:grid-cols-4'>
					{genres.map((genre) => (
						<div key={genre.name} className='flex flex-col'>
							<Link href={`/genre/${genre.id}`}>
								<a className='rounded-lg shadow-lg bg-gray-800 px-3 py-10 flex items-center justify-center text-center text-red-500 text-3xl'>
									{genre.name}
									<br />({genre.movies.length})
								</a>
							</Link>
						</div>
					))}
				</section>
			</Layout>
		</>
	)
}

export async function getStaticProps() {
	const genres = await fetchQuery('genres')

	return {
		props: {
			genres
		}
	}
}
