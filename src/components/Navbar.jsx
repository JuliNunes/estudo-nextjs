import Link from 'next/link';
import styles from '@/styles/navbar.module.css';

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>LOGO</li>
				<li>
					<Link href='/'>HOME</Link>
				</li>
				<li>
					<Link href='/products/pants'>PANTS</Link>
				</li>
				<li>
					<Link href='/faq'>FAQ</Link>
				</li>
			</ul>
		</nav>
	);
}
