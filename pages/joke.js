export async function getStaticProps() {
	const data = await fetch('https://v2.jokeapi.dev/joke/Any');

	const joke = await data.json();

	return {
		props: { joke },
	};
}

export default function Joke({ joke }) {
	return (
		<>
			<h1>Joke Page</h1>
			<p>{joke.joke}</p>
		</>
	);
}
