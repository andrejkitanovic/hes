import parse from 'html-react-parser';

const RichText = ({ children }) => {
	return (
		<div className="rich-text">
			<div className="container">
				<div className="row">
					<div className="col-12">{parse(children)}</div>
				</div>
			</div>
		</div>
	);
};

export default RichText;
