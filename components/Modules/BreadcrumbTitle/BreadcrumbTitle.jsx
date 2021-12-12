import { Fragment } from 'react';
import Link from 'next/link';
import { ArrowRightSVG } from '../../Globals/SVGS/SVGS';

export default function BreadcrumbTitle({ title, links }) {
	return (
		<div className="breadcrumb-title">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="breadcrumb-title__breadcrumb d-flex justify-content-center align-items-center">
							{links?.map((link, index) => {
								return (
									<Fragment key={'breadcrumb-link_' + index}>
										{index !== 0 && (
											<div className="breadcrumb-title__breadcrumb-arrow">
												<ArrowRightSVG />
											</div>
										)}
										{link.href ? (
											<Link href={link.href}>
												<a className="breadcrumb-title__breadcrumb-link">{link.title}</a>
											</Link>
										) : (
											<p className="breadcrumb-title__breadcrumb-link">{link.title}</p>
										)}
									</Fragment>
								);
							})}
						</div>
						<h1 className="breadcrumb-title__title">{title}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
