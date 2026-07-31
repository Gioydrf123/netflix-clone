const { movies } = require('../lib/db');

const movieData = [
	{
		title: "Spring",
		description: "La storia poetica di una giovane pastorella e del suo cane. Insieme affrontano antichi spiriti della natura per superare il dolore e permettere il normale e continuo ciclo delle stagioni.",
		videoUrl: "/film_videos/Spring.mp4",
		thumbnailUrl: "/film_images/Spring.jpg",
		genre: "Adventure",
		duration: "7 minutes"
	},
	{
		title: "Cosmos Laundromat",
		description: "Su un'isola desolata, uno strano venditore dà una nuova possibilità a una rassegnata pecora suicida offrendogli il dono di una vita.",
		videoUrl: "/film_videos/CosmosLaundromat.mp4",
		thumbnailUrl: "/film_images/CosmosLaundromat.jpg",
		genre: "Action",
		duration: "12 minutes"
	},
	{
		title: "Big Buck Bunny",
		description: "Tre roditori si divertono a tormentare le creature della foresta. Tuttavia, quando se la prendono con un coniglietto, lui decide di dare loro una lezione.",
		videoUrl: "/film_videos/BigBuckBunny.mp4",
		thumbnailUrl: "/film_images/BigBuckBunny.png",
		genre: "Comedy",
		duration: "10 minutes"
	},
	{
		title: "Sintel",
		description: "Sintel, una giovane donna solitaria, aiuta un drago – che chiama Scales – e stringe amicizia con lui. Tuttavia, quando il drago viene rapito da un esemplare adulto, Sintel decide di intraprendere una pericolosa missione per ritrovare il suo amico perduto.",
		videoUrl: "/film_videos/Sintel.mp4",
		thumbnailUrl: "/film_images/Sintel.png",
		genre: "Adventure",
		duration: "15 minutes"
	},
	{
		title: "Tears of Steel",
		description: "In un futuro apocalittico, un gruppo di soldati e scienziati si rifugia ad Amsterdam per cercare di fermare un esercito di robot che minaccia il pianeta.",
		videoUrl: "/film_videos/TearsofSteel.mp4",
		thumbnailUrl: "/film_images/TearsofSteel.png",
		genre: "Action",
		duration: "12 minutes"
	},
	{
		title: "Elephant's Dream",
		description: "Gli amici Proog ed Emo viaggiano tra le pieghe di una Macchina apparentemente infinita, esplorando l'oscuro e contorto intreccio di cavi, ingranaggi e ruote dentate, finché un momento di conflitto non smentisce tutte le loro convinzioni.",
		videoUrl: "/film_videos/ElephantsDream.mp4",
		thumbnailUrl: "/film_images/ElephantsDream.jpg",
		genre: "Sci-Fi",
		duration: "15 minutes"
	}
];

async function seedIfEmpty() {
	try {
		const count = await movies.count({});
		if (count === 0) {
			console.log('Database vuoto, inserisco i film...');
			for (const movie of movieData) {
				await movies.insert(movie);
			}
			console.log('Film inseriti con successo!');
		} else {
			console.log(`Database già popolato (${count} film trovati), salto il seed.`);
		}
	} catch (error) {
		console.error('Errore durante il seed:', error);
		process.exit(1);
	}
	process.exit(0);
}

seedIfEmpty();
