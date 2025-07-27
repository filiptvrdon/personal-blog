import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { GetStaticProps } from "next";
import { NotionDatabasePage, getNotionDatabasePages } from "@/lib/notion/utils";
import Link from "next/link";
import { Card, CardHeader, CardFooter, CardBody, Image, Button } from "@heroui/react";

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

        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
          {pages.slice(0, 3).map((page, index) => (
            <Card className="col-span-12 sm:col-span-4 h-[300px]" key={page.id}>
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                {page.date && (
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    {new Date(page.date).toLocaleDateString()}
                  </p>
                )}
                <h4 className="text-white font-medium text-large">{page.title}</h4>
              </CardHeader>
              {page.cover ? (
                <Image
                  removeWrapper
                  alt={page.title}
                  className="z-0 w-full h-full object-cover"
                  src={page.cover}
                />
              ) : (
                <div className="z-0 w-full h-full bg-gradient-to-br from-default-100 to-default-200 flex items-center justify-center">
                  <span className="text-default-400 text-sm">No Image</span>
                </div>
              )}
              <Link href={`/blog/post/${page.id}`} className="absolute inset-0 z-20">
                <span className="sr-only">View {page.title}</span>
              </Link>
            </Card>
          ))}

          {pages.length > 3 && (
            <Card isFooterBlurred className="col-span-12 sm:col-span-5 h-[300px]" key={pages[3]?.id}>
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                {pages[3]?.date && (
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    {new Date(pages[3].date).toLocaleDateString()}
                  </p>
                )}
                <h4 className="text-white font-medium text-2xl">{pages[3]?.title}</h4>
              </CardHeader>
              {/* Gradient overlay for better title visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-1"></div>
              {pages[3]?.cover ? (
                <Image
                  removeWrapper
                  alt={pages[3].title}
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src={pages[3].cover}
                />
              ) : (
                <div className="z-0 w-full h-full bg-gradient-to-br from-default-100 to-default-200 flex items-center justify-center">
                  <span className="text-default-400 text-sm">No Image</span>
                </div>
              )}
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">{pages[3]?.description?.substring(0, 30) || "Read more"}</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  Read
                </Button>
              </CardFooter>
              <Link href={`/blog/post/${pages[3]?.id}`} className="absolute inset-0 z-20">
                <span className="sr-only">View {pages[3]?.title}</span>
              </Link>
            </Card>
          )}

          {pages.length > 4 && (
            <Card isFooterBlurred className="col-span-12 sm:col-span-7 h-[300px]" key={pages[4]?.id}>
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                {pages[4]?.date && (
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    {new Date(pages[4].date).toLocaleDateString()}
                  </p>
                )}
                <h4 className="text-white/90 font-medium text-xl">{pages[4]?.title}</h4>
              </CardHeader>
              {pages[4]?.cover ? (
                <Image
                  removeWrapper
                  alt={pages[4].title}
                  className="z-0 w-full h-full object-cover"
                  src={pages[4].cover}
                />
              ) : (
                <div className="z-0 w-full h-full bg-gradient-to-br from-default-100 to-default-200 flex items-center justify-center">
                  <span className="text-default-400 text-sm">No Image</span>
                </div>
              )}
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">{pages[4]?.description?.substring(0, 50) || "Read more"}</p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  Read
                </Button>
              </CardFooter>
              <Link href={`/blog/post/${pages[4]?.id}`} className="absolute inset-0 z-20">
                <span className="sr-only">View {pages[4]?.title}</span>
              </Link>
            </Card>
          )}

          {/* Display remaining posts in a standard grid */}
          {pages.length > 5 && (
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {pages.slice(5).map((page) => (
                <Card className="h-[250px]" key={page.id}>
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    {page.date && (
                      <p className="text-tiny text-white/60 uppercase font-bold">
                        {new Date(page.date).toLocaleDateString()}
                      </p>
                    )}
                    <h4 className="text-white font-medium text-large">{page.title}</h4>
                  </CardHeader>
                  {page.cover ? (
                    <Image
                      removeWrapper
                      alt={page.title}
                      className="z-0 w-full h-full object-cover"
                      src={page.cover}
                    />
                  ) : (
                    <div className="z-0 w-full h-full bg-gradient-to-br from-default-100 to-default-200 flex items-center justify-center">
                      <span className="text-default-400 text-sm">No Image</span>
                    </div>
                  )}
                  <Link href={`/blog/post/${page.id}`} className="absolute inset-0 z-20">
                    <span className="sr-only">View {page.title}</span>
                  </Link>
                </Card>
              ))}
            </div>
          )}
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
