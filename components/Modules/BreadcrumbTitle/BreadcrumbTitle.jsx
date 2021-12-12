const BreadcrumbTitle = ({ title }) => {
	return (
		<div className="breadcrumb-title">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="breadcrumb-title__breadcrumb">
							<div className="breadcrumb-title__breadcrumb-link">Instrukcije</div>
						</div>
						<h1 className="breadcrumb-title__title">{title}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BreadcrumbTitle;
