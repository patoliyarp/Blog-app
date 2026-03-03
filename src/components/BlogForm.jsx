import { Formik, Form, Field, ErrorMessage } from 'formik';
import { blogSchema } from '../schema/BlogSchema.js';
import { useBlogContext } from '../context/BlogContext.js';
import { useState } from 'react';

const CreateBlog = () => {
  const { Blog, addBlog } = useBlogContext();

  const [blogState, setBlogState] = useState(false);
  const currDate = new Date();
  const handleSubmitPost = (values, { resetForm }) => {
    const newBlog = {
      id: Date.now(),
      ...values,
      upload_date: currDate.toDateString(),
    };
    addBlog(newBlog);
    resetForm();
    setBlogState(true);
  };

  return (
    <div className="max-w-6xl mx-auto ">
      <h2>Create Blog</h2>
      <div className="mt-3">
        <Formik
          initialValues={{
            title: '',
            category: '',
            content: '',
          }}
          validationSchema={blogSchema}
          onSubmit={handleSubmitPost}
        >
          {({ isSubmitting, values }) => (
            <Form>
              {/*  Blog Title */}
              <div className="">
                <Field
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Enter Post Title"
                  className="w-[80%] bg-secondary border border-primary-100 rounded-xl px-4 py-2.5 text-sm text-white placeholder-primary-text outline-none focus:border-btn"
                  value={values.title}
                />
                <div className="h-5 mt-1">
                  <ErrorMessage
                    name="title"
                    component="p"
                    className=" text-red-500 "
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-3">
                <Field
                  name="content"
                  id="content"
                  as="textarea"
                  rows="10"
                  placeholder="Enter Post Content"
                  className="w-[80%] bg-secondary border border-primary-100 rounded-xl px-4 py-2.5 text-sm text-white placeholder-primary-text outline-none focus:border-btn"
                  value={values.content}
                />
                <div className="h-5 mt-1">
                  <ErrorMessage
                    name="content"
                    component="p"
                    className=" text-red-500"
                  />
                </div>
                {/*Blog Category */}
                <div className="mt-1">
                  <label htmlFor="category">Category</label>
                  <br />
                  <Field
                    as="select"
                    name="category"
                    id="category"
                    className="bg-secondary border border-primary-100 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-btn"
                    value={values.category}
                  >
                    <option value="">Select Category</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Business">Business</option>
                    <option value="Technology">Technology</option>
                  </Field>
                  <div className="h-5 mt-1">
                    <ErrorMessage
                      name="category"
                      component="p"
                      className=" text-red-500"
                    />
                  </div>
                </div>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="px-5 py-3 bg-btn text-black rounded-md mt-3 cursor-pointer"
              >
                Post
              </button>
            </Form>
          )}
        </Formik>
        {blogState && (
          <p className="text-green-600 mt-2">Blog added successfully</p>
        )}
      </div>
    </div>
  );
};
export default CreateBlog;
