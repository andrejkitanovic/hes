import LayoutBuilder from '../components/LayoutBuilder/LayoutBuilder';

export default function IndexPages({ name }) {
	return <LayoutBuilder link={name} />;
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	return {
		props: {
			name: params.name,
		},
	};
}
