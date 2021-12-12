import parse from 'html-react-parser';

export default function BoxList({ title, list, description }) {
	return (
		<div className="box-list">
			<div className="container">
				<div className="box-list__box">
					<div className="row">
						<div className="col-12">
							<div className="box-list__title">{title}</div>
							<div className="box-list__list">
								{list?.map((item) => (
									<div className="box-list__item">{parse(item)}</div>
								))}
							</div>
							<div className="box-list__description">{description}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}