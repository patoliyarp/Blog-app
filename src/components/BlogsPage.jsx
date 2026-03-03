import { useState } from 'react';
import { useBlogContext } from '../context/BlogContext';
import { Link } from 'react-router-dom';

const categories = ['All', 'Marketing', 'Sales', 'Business', 'Technology'];

const BlogsPage = () => {
  const { Blog } = useBlogContext();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = Blog.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-primary min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* page heading */}
        <h1 className="text-3xl font-bold text-white mb-2">All Blogs</h1>
        <p className="text-primary-text text-sm mb-8">
          Browse through all our blog posts
        </p>

        {/* search and filter row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-secondary border border-primary-100 rounded-xl px-4 py-2.5 text-sm text-white placeholder-primary-text outline-none focus:border-btn"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-secondary border border-primary-100 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-btn"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* blog list */}
        {filteredBlogs.length === 0 ? (
          <p className="text-primary-text text-center py-16">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <article
                key={post.id}
                className="bg-secondary rounded-xl p-5 flex flex-col gap-3"
              >
                {/* category */}
                <span className="inline-block w-fit bg-gray-800/60 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>

                {/* title */}
                <h2 className="text-lg h-17.5 font-semibold text-white">
                  {post.title}
                </h2>

                {/* description */}
                <p className="text-sm text-gray-400 line-clamp-3">
                  {post.content}
                </p>

                {/* author + date */}
                <div className="flex items-center gap-3 mt-auto pt-3 border-t border-primary-100">
                  <div>
                    <p className="text-xs text-primary-text">
                      {post?.upload_date}
                    </p>
                  </div>
                </div>

                {/* read more */}
                <Link
                  to={`/blogdetail/${post.id}`}
                  className="text-primary-text text-sm bg-primary-200 text-center py-1.5 rounded-lg hover:text-white"
                >
                  read more
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
