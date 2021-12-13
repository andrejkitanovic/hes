export default function Reviews({ style, reviews }) {
	let col = 12;

	if (reviews?.length > 1) {
		col = 6;
	}

	return (
		<div className="reviews" style={{...style}}>
			<div className="container">
				<div className="row">
					{reviews?.map((single, index) => {
						return (
							<div key={'review-single_' + index} className={`col-12 col-md-${col}`}>
								<div className="reviews__single d-flex flex-column justify-content-between">
									<div className="reviews__single-title">{single.title}</div>
									<div className="reviews__single-review">{single.review}</div>
									<div className="reviews__single-author">{single.author}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
