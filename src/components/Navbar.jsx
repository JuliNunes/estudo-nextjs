import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.nav}>
				<li>LOGO</li>
				<li>
					<Link href='/' className={styles.navlink}>
						HOME
					</Link>
				</li>
				<li>
					<Link href='/products/pants' className={styles.navlink}>
						PANTS
					</Link>
				</li>
				<li>
					<Link href='/faq' className={styles.navlink}>
						FAQ
					</Link>
				</li>
			</ul>
		</nav>
	);
}
