import { GetStaticProps, GetStaticPaths } from 'next';
import { ExtendedRecordMap } from 'notion-types';
import DefaultLayout from '@/layouts/default';
import NotionPage from '@/components/notion/NotionPage';
import { getNotionPage, getNotionDatabasePages } from '@/lib/notion/utils';
import { useRouter } from 'next/router';

interface BlogPostPageProps {
  recordMap: ExtendedRecordMap;
  pageId: string;
  title: string;
}

export default function BlogPostPage({ recordMap, pageId, title }: BlogPostPageProps) {
  const router = useRouter();

  // Show a loading state when the page is being generated
  if (router.isFallback) {
    return (
      <DefaultLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
            <p>The blog post is being generated. Please wait a moment.</p>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <NotionPage recordMap={recordMap} rootPageId={pageId} />
      </div>
    </DefaultLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Fetch all pages from the Notion database
    const pages = await getNotionDatabasePages();

    // Create paths for each page
    const paths = pages.map((page) => ({
      params: { id: page.id },
    }));

    return {
      paths,
      fallback: 'blocking', // Generate pages on-demand if they don't exist at build time
    };
  } catch (error) {
    console.error('Error generating paths for blog posts:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  try {
    // Get the page ID from the URL
    const pageId = params?.id as string;

    if (!pageId) {
      return {
        notFound: true,
      };
    }

    // Fetch the Notion page data
    const recordMap = await getNotionPage(pageId);

    // Get the page title from the record map
    const pageBlock = recordMap.block[pageId]?.value;
    const title = pageBlock?.properties?.title?.[0]?.[0] || 'Untitled';

    return {
      props: {
        recordMap,
        pageId,
        title,
      },
      revalidate: 60 * 60, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return {
      notFound: true,
    };
  }
};
