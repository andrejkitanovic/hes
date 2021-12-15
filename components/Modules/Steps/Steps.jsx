import Image from 'next/image';

export default function Steps({ style, steps }) {
	return (
		<div className="steps" style={{ ...style }}>
			<div className="container">
				{steps?.map((step, index) => (
					<div className="steps__step" key={'steps-step_' + index}>
						<div className="row">
							<div className="col-12 col-md-7">
								<div className="d-flex">
									<div className={`steps__step-number${index === 0 ? ' active' : ''} d-flex align-items-center justify-content-center`}>{index + 1}</div>
									<div className="steps__step-info">
										<div className="steps__step-title">{step.title}</div>
										<div className="steps__step-description">{step.description}</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-5">
								<div className="steps__step-image">{step.image && <Image src={step.image.src} width={step.image.width} height={step.image.height} alt={step.image.alt} />}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
