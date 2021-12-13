import Image from 'next/image';
import Link from 'next/link';

export default function IconCards({ style, cards }) {
	return (
		<div className="icon-cards" style={{ ...style }}>
			<div className="container">
				<div className="row">
					{cards.map((card, index) => (
						<div key={`icon-cards__card-${index} `} className="col-4">
							<div className="icon-cards__card d-flex flex-column justify-content-between">
								<div className="icon-cards__card-icon">
									{card.icon && <Image src={card.icon} width={80} height={80} alt="Card Icon" />}
								</div>
								<div className="icon-cards__card-title">{card.header}</div>
								<div className="icon-cards__card-description">{card.description}</div>

								{card.href && (
									<Link href={card.href}>
										<a className="icon-cards__card-link link">SAZNAJ VIŠE +</a>
									</Link>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
