import { Link } from 'react-router-dom';

export default function BlogCard({ id, title, description, category }) {
  return (
    <article>
      <div className="bg-primary">
        <div className="px-6 lg:px-8">
          <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  py-10  sm:py-16 lg:mx-0 lg:max-w-none ">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <a className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800">
                  {category}
                </a>
              </div>
              <div className="h-17.5">
                <h3 className="mt-3 text-lg/6 font-semibold text-white hover:text-gray-300">
                  <a>{title}</a>
                </h3>
              </div>
              <div className="pb-2">
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">
                  {description}
                </p>
              </div>
              <Link to={`/blogdetail/${id}`}>
                <div className="text-primary-text px-4 py-1.5 rounded-lg text-sm bg-primary-200 flex justify-center items-center">
                  read more
                </div>
              </Link>
            </article>
            {/* ))} */}
          </div>
        </div>
      </div>
    </article>
  );
}
