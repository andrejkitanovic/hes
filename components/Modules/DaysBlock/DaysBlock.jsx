import parse from 'html-react-parser';

export default function DaysBlock({ style, title, days, description }) {
	return (
		<div className="days-block" style={{...style}}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="days-block__title">{title}</div>
					</div>
				</div>

				<div className="days-block__container">
					<div className="days-block__main">
						{days?.map((item, index) => (
							<div className="days-block__single" key={'days-block-day_' + index}>
								<div className="row">
									<div className="col-5">
										<div className="days-block__single-day">{item.day}</div>
									</div>
									<div className="col-7">
										<div className="days-block__single-text">{parse(item.text)}</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="days-block__description">{description && parse(description)}</div>
				</div>
			</div>
		</div>
	);
}
