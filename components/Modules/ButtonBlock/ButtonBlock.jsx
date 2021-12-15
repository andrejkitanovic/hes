import Link from 'next/link';

export default function ButtonBlock({ style, button }) {
	return (
		<div className="button-block" style={{ ...style }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Link href={button.href} passHref>
							<div className="button-block__button button">{button.text}</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
