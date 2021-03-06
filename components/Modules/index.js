import Hero from './Hero/Hero';
import IconCards from './IconCards/IconCards';
import IconRow from './IconRow/IconRow';
import RichText from './RichText/RichText';
import AvatarText from './AvatarText/AvatarText';
import DaysBlock from './DaysBlock/DaysBlock';
import BreadcrumbTitle from './BreadcrumbTitle/BreadcrumbTitle';
import Counter from './Counter/Counter';
import BoxList from './BoxList/BoxList';
import Pricelist from './Pricelist/Pricelist';
import Reviews from './Reviews/Reviews';
import ImageBlock from './ImageBlock/ImageBlock';
import CTA from './CTA/CTA';
import Steps from './Steps/Steps';
import ButtonBlock from './ButtonBlock/ButtonBlock';

const mapModules = ({ key, children, props }) => {
	return {
		hero: <Hero key={key} {...props} />,
		cta: <CTA key={key} {...props} />,
		'icon-cards': <IconCards key={key} {...props} />,
		'icon-row': <IconRow key={key} {...props} />,
		'rich-text': (
			<RichText key={key} {...props}>
				{children}
			</RichText>
		),
		'avatar-text': <AvatarText key={key} {...props} />,
		'days-block': <DaysBlock key={key} {...props} />,
		'breadcrumb-title': <BreadcrumbTitle key={key} {...props} />,
		counter: <Counter key={key} {...props} />,
		'box-list': <BoxList key={key} {...props} />,
		pricelist: <Pricelist key={key} {...props} />,
		reviews: <Reviews key={key} {...props} />,
		steps: <Steps key={key} {...props} />,
		'image-block': <ImageBlock key={key} {...props} />,
		'button-block': <ButtonBlock key={key} {...props} />
	};
};
export { mapModules };
