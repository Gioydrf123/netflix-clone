import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { users } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') return res.status(405).end();
	try {
		const { email, name, password } = req.body;

		const existing = await users.findOne({ email });
		if (existing) {
			return res.status(422).json({ error: 'Email already exists' });
		}

		const hashedPassword = await bcrypt.hash(password, 12);
		const newUser = await users.insert({
			name,
			email,
			hashedPassword,
			image: '',
			emailVerified: null,
			createdAt: new Date(),
			updatedAt: new Date(),
			favoriteIds: [],
		});

		return res.status(200).json(newUser);
	} catch (error) {
		console.error(error);
		return res.status(400).json({ error: 'Something went wrong' });
	}
}
