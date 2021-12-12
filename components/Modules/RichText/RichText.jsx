import parse from 'html-react-parser';

export default function RichText({ children }) {
	return (
		<div className="rich-text">
			<div className="container">
				<div className="row">
					<div className="col-12">{children && parse(children)}</div>
				</div>
			</div>
		</div>
	);
}
