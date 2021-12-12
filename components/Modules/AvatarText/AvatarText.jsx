import Image from 'next/image';
import parse from 'html-react-parser';

export default function AvatarText({ reverse, image, text }) {
	return (
		<div className="avatar-text">
			<div className="container">
				<div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
					<div className="col-5">
						<div className="avatar-text__image">{image && <Image src={image.src} width={350} height={350} />}</div>
					</div>
					<div className="col-7">
						<div className="avatar-text__text">{text && parse(text)}</div>
					</div>
				</div>
			</div>
		</div>
	);
}