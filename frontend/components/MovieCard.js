import Link from 'next/link'

export function MovieCard({ movie, baseUrl }) {
	return (
		<Link key={movie.title} href={`/movie/${movie.id}`}>
			<a className='flex flex-col overflow-hidden mt-6'>
				<img
					className='block w-full flex-1 rounded-lg'
					src={`${baseUrl}${movie.cover.url}`}
					alt={movie.title}
				/>
				<h2 className='text-red-500 mt-3 text-center justify-end text-lg'>
					{movie.title}
				</h2>
			</a>
		</Link>
	)
}
