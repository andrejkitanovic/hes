import Image from 'next/image';

const Hero = ({ header, description, button, image }) => {
	return (
		<section className="hero">
			<div className="container">
				<div className="row">
					<div className="col-8">
						<div className="hero__main d-flex flex-column justify-content-center">
							<h1 className="hero__header">PRODAJ. KUPI. PONOVI.</h1>
							<div className="hero__description">Mesto gde se najbrže prodaje i najjeftinije kupuje!</div>
							<div className="hero__button-wrapper">
								<div className="hero__button button">PRIDRUŽI SE I TI!</div>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="hero__image text-align-right">
							<Image src="/images/avatar.png" width="325" height="619" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
