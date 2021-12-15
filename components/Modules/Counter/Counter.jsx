import Image from 'next/image';

export default function Counter({ style, list }) {
	return (
		<div className="counter" style={{ ...style }}>
			<div className="container">
				<div className="counter__container">
					<div className="row">
						{list?.map((item, index) => (
							<div className="col-12 col-md-4" key={'counter-item_' + index}>
								<div className="counter__item">
									<div className="counter__item-icon">
										{item.icon && <Image src={item.icon.src} width={item.icon.width} height={item.icon.height} alt={item.icon.alt} />}
									</div>
									<div className="counter__item-number">{item.number}+</div>
									<div className="counter__item-text">{item.text}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
