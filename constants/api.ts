export const API_ROUTES = {
	  RANDOM: '/api/random',
	    MOVIES: '/api/movies',
	      MOVIE: (id: string) => `/api/movies/${id}`,
		        FAVORITES: '/api/favorites',
	        CURRENT_USER: '/api/current',
		  FAVORITE: '/api/favorite',
		    REGISTER: '/api/register',
} as const;
