import Image from 'next/image';
import Link from 'next/link';

import CartSVG from '../../SVG/CartSVG';

const Header = () => {
	return (
		<header className="header">
			<div className="header__top">
				<div className="header__top-shipping">POŠTARINA OD 195 RSD!</div>
			</div>
			<div className="header__main">
				<div className="container">
					<div className="row">
						<div className="col-1">
							<div className="header__logo">
								<Link href="/" passHref>
									<a>
										<Image src="/svgs/hes-logo.svg" width={60} height={60} />
									</a>
								</Link>
							</div>
						</div>
						<div className="col-10">
							<div className="header__links d-flex align-items-center justify-content-center">
								<Link href="/sta-je-hes">
									<a className="header__link">Šta Je HES</a>
								</Link>
								<Link href="/hocu-da-kupim">
									<a className="header__link">Hoću Da Kupim</a>
								</Link>
								<Link href="/hocu-da-prodam">
									<a className="header__link">Hoću Da Prodam</a>
								</Link>
								<Link href="/ponuda">
									<a className="header__button">Ponuda</a>
								</Link>
								<Link href="/registracija">
									<a className="header__link">Registracija</a>
								</Link>
								<Link href="/instrukcije">
									<a className="header__link">Instrukcije</a>
								</Link>
								<Link href="/kontakt">
									<a className="header__link">Kontakt</a>
								</Link>
							</div>
						</div>
						<div className="col-1">
							<div className="header__cart d-flex align-items-center justify-content-end">
								<CartSVG />
								<div className="header__cart-count d-flex align-items-center justify-content-center">0</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="header__bottom">
				<form className="header__search d-flex align-items-center justify-content-center">
					<input
						className="header__search-input"
						type="text"
						placeholder="Pretražite proizvode..."
						autoComplete="off"
					/>
					<button className="header__search-button" type="submit">
						Pronađi
					</button>
				</form>
			</div>
		</header>
	);
};

export default Header;
