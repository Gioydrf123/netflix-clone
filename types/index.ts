export interface Movie {
	_id: string;
	id?: string;
	title: string;
	description: string;
	videoUrl: string;
	thumbnailUrl: string;
	genre: string;
	duration: string;
}

export interface User {
	_id: string;
	name: string;
	email: string;
	image?: string;
	favoriteIds: string[];
	hashedPassword?: string;
}
