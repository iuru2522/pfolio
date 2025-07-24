import { getBlogPost } from '@/components/blog';

// Generate static params for all blog posts
export function generateStaticParams() {
  const blogPosts = [
    { slug: 'getting-started-with-nextjs' },
    { slug: 'mastering-typescript' },
    { slug: 'power-of-tailwind-css' }
  ];
  
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost(props: any) {
  const { slug } = props.params;
  const post = getBlogPost(slug);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <article className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}