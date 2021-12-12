import Head from 'next/head';

import { Header } from '../Globals';
import { mapModules } from '../Modules';

// Global & Page config
import global from '../../config/global.json';
import pages from '../../config/pages.json';

function getGlobalConfig() {
	const globalConfig = {
		head: {
			'pre-title': global?.head?.['pre-title'],
			'post-title': global?.head?.['post-title'],
		},
	};

	return globalConfig;
}

function getPageConfig(link) {
	const pageConfig = {
		title: '',
		meta: [],
		modules: [],
	};

	const currentPage = pages.find((page) => page.link === link);
	if (currentPage) {
		pageConfig.title = currentPage.title;

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
				{pageConfig.meta}
				{/* <meta name="description" content="Mesto gde se najbrže prodaje i najjeftinije kupuje!" /> */}
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Header />

			<main>{pageConfig.modules}</main>

			<footer></footer>
		</div>
	);
}
