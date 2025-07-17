import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { GetStaticProps } from "next";
import { NotionDatabasePage, getNotionDatabasePages } from "@/lib/notion/utils";
import Link from "next/link";
import Image from "next/image";

interface BlogPageProps {
  pages: NotionDatabasePage[];
}

export default function BlogPage({ pages }: BlogPageProps) {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center mb-8">
          <h1 className={title()}>Blog</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {pages.map((page) => (
            <Link
              href={`/blog/post/${page.id}`}
              key={page.id}
              className="group flex flex-col rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              {page.cover && (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={page.cover}
                    alt={page.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">{page.title}</h2>
                {page.description && (
                  <p className="text-gray-600 mb-4 line-clamp-2">{page.description}</p>
                )}
                {page.date && (
                  <p className="text-sm text-gray-500 mt-auto">{new Date(page.date).toLocaleDateString()}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  try {
    const pages = await getNotionDatabasePages();

    return {
      props: {
        pages,
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error("Error fetching Notion database pages:", error);
    return {
      props: {
        pages: [],
      },
      revalidate: 60, // Try again sooner if there was an error
    };
  }
}
