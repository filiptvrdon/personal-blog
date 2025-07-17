import { NextApiRequest, NextApiResponse } from 'next';
import { getNotionDatabasePages } from '@/lib/notion/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const pages = await getNotionDatabasePages();

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).json(pages);
  } catch (error) {
    console.error('Error fetching Notion database:', error);
    res.status(500).json({ error: 'Failed to fetch database pages' });
  }
}
