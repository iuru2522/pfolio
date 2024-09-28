import { getBlogPost } from '@/components/blog';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <article className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}s