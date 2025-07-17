import { GetStaticProps, GetStaticPaths } from 'next';
import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
import NotionPage from '@/components/notion/NotionPage';
import DefaultLayout from '@/layouts/default';

interface NotionPageProps {
	recordMap: ExtendedRecordMap;
	pageId: string;
}

const NotionPageView = ({ recordMap, pageId }: NotionPageProps) => {
	return (
		<DefaultLayout>
			<NotionPage recordMap={recordMap} rootPageId={pageId} />
		</DefaultLayout>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	// You can pre-define some paths here if needed
	return {
		paths: [],
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const pageId = params?.pageId as string;

	if (!pageId) {
		return {
			notFound: true,
		};
	}

	const notion = new NotionAPI({
		authToken: process.env.NOTION_TOKEN,
	});

	try {
		const recordMap = await notion.getPage(pageId);

		return {
			props: {
				recordMap,
				pageId,
			},
			revalidate: 86400, // Revalidate every 24 hours
		};
	} catch (error) {
		console.error('Error fetching Notion page:', error);
		return {
			notFound: true,
		};
	}
};

export default NotionPageView;
