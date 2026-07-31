import { NextApiRequest, NextApiResponse } from 'next';
import { movies } from '@/lib/db';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		return res.status(405).end();
	}

	try {
		await serverAuth(req, res);

		const rawMovieId = Array.isArray(req.query.movieId)
			? req.query.movieId[0]
			: req.query.movieId;
		const movieId = typeof rawMovieId === 'string' ? rawMovieId : undefined;
		const movie = movieId ? await movies.findOne({ $or: [{ _id: movieId }, { id: movieId }] }) : null;

		if (!movie) {
			return res.status(404).json({ error: 'Movie not found' });
		}

		return res.status(200).json(movie);
	} catch (error) {
		console.error(error);
		return res.status(400).end();
	}
}
