import parse from 'html-react-parser';

export default function DaysBlock({ title, days, description }) {
	return (
		<div className="days-block">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="days-block__title">{title}</div>
					</div>
				</div>

				<div className="days-block__container">
					{days.map((item, index) => (
						<div className="row" key={'days-block-day_' + index}>
							<div className="col-4">
								<div className="days-block__single-day">{item.day}</div>
							</div>
							<div className="col-4">
								<div className="days-block__single-text">{parse(item.text)}</div>
							</div>
						</div>
					))}

					<div className="days-block__description">{parse(description)}</div>
				</div>
			</div>
		</div>
	);
}
