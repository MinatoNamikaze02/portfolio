import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';


export default function BlogListPage() {

  return (
    <>
      <div className="mt-4 md:mt-10">
        <h1 className="text-4xl md:text-7xl text-slate-900 dark:text-white font-bold leading-tight md:mt-4">
          Blog
        </h1>
        <h2 className="text-slate-600 dark:text-slate-300 max-w-2xl text-lg md:text-xl my-0 mt-4 md:mt-8">
          Always up for a convo about tech in general. Feel free to connect with
          me on{' '}
          <a
            href="https://www.linkedin.com/in/arjhunsreedar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline inline"
          >
            {' '}
            Linkedin.
          </a>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-6 mt-8">
        {allPosts
          .sort(
            (a, b) =>
              new Date(b.publishedAtFormatted).valueOf() -
              new Date(a.publishedAtFormatted).valueOf()
          )
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="hover:cursor-pointer group hover:rounded-lg my-4 overflow-hidden flex flex-col"
            >
              <div className="h-[200px] relative rounded-lg border-transparent border-2 group-hover:border-sky-500 p-1 overflow-hidden">
                <Image
                  src={post.imageSrc as string}
                  alt={post.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="mt-3 sm:mt-6 p-1">
                <span className="text-slate-400 font-semibold dark:text-slate-400 text-lg sm:text-xl my-2">
                  {post.publishedAt}
                  {/* <span className="mx-3"> — </span> */}
                  {/* <ViewCounter trackView={false} slug={post.slug} /> */}
                </span>
                <header className="text-slate-900 dark:text-white font-semibold leading-tight text-2xl sm:text-3xl mt-4">
                  {post.title}
                </header>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
