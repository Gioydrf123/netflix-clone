import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: '/auth',
				permanent: false,
			}
		}
	}
	return {
		props: {}
	}
}

const Profiles = () => {
	const router = useRouter();
	const { data: user } = useCurrentUser();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 0);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="flex items-center h-full justify-center bg-black">
			<div className="flex flex-col">
			<h1 className="text-3xl md:text-6xl text-white text-center">
			Who is watching?
			</h1>
				<div className="flex items-center justify-center gap-8 mt-10">
					<div onClick={() => router.push('/')}>
						<div className="group flex-row w-44 mx-auto">
							<div
							className={`
								w-44
								h-44
								rounded-md
								flex
								items-center
								justify-center
								border-2
								border-transparent
								group-hover:cursor-pointer
								group-hover:border-white
								overflow-hidden
								transition-all
								duration-300
								${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
								`}
								style={{
									transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
									transformOrigin: 'center center',
								}}
								>
								<img 
								src="/images/default-blue.png" 
								alt="Profile"
								className="w-full h-full object-cover"
								/>
							</div>

							<div
							className={`
								mt-4
								text-gray-400
								text-2xl
								text-center
								group-hover:text-white
								transition-all
								duration-300
								${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
								`}
								style={{
									transitionDelay: '0.3s'
								}}
								>
							{user?.name}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Profiles;
