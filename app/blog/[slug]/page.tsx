import { allPosts } from 'contentlayer/generated';
import MarkdownContent from '@/components/common/MDXComponents';
import { notFound } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { Params } from '@/app/types';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: Params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <div className="lg:grid lg:grid-cols-12">
      <Sidebar />
      <div className="md:col-span-7 prose prose-slate dark:prose-invert prose-a:text-sky-500 dark:prose-p:text-slate-400 md:text-lg sm:mx-auto py-4 md:p-0">
        <header className="mb-4">
          <h1 className="mb-0 dark:text-zinc-100 text-3xl md:text-4xl font-semibold tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center mt-2">
            <span className="text-slate-600 dark:text-slate-400 rounded text-base inline-block">
              {post.publishedAt}
            </span>
            {/* <span className="mx-3">-</span>
            <ViewCounter trackView slug={post.slug} /> */}
          </div>
        </header>

        <article className="m-auto mb-4 sm:mb-8">
          <MarkdownContent code={post.body.code} />
        </article>
      </div>
    </div>
  );
}
