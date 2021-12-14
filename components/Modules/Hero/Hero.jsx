import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ style, header, description, button, image }) {
	return (
		<section className="hero" style={{ ...style }}>
			<div className="container">
				<div className="row">
					<div className="col-8">
						<div className="hero__main d-flex flex-column justify-content-center">
							<h1 className="hero__header">{header}</h1>
							<div className="hero__description">{description}</div>
							<div className="hero__button-wrapper">
								{button && (
									<Link href={button.href}>
										<div className="hero__button button">{button.text}</div>
									</Link>
								)}
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="hero__image text-align-right">
							{image && <Image src={image} width="325" height="619" alt="Big Avatar" />}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
