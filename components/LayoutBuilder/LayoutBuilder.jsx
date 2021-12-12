import Head from 'next/head';

import { Header, Footer } from '../Globals';
import { mapModules } from '../Modules';
import { AnimatePresence, motion } from 'framer-motion';

// Global & Page config
import global from '../../config/global.json';
import pages from '../../config/pages.json';

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
	const pageConfig = {
		title: '',
		meta: [],
		modules: [],
	};

	const currentPage = pages['sr'].find((page) => page.link === link);
	if (currentPage) {
		pageConfig.title = currentPage.title;

		currentPage.meta?.forEach((meta, index) => pageConfig.meta.push(<meta key={'page-meta_' + index} {...meta} />));
		pageConfig.modules = currentPage.modules?.map((module, index) => {
			return mapModules({
				key: `${module.type}_${index}`,
				props: module.props,
				children: module.children,
			})[module.type];
		});
	}

	return pageConfig;
}

export default function LayoutBuilder({ link }) {
	const globalConfig = getGlobalConfig();
	const pageConfig = getPageConfig(link);

	return (
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

			<Header {...globalConfig?.header} active={link} />
			<main className="main">
				<AnimatePresence exitBeforeEnter>
					<motion.div key={link} {...globalConfig?.pageTransition}>
						{pageConfig?.modules}
					</motion.div>
				</AnimatePresence>
			</main>
			<Footer {...globalConfig?.footer} />
		</div>
	);
}
