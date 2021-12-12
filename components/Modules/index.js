import Hero from './Hero/Hero';
import IconCards from './IconCards/IconCards';
import RichText from './RichText/RichText';
import BreadcrumbTitle from './BreadcrumbTitle/BreadcrumbTitle';

const mapModules = ({ key, children, props }) => {
	return {
		hero: <Hero key={key} {...props} />,
		'icon-cards': <IconCards key={key} {...props} />,
		'rich-text': (
			<RichText key={key} {...props}>
				{children}
			</RichText>
		),
		'breadcrumb-title': <BreadcrumbTitle key={key} {...props} />,
	};
};
export { mapModules };
