import { useParams } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';
import { Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const { Blog } = useBlogContext();
  const blog = Blog.find((b) => b.id == id);

  if (!blog) {
    return (
      <div className="bg-primary min-h-screen py-10">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/blogs"
            className="text-primary-text text-sm hover:text-white mb-6 inline-block"
          >
            ← Back to blogs
          </Link>
          <p className="text-white text-lg mt-4">Blog not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* back link */}
        <Link
          to="/blogs"
          className="text-primary-text text-sm hover:text-white mb-6 inline-block"
        >
          ← Back to blogs
        </Link>

        {/* category badge */}
        <span className="inline-block bg-gray-800/60 text-gray-300 text-xs font-medium px-3 py-1 rounded-full mb-4">
          {blog.category}
        </span>

        {/* title */}
        <h1 className="text-3xl font-bold text-white mb-4">{blog.title}</h1>

        {/* author & date row */}
        <div className="flex items-center gap-4 mb-8">
          <div>
            <p className="text-xs text-primary-text">· {blog.upload_date}</p>
          </div>
        </div>

        {/* divider */}
        <hr className="border-primary-100 mb-8" />

        {/* blog content */}
        <div
          className="text-gray-300 text-base leading-7 space-y-5"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        >
          {/* {blog.content} */}
        </div>

        {/* bottom divider */}
        <hr className="border-primary-100 mt-10 mb-6" />

        {/* share row */}
        <div className="flex items-center justify-between">
          <p className="text-primary-text text-sm">Thanks for reading!</p>
          <button className="text-sm text-black bg-btn px-4 py-2 rounded-xl hover:opacity-90">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
