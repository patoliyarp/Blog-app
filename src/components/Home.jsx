import BlogCard from './BlogCard';
import { useBlogContext } from '../context/BlogContext';

export default function Home() {
  const { Blog } = useBlogContext();
  return (
    <>
      <div className="bg-primary grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl px-6 lg:px-8">
        {Blog.map((blog) => {
          console.log(blog);
          return (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.content}
              date={blog.date}
              category={blog.category}
            />
          );
        })}
        {/* <BlogCard /> */}
      </div>
    </>
  );
}
