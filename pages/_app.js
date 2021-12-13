import '../styles/application.scss';
import Head from 'next/head';

import { Header, Footer, Cart } from '../components/Globals';
import { mapModules } from '../components/Modules';
import { AnimatePresence, motion } from 'framer-motion';
import { Provider } from 'react-redux';
import { useStore } from '../store';

// Global & Page config
import global from '../config/global.json';
import pages from '../config/pages.json';

function getGlobalConfig() {
	const globalConfig = {
		head: {
			'pre-title': global?.head?.['pre-title'],
			'post-title': global?.head?.['post-title'],
			links: [],
			meta: [],
		},
		header: global.header,
		footer: global.footer,
		cart: global.cart,
		pageTransition: global.pageTransition,
	};

	global?.head?.links?.forEach((link, index) =>
		globalConfig.head.links.push(<link key={'global-link_' + index} {...link} />)
	);
	global?.head?.meta?.forEach((link, index) =>
		globalConfig.head.meta.push(<link key={'global-meta_' + index} {...link} />)
	);

	return globalConfig;
}

function getPageConfig(link) {
	let pageConfig = {
		title: '',
		meta: [],
		modules: [],
	};

	let currentPage = pages['sr'].find((page) => page.link === link);

	if (!currentPage) currentPage = pages['sr'].find((page) => page.link === '/_error');

	pageConfig.title = currentPage.title;

	currentPage.meta?.forEach((meta, index) => pageConfig.meta.push(<meta key={'page-meta_' + index} {...meta} />));
	pageConfig.modules = currentPage.modules?.map((module, index) => {
		return mapModules({
			key: `${module.type}_${index}`,
			props: module.props,
			children: module.children,
		})[module.type];
	});

	return pageConfig;
}

export default function MyApp({ Component, pageProps, router }) {
	const is404 = router.route === '/_error';

	const globalConfig = getGlobalConfig();
	const pageConfig = getPageConfig(is404 ? '/_error' : router.asPath);

	pageProps = {
		...pageProps,
		modules: pageConfig?.modules,
	};

	const store = useStore(pageProps.initialReduxState)

	return (
		<Provider store={store}>
			<div>
				<Head>
					<title>
						{globalConfig?.head?.['pre-title']}
						{pageConfig.title}
						{globalConfig?.head?.['post-title']}
					</title>
					{globalConfig?.head?.meta}
					{pageConfig?.meta}
					{globalConfig?.head?.links}
				</Head>

				<Header {...globalConfig?.header} active={router.asPath} />

				<main className="main">
					<Cart {...globalConfig?.cart} />
					<AnimatePresence exitBeforeEnter>
						<motion.div key={router.asPath} {...globalConfig?.pageTransition}>
							<Component {...pageProps} />
						</motion.div>
					</AnimatePresence>
				</main>
				<Footer {...globalConfig?.footer} />
			</div>
		</Provider>
	);
}
