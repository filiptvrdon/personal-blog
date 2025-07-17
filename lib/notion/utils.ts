import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
import { Client } from '@notionhq/client';

export const notion = new NotionAPI({
	authToken: process.env.NOTION_TOKEN,
});

export const notionClient = new Client({
	auth: process.env.NOTION_TOKEN,
});

export async function getNotionPage(pageId: string): Promise<ExtendedRecordMap> {
	return await notion.getPage(pageId);
}

export function getNotionPageId(notionPageUrl: string): string {
	const match = notionPageUrl.match(/([a-f0-9]{32})/);
	return match ? match[1] : notionPageUrl;
}

export function mapNotionImageUrl(url: string, block: any): string {
	if (!url) return '';

	if (url.startsWith('data:')) return url;

	// Use Notion's image proxy
	if (url.startsWith('/image')) {
		return `https://www.notion.so${url}`;
	}

	if (!url.startsWith('http')) {
		return `https://www.notion.so${url}`;
	}

	return url;
}

export interface NotionDatabasePage {
	id: string;
	title: string;
	description?: string;
	cover?: string;
	date?: string;
	slug?: string;
}

export async function getNotionDatabasePages(): Promise<NotionDatabasePage[]> {
	try {
		const databaseId = process.env.NOTION_DATABASE_ID;

		if (!databaseId) {
			throw new Error('NOTION_DATABASE_ID is not defined');
		}

		const response = await notionClient.databases.query({
			database_id: databaseId,
		});

		return response.results.map((page: any) => {
			// Extract page properties
			const properties = page.properties;

			// Get title (assuming there's a Title property)
			const titleProperty = properties.Title || properties.Name;
			const title = titleProperty?.title?.map((t: any) => t.plain_text).join('') || 'Untitled';

			// Get description (assuming there's a Description property)
			const descriptionProperty = properties.Description;
			const description = descriptionProperty?.rich_text?.map((t: any) => t.plain_text).join('') || '';

			// Get date (assuming there's a Date property)
			const dateProperty = properties.Date;
			const date = dateProperty?.date?.start || '';

			// Get cover image
			const cover = page.cover?.external?.url || page.cover?.file?.url || '';

			// Get slug (assuming there's a Slug property)
			const slugProperty = properties.Slug;
			const slug = slugProperty?.rich_text?.map((t: any) => t.plain_text).join('') || '';

			return {
				id: page.id,
				title,
				description,
				cover,
				date,
				slug,
			};
		});
	} catch (error) {
		console.error('Error fetching Notion database:', error);
		return [];
	}
}
