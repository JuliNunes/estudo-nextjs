import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

import '@/styles/global.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
