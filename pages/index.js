import Head from 'next/head';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import IconCards from '../components/IconCards/IconCards';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Naslovna - HES</title>
				<meta name="description" content="Mesto gde se najbrže prodaje i najjeftinije kupuje!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>
				<Hero header="PRODAJ. KUPI. PONOVI." description="Mesto gde se najbrže prodaje i najjeftinije kupuje!" />
				<IconCards
					cards={[
						{
							icon: '/svgs/info-icon.svg',
							header: 'Šta je HES?',
							description: 'HES je tržište koje formiramo za Vas, svake nedelje sa drugom temom, a u ponudi…',
							link: '#',
						},
						{
							icon: '/svgs/clothes-icon.svg',
							header: 'Šta mogu da prodam?',
							description: 'Za sada, preko HES-a možete prodati dečiju odeću i obuću (do 20 EUR) kao i opremu…',
							link: '#',
						},
						{
							icon: '/svgs/question-icon.svg',
							header: 'Kako HES funkcioniše?',
							description:
								'Od ponedeljka do četvrtka traju prijave za poziciju prodavca, u četvrtak se šalju pripremljeni kolaži…',
							link: '#',
						},
					]}
				/>
			</main>

			<footer></footer>
		</div>
	);
}
