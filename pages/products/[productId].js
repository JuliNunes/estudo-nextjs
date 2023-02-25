import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Product() {
	const router = useRouter();
	const productId = router.query.productId;

	return (
		<>
			<h1>Produto número {productId}</h1>
			<Link href='/products'>Voltar</Link>
		</>
	);
}
