import parse from 'html-react-parser';

export default function Pricelist({ style, label, title, prices, description }) {
	return (
		<div className="pricelist" style={{ ...style }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="pricelist__label">{label}</div>
						<div className="pricelist__title">{title}</div>
					</div>
				</div>
				<div className="row">
					{prices?.map((single, index) => (
						<div className="col-12 col-lg-4" key={'pricelist-single_' + index}>
							<div className={`pricelist__single${single.active ? ' active' : ''}`}>
								<div className="pricelist__single-title">{single.title}</div>
								<div className="pricelist__single-prices">
									{single.list?.map((price, index) => (
										<div key={'pricelist-single-price_' + index} className="pricelist__single-price">
											{price && parse(price)}
										</div>
									))}
								</div>
								<div className="pricelist__single-description">{single.description}</div>
							</div>
						</div>
					))}
				</div>
				<div className="row">
					<div className="col-12">
						<div className="pricelist__description">{description && parse(description)}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
