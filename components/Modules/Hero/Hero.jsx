import Image from 'next/image';

export default function Hero({ header, description, button, image }) {
	return (
		<section className="hero">
			<div className="container">
				<div className="row">
					<div className="col-8">
						<div className="hero__main d-flex flex-column justify-content-center">
							<h1 className="hero__header">{header}</h1>
							<div className="hero__description">{description}</div>
							<div className="hero__button-wrapper">
								<div className="hero__button button">PRIDRUŽI SE I TI!</div>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="hero__image text-align-right">
							{image && <Image src={image} width="325" height="619" />}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
