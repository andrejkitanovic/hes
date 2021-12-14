import Image from 'next/image';
import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { CartSVG } from '../../Globals/SVGS/SVGS';
import { openCart } from '../../../store/actions';

export default function Header({ banner, logo, navigation, active }) {
	const dispatch = useDispatch();
	return (
		<header className="header">
			<div className="header__top">
				{banner && (
					<div className="header__top-shipping" style={{ ...banner.style }}>
						{banner.title}
					</div>
				)}
			</div>
			<div className="header__main">
				<div className="container">
					<div className="row">
						<div className="col-1">
							<div className="header__logo">
								<Link href="/" passHref>
									<a>{logo && <Image src={logo.src} width={logo.width} height={logo.height} alt="HES Logo" />}</a>
								</Link>
							</div>
						</div>
						<div className="col-10">
							<div className="header__links d-flex align-items-center justify-content-center">
								{navigation?.map((navItem, index) => {
									if (navItem.type === 'link') {
										return (
											<Link key={`navitem_${index}`} href={navItem.href}>
												<a className={`header__link${active === navItem.href ? ' active' : ''}`}>{navItem.title}</a>
											</Link>
										);
									} else if (navItem.type === 'dropdown-button') {
										return (
											<div className="header__button-wrapper" key={`navitem_${index}`}>
												<a href={navItem.href} className="header__button">
													{navItem.title}
												</a>

												{navItem.dropdown && (
													<div className="header__button-dropdown">
														{navItem.dropdown?.map((single, index) => {
															return (
																<Link href={single.href} key={'navitem_dropdown-' + index} passHref>
																	<div className="header__dropdown-holder d-flex align-items-center justify-content-center">
																		{single.title}

																		{single.dropdown && (
																			<div className="header__button-indent-dropdown">
																				{single.dropdown?.map((indent, index) => {
																					return (
																						<Link href={indent.href} key={'navitem_indent-' + index} passHref>
																							<div
																								className={`header__dropdown-link${
																									indent.active ? ' active' : ''
																								} d-flex align-items-center justify-content-center`}
																							>
																								{indent.title}
																							</div>
																						</Link>
																					);
																				})}
																			</div>
																		)}
																	</div>
																</Link>
															);
														})}
													</div>
												)}
											</div>
										);
									}
								})}
							</div>
						</div>
						<div className="col-1">
							<div className="header__cart d-flex align-items-center justify-content-end">
								<CartSVG width={26} height={26} onClick={() => dispatch(openCart())} />
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
}
