import Hero from './Hero/Hero';
import IconCards from './IconCards/IconCards';
import RichText from './RichText/RichText';
import AvatarText from './AvatarText/AvatarText';
import BreadcrumbTitle from './BreadcrumbTitle/BreadcrumbTitle';
import Counter from './Counter/Counter';

const mapModules = ({ key, children, props }) => {
	return {
		hero: <Hero key={key} {...props} />,
		'icon-cards': <IconCards key={key} {...props} />,
		'rich-text': (
			<RichText key={key} {...props}>
				{children}
			</RichText>
		),
		'avatar-text': <AvatarText key={key} {...props} />,
		'breadcrumb-title': <BreadcrumbTitle key={key} {...props} />,
		counter: <Counter key={key} {...props} />,
	};
};
export { mapModules };
