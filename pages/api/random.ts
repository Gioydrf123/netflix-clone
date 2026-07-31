import {NextApiRequest, NextApiResponse} from 'next';
import {movies} from '@/lib/db';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') return res.status(405).end();
	try {
		await serverAuth(req, res);
		const allMovies = await movies.find({});
		const randomIndex = Math.floor(Math.random() * allMovies.length);
		return res.status(200).json(allMovies[randomIndex]);
	} catch (error) {
		console.error(error);
		return res.status(400).end();
	}
}
