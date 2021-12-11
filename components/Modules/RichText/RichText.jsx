const RichText = ({ children }) => {
	return (
		<div className="rich-text">
			<div className="container">
				<div className="row">
					<div className="col-12">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default RichText;
