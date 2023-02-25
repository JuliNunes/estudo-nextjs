import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Página Principal</title>
				<meta name='keywords' content='Roupas, Camisas, Calçados' />
			</Head>
			<div className={styles.title}>
				<h1>Home Page</h1>
			</div>
		</>
	);
}
