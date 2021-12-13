import Image from 'next/image';

export default function ImageBlock({ style, image, video }) {
	return (
		<div className="image-block" style={{ ...style }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						{image && <Image src={image.src} width={image.width} height={image.height} alt={image.alt} />}
						{video && (
							<video autoPlay loop muted style={{ width: video.width, height: video.height }}>
								<source src={video.src} />
							</video>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
