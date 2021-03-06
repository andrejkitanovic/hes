import Image from 'next/image';
import parse from 'html-react-parser';

export default function Footer({ socials, copyright }) {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__top">
					<div className="row">
						<div className="col-12 col-md-6">
							<div className="footer__newsletter d-flex align-items-center">
								<Image alt="Newsletter" src="/svgs/envelope.svg" width={45} height={45} />
								<div className="footer__newsletter-info">
									<div className="footer__newsletter-title">Prijavite se na newsletter</div>
									<div className="footer__newsletter-description">i primajte preko email-a ekskluzivne ponude</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<form className="footer__subscribe d-flex align-items-center justify-content-end">
								<input
									className="footer__subscribe-input"
									type="text"
									placeholder="Unesite Vašu E-mail adresu"
									autoComplete="off"
								/>
								<button className="footer__subscribe-button button" type="submit">
									Prijavite Se
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="footer__main">
					<div className="row">
						{socials?.map((social, index) => (
							<div className="col-12 col-md-4" key={'social_' + index}>
								<div className="footer__social">
									<div className="footer__social-icon">
										{social.icon && (
											<Image
												src={social.icon.src}
												alt={social.title}
												width={social.icon.width}
												height={social.icon.height}
											/>
										)}
									</div>
									<div className="footer__social-title">{social.title}</div>
									<a href={social.link} className="footer__social-link">
										{social.name}
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="footer__bottom">
					<div className="col-12">{parse(copyright)}</div>
				</div>
			</div>
		</footer>
	);
}
