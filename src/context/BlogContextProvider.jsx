import { useEffect, useState } from 'react';
import { BlogContext } from './BlogContext.js';
// import { createLogger } from 'vite';

const blogs = [
  {
    id: 1771203716645,
    user: 'emma@gmail.com',
    title: 'The Power of Personal Branding in Digital Marketing',
    category: 'Marketing',
    content:
      'Personal branding has become one of the most powerful tools in digital marketing. In a world where consumers connect with people more than logos, building a strong and authentic presence online can dramatically influence trust and conversions.\n\nFrom LinkedIn thought leadership posts to short-form video content, individuals are shaping brand perception faster than traditional campaigns. Companies are increasingly encouraging employees to build their own voice online.\n\nTo get started, define your niche, maintain consistency across platforms, and focus on delivering value-driven content. Over time, this builds authority, credibility, and long-term audience loyalty.',
    upload_date: '2026-03-01',
  },
  {
    id: 1771203568711,
    user: 'john@gmail.com',
    title: '5 Sales Strategies That Actually Close Deals',
    category: 'Sales',
    content:
      'Closing deals today requires more than aggressive pitching. Modern sales is about understanding customer pain points and offering tailored solutions.\n\n1. Ask better questions.\n2. Focus on value, not price.\n3. Follow up consistently.\n4. Use social proof and testimonials.\n5. Build long-term relationships.\n\nThe most successful sales professionals position themselves as consultants rather than sellers. When customers trust you, closing becomes natural.',
    upload_date: '2026-02-27',
  },
  {
    id: 1771203105460,
    user: 'lisa@gmail.com',
    title: 'How Small Businesses Can Scale Sustainably',
    category: 'Business',
    content:
      'Scaling a business isn’t just about increasing revenue; it’s about building systems that support long-term growth.\n\nStart by automating repetitive processes, documenting workflows, and investing in the right talent. Financial discipline is equally important — track cash flow carefully and reinvest strategically.\n\nSustainable growth comes from balancing expansion with operational efficiency. Businesses that scale too quickly without infrastructure often struggle to maintain quality and customer satisfaction.',
    upload_date: '2026-02-25',
  },
  {
    id: 1771203001123,
    user: 'mike@gmail.com',
    title: 'The Rise of AI in Everyday Technology',
    category: 'Technology',
    content:
      'Artificial Intelligence is no longer limited to research labs. It powers recommendation systems, voice assistants, fraud detection, and even customer service chatbots.\n\nCompanies are leveraging AI to improve efficiency, reduce costs, and enhance user experience. From predictive analytics in business to automation in manufacturing, AI is reshaping industries.\n\nAs adoption grows, ethical considerations and data privacy remain key concerns. Organizations must balance innovation with responsibility.',
    upload_date: '2026-02-20',
  },
];

export default function BlogContextProvider({ children }) {
  //   let locBlogs;

  const localBlog = JSON.parse(localStorage.getItem('blogs')) || blogs;
  const [Blog, setBlog] = useState(localBlog);

  function deleteBlog(id) {
    setBlog((prev) => prev.filter((obj) => obj.id !== id));
    // localStorage.setItem('blogs', JSON.stringify(Blog));
  }
  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(Blog));
  }, [Blog]);
  function addBlog(NewBlog) {
    console.log('NewBlog :>> ', NewBlog);
    setBlog((prev) => [...prev, NewBlog]);
    console.log('Blog :>> ', Blog);
    // localStorage.setItem('blogs', JSON.stringify(Blog));
  }

  function updateBlog(id, newData) {
    setBlog((prev) =>
      prev.map((obj) => {
        if (obj.id == id) {
          return { ...obj, ...newData };
        } else {
          return { ...obj };
        }
      })
    );
  }

  return (
    <BlogContext.Provider value={{ Blog, deleteBlog, addBlog, updateBlog }}>
      {children}
    </BlogContext.Provider>
  );
}
