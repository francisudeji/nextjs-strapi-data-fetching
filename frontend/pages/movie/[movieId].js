import Layout from '../../components/Layout'
import Link from 'next/link'
import { baseUrl, fetchQuery } from '../../utils'

export default function Movie({ movie }) {
	return (
		<Layout title={movie.title} description={movie.overview}>
			<div className='pt-6'>
				<Link href='/'>
					<a className='text-red-500'>&larr; Back to home</a>
				</Link>
			</div>
			<section className='flex flex-col md:flex-row md:space-x-6 py-10'>
				<div className='w-full md:w-auto'>
					<img
						className='rounded-lg w-full sm:w-64'
						src={`${baseUrl}${movie.cover.url}`}
						alt={movie.title}
					/>
				</div>
				<div className='w-full md:flex-1 flex flex-col mt-6 md:mt-0'>
					<div className='flex-1'>
						<h2 className='text-white text-2xl font-semibold'>
							{movie.title}{' '}
							<span className='text-gray-400 font-normal'>
								({new Date(movie.release_date).getFullYear()})
							</span>{' '}
						</h2>
						<span className='text-sm text-gray-400 block mt-1'>
							{movie.tagline ?? ''}
						</span>
						{movie.genres.map((genre) => (
							<Link key={genre.name} href={`/genre/${genre.id}`}>
								<a className='rounded-lg inline-block mt-3 text-xs py-1 uppercase tracking wide px-2 bg-red-500 text-white mr-2'>
									{genre.name}
								</a>
							</Link>
						))}
						<p className='text-white text-lg mt-5'>{movie.overview}</p>
					</div>
					<div className='flex sm:items-center flex-col sm:flex-row sm:space-x-6 mt-6 md:mt-0'>
						<div className='flex items-end'>
							<p className='text-white uppercase text-sm tracking-whide'>
								Released on:
							</p>{' '}
							<time
								className='pl-2 text-sm uppercase tracking-wide text-gray-400'
								dateTime={movie.release_date}>
								{new Date(movie.release_date).toDateString()}
							</time>
						</div>
						<div className='flex items-end mt-3 sm:mt-0'>
							<p className='text-white uppercase text-sm tracking-whide'>
								Runtime:
							</p>
							<span className='pl-2 tracking-wide uppercase text-xs text-gray-400'>
								{movie.runtime} mins
							</span>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export async function getStaticProps({ params }) {
	const movie = await fetchQuery('movies', `${params.movieId}`)

	return {
		props: {
			movie
		}
	}
}

export async function getStaticPaths() {
	const movies = await fetchQuery('movies')
	const paths = movies.map((movie) => {
		return {
			params: { movieId: String(movie.id) }
		}
	})

	return {
		paths,
		fallback: false
	}
}
