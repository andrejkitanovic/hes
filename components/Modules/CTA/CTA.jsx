import parse from 'html-react-parser';
import Link from 'next/link';

export default function CTA({ style, type, text, button }) {
	let cols = {
		first: 8,
		second: 4,
	};

	if (type === 'column') {
		cols.first = 12;
		cols.second = 12;
	}

	return (
		<div className={`cta${type === 'column' ? ' column' : ''}`} style={{ ...style }}>
			<div className="container">
				<div className={`row align-items-center`}>
					<div className={`col-${cols.first}`}>
						<div className="cta__text">{text && parse(text)}</div>
					</div>
					<div className={`col-${cols.second}`}>
						{button && (
							<Link href={button.href} passHref>
								<div className="cta__button button" style={{ ...button.style }}>
									{button.text}
								</div>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
