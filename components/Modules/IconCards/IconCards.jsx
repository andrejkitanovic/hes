import Image from 'next/image';

const IconCards = ({ cards }) => {
	return (
		<div className="icon-cards">
			<div className="container">
				<div className="row">
					{cards.map((card) => (
						<div className="col-4">
							<div className="icon-cards__card">
								<div className="icon-cards__card-icon">
									{card.icon && <Image src={card.icon} width={80} height={80} />}
								</div>
								<div className="icon-cards__card-title">{card.header}</div>
								<div className="icon-cards__card-description">{card.description}</div>
								<a className="icon-cards__card-link link">SAZNAJ VIŠE +</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default IconCards;
