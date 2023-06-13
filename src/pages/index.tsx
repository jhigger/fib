import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Fibonacci</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-gray-950">
				<div className="mx-auto flex aspect-video h-screen">
					<div className="h-full w-[61.8%] bg-red-500"></div>
					<div className="flex grow flex-col">
						<div className="h-[61.8%] w-full bg-orange-500"></div>
						<div className="flex grow">
							<div className="flex grow flex-col">
								<div className="flex grow">
									<div className="h-full w-[61.8%] bg-blue-500"></div>
									<div className="flex grow flex-col">
										<div className="h-[61.8%] bg-indigo-500"></div>
										<div className="grow bg-violet-500"></div>
									</div>
								</div>
								<div className="h-[61.8%] bg-green-500"></div>
							</div>
							<div className="w-[61.8%] bg-yellow-500"></div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
