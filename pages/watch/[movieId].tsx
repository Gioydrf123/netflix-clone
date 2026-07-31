import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import {AiOutlineArrowLeft} from 'react-icons/ai';

export default function Watch() {
	const router = useRouter();
	const { movieId } = router.query;

	const { data: movie, error } = useSWR(
		movieId ? `/api/movies/${movieId}` : null,
		fetcher
	);

	if (error) return <div className="text-white text-center mt-10">Failed to load movie</div>;
	if (!movie) return <div className="text-white text-center mt-10">Loading...</div>;

	return (
		<div className="h-screen w-screen bg-black">
			<nav
			className="
			fixed
			w-full
			p-4
			z-10
			flex
			flex-row
			items-center
			gap-8
			bg-black
			ng-opacity-70
			"
			>
				<AiOutlineArrowLeft onClick={() => router.push('/')} className="text-white cursor-pointer" size={40}/>
				<p className="text-white text-1xl md:text-3xl font-bold">
					<span className="font-light">
						Watching:&ensp;
					</span>
					{ movie.title}
				</p>
			</nav>
			<video
			autoPlay
			controls
			className="h-full w-full"
			src={movie.videoUrl}></video>
		</div>
	)
}
