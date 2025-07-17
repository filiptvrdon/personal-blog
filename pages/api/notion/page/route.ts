import { NextApiRequest, NextApiResponse } from 'next';
import { NotionAPI } from 'notion-client';

const notion = new NotionAPI({
	authToken: process.env.NOTION_TOKEN,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { slug } = req.query;

	if (!slug || !Array.isArray(slug)) {
		return res.status(400).json({ error: 'Invalid page ID' });
	}

	const pageId = slug[0];

	try {
		const recordMap = await notion.getPage(pageId);

		res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
		res.status(200).json(recordMap);
	} catch (error) {
		console.error('Error fetching Notion page:', error);
		res.status(500).json({ error: 'Failed to fetch page' });
	}
}
