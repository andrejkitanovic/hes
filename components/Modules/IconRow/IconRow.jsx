import Image from 'next/image';

export default function IconRow({ cards }) {
	return (
		<div className="icon-row">
			<div className="container">
				<div className="row justify-content-center">
					{cards.map((card, index) => (
						<div key={`icon-row__row-${index}`} className="col-4">
							<div className="icon-row__row">
								<div className="icon-row__row-icon">
									{card.icon && <Image src={card.icon} width={50} height={50} alt="Card Icon"/>}
								</div>
								<div className="icon-row__row-title">{card.header}</div>
								<a href={card.href} className="icon-row__row-link">
									{card.text}
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
