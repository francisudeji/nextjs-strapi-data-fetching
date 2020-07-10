import Layout from '../components/Layout'
import { baseUrl, fetchQuery } from '../utils'
import { MovieCard } from '../components/MovieCard'

export default function Home({ movies }) {
	return (
		<Layout title='Next Movies' description='Watch your next movies'>
			<section className='grid grid-cols-1 sm:grid-cols-2 py-10 gap-1 sm:gap-6 lg:gap-10 items-stretch md:grid-cols-3 lg:grid-cols-4'>
				{movies.map((movie) => (
					<MovieCard movie={movie} baseUrl={baseUrl} />
				))}
			</section>
		</Layout>
	)
}

/**
 * 1. Fetches movies on every request - Ideal for constantly changing data and SSR
 */
// export async function getServerSideProps() {
// 	return {
// 		props: {}
// 	}
// }

export async function getStaticProps() {
	const movies = await fetchQuery('movies')

	return {
		props: {
			movies
		}
	}
}
