import {NextApiRequest, NextApiResponse} from 'next';
import {without} from 'lodash';
import {users, movies} from '@/lib/db';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === 'POST') {
			const { currentUser } = await serverAuth(req, res);
			const { movieId } = req.body;

			const existingMovie = await movies.findOne({ _id: movieId });
			if (!existingMovie) throw new Error('Invalid Id');

			if (!currentUser.favoriteIds.includes(movieId)) {
				const updatedUser = await users.update(
					{_id: currentUser._id },
					{$push: { favoriteIds: movieId} },
					{returnUpdatedDocs: true}
				);
				return res.status(200).json(updatedUser);
			}
			return res.status(200).json(currentUser);
		}

		if (req.method === 'DELETE') {
			const {currentUser} = await serverAuth(req, res);
			const {movieId} = req.body;

			const existingMovie = await movies.findOne({ _id: movieId });
			if (!existingMovie) throw new Error('Invalid ID');

			const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);
			const updatedUser = await users.update(
				{_id: currentUser._id},
				{$set: {favoriteIds: updatedFavoriteIds}},
				{returnUpdatedDocs: true}
			);
			return res.status(200).json(updatedUser);
		}

		return res.status(405).end();
	} catch (error) {
		console.error(error);
		return res.status(400).json({ error: error.message || 'Something went wrong' });
	}
}
