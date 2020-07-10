import Layout from '../../components/Layout'
import Link from 'next/link'
import { fetchQuery } from '../../utils'
import { MovieCard } from '../../components/MovieCard'

export default function Genre({ genre }) {
	return (
		<Layout
			title={`${genre.name} movies`}
			description={`Watch ${genre.name} movies`}>
			<div className='pt-6 flex items-center space-x-3'>
				<Link href='/'>
					<a className='text-red-500'>Home ></a>
				</Link>
				<Link href='/genres'>
					<a className='text-red-500'>genres ></a>
				</Link>
				<Link href={`/genres/${genre.id}`}>
					<a className='text-red-500'>{genre.name}</a>
				</Link>
			</div>
			<section className='grid grid-cols-1 sm:grid-cols-2 py-10 gap-1 sm:gap-6 lg:gap-10 items-stretch md:grid-cols-3 lg:grid-cols-4'>
				{genre.movies.map((movie) => (
					<MovieCard key={movie.title} movie={movie} />
				))}
			</section>
		</Layout>
	)
}

export async function getStaticProps({ params }) {
	const genre = await fetchQuery('genres', `${params.genreId}`)

	return {
		props: {
			genre
		}
	}
}

export async function getStaticPaths() {
	const genres = await fetchQuery('genres')
	const paths = genres.map((genre) => {
		return {
			params: { genreId: String(genre.id) }
		}
	})

	return {
		paths,
		fallback: false
	}
}
