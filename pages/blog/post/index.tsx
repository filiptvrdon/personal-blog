import { GetServerSideProps } from 'next';
import { ExtendedRecordMap } from 'notion-types';
import DefaultLayout from '@/layouts/default';
import NotionPage from '@/components/notion/NotionPage';
import { getNotionPage } from '@/lib/notion/utils';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface BlogPostPageProps {
  recordMap?: ExtendedRecordMap;
  pageId?: string;
  error?: string;
}

export default function BlogPostPage({ recordMap, pageId, error }: BlogPostPageProps) {
  const router = useRouter();

  // If no page ID was provided, show an error
  if (error || !recordMap || !pageId) {
    return (
      <DefaultLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-2xl">
            <h1 className="text-2xl font-bold mb-4">Error Loading Blog Post</h1>
            <p className="mb-6">{error || "No page ID was provided. Please select a blog post from the blog page."}</p>
            <Link href="/blog" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Back to Blog
            </Link>
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

export const getServerSideProps: GetServerSideProps<BlogPostPageProps> = async ({ query }) => {
  try {
    // Get the page ID from the query parameters
    const pageId = query.id as string;

    if (!pageId) {
      return {
        props: {
          error: "No page ID was provided. Please select a blog post from the blog page."
        }
      };
    }

    // Fetch the Notion page data
    const recordMap = await getNotionPage(pageId);

    return {
      props: {
        recordMap,
        pageId,
      }
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return {
      props: {
        error: "Failed to load the blog post. Please try again later."
      }
    };
  }
};
